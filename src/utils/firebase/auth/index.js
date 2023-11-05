import { FirebaseError } from "firebase/app";
import { createUserWithEmailAndPassword, FacebookAuthProvider, getMultiFactorResolver, GoogleAuthProvider, multiFactor, PhoneAuthProvider, PhoneMultiFactorGenerator, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateEmail, updatePassword } from "firebase/auth";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { auth, currentUser, db } from "@/firebase";
export const loginWithProvider = async ({ providers }) => {
    try {
        switch (providers) {
            case 'Google':
                const googleProvider = new GoogleAuthProvider();
                return await signInWithPopup(auth, googleProvider);
            case 'Facebook':
                const facebookProvider = new FacebookAuthProvider();
                return await signInWithPopup(auth, facebookProvider);
        }
    }
    catch (error) {
        if (error instanceof FirebaseError)
            throw Error;
    }
};
export const loginWithEmail = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        localStorage.setItem('uid', user.uid);
        return user;
    }
    catch (error) {
        if (error instanceof FirebaseError)
            throw Error;
    }
};
export const signUpWithEmail = async (email, password, { birthday, fatherSurname, gender, motherSurname, name, phoneNumber, securitySelect, securityQuestion }) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        let parsedDate = '';
        let age = null;
        if (birthday) {
            const stringDate = new Date(birthday);
            if (!isNaN(stringDate.getTime())) {
                parsedDate = stringDate.toLocaleDateString('en-US', {
                    month: '2-digit',
                    day: '2-digit',
                    year: 'numeric'
                });
                const now = new Date();
                const birthDate = new Date(birthday);
                age = now.getFullYear() - birthDate.getFullYear();
                const monthDiff = now.getMonth() - birthDate.getMonth();
                if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthDate.getDate()))
                    age--;
            }
            else {
                throw new Error('Invalid date format');
            }
        }
        await setDoc(doc(db, 'users', user.uid), {
            age,
            birthday: parsedDate,
            createdAt: new Date().toLocaleDateString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric'
            }),
            email: user.email,
            fatherSurname,
            gender,
            motherSurname,
            name,
            // phoneNumber: `+52${String(phoneNumber)}`,
            phoneNumber: String(phoneNumber),
            role: 'user',
            uid: user.uid,
            securitySelect,
            securityQuestion,
            profilePicture: null,
            address: null,
        });
        await sendEmailVerification(auth.currentUser);
        localStorage.setItem('uid', user.uid);
        return user;
    }
    catch (error) {
        if (error instanceof FirebaseError)
            throw Error;
    }
};
export const updateEmailAddress = async (email) => {
    try {
        if (!currentUser || !currentUser.uid) {
            throw new Error('User not authenticated');
        }
        await updateEmail(currentUser, email);
        await setDoc(doc(db, 'users', currentUser.uid), {
            email
        }, { merge: true });
        return true;
    }
    catch (error) {
        if (error instanceof FirebaseError)
            throw Error;
    }
};
export const verifyUserEnrolled = (user) => multiFactor(user).enrolledFactors.length > 0;
export const send2FA = async (user, phoneNumber, verifier) => {
    const session = await multiFactor(user).getSession();
    const phoneOptions = {
        phoneNumber,
        session,
    };
    const phoneAuth = new PhoneAuthProvider(auth);
    try {
        return await phoneAuth.verifyPhoneNumber(phoneOptions, verifier);
    }
    catch (error) {
        return error;
    }
};
export const enroll2FA = async (user, verificationCodeId, verificationCode) => {
    const phoneAuthCred = PhoneAuthProvider.credential(verificationCodeId, verificationCode);
    const mfaAssertion = PhoneMultiFactorGenerator.assertion(phoneAuthCred);
    try {
        return true && await multiFactor(user).enroll(mfaAssertion, 'Personal phnumber');
    }
    catch (e) {
        console.log(e);
        return false;
    }
};
export const verifyUserMFA = async (error, recaptchaVerifier, index) => {
    const resolver = getMultiFactorResolver(auth, error);
    if (resolver.hints[index].factorId === PhoneMultiFactorGenerator.FACTOR_ID) {
        const phoneOptions = {
            multitactorHint: resolver.hints[index],
            session: resolver.session
        };
        const phAuthProvider = new PhoneAuthProvider(auth);
        try {
            const verificationId = await phAuthProvider.verifyPhoneNumber(phoneOptions, recaptchaVerifier);
            return {
                verificationId,
                resolver
            };
        }
        catch (error) {
            return error;
        }
    }
};
export const forgotPasswordWithQuestion = async ({ email, securityQuestion, securitySelect, newPassword }) => {
    let flag = false;
    const { docs } = await getDocs(collection(db, 'users'));
    const users = docs.map((doc) => doc.data());
    for (const user of users) {
        if (user.email === email && user.securityQuestion === securityQuestion && user.securitySelect.toLowerCase() === securitySelect.toLowerCase()) {
            try {
                currentUser && await updatePassword(currentUser, newPassword).then(() => console.log('worked')).catch((e) => console.log(e));
                flag = true;
            }
            catch (error) {
                console.error(error);
                throw new Error('Failed to update password');
            }
        }
    }
    return flag ? true : false;
};
export const forgotPasswordWithEmail = async ({ email }) => {
    try {
        await sendPasswordResetEmail(auth, email);
        return true;
    }
    catch (error) {
        return false;
    }
};
export const logOut = async () => {
    try {
        await signOut(auth);
        localStorage.removeItem('uid');
    }
    catch (error) {
        console.error(error);
    }
};
