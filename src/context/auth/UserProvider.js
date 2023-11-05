import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase';
import { UserContext } from ".";
import { queryUser } from '@/utils';
export const UserProvider = ({ children }) => {
    const [userRole, setUserRole] = useState('');
    const [user, setUser] = useState(null);
    const [userInformation, setUserInformation] = useState({
        gender: '',
        fatherSurname: '',
        age: 0,
        securityQuestion: '',
        birthday: '',
        role: '',
        createdAt: '',
        securitySelect: '',
        name: '',
        address: null,
        email: '',
        profilePicture: '',
        uid: '',
        cards: {},
        phoneNumber: '',
        motherSurname: '',
    });
    useEffect(() => {
        const getUserRole = async () => {
            const userData = await queryUser(user?.uid);
            if (userData && userData.role) {
                setUserInformation(userData);
                setUserRole(userData.role);
            }
        };
        const unsubscribe = onAuthStateChanged(auth, (activeUser) => {
            if (activeUser) {
                setUser(activeUser);
            }
            else {
                setUser(null);
            }
        });
        getUserRole();
        return unsubscribe;
    }, [user?.uid, userInformation]);
    return (_jsx(UserContext.Provider, { value: { user, userRole, userInformation }, children: children }));
};
