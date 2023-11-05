import { db } from "@/firebase";
import { collection, doc, getDocs, onSnapshot, updateDoc } from "firebase/firestore";
// Obtener los archivos de la colección "users"
export const getUsers = async () => {
    try {
        const usersRef = collection(db, "users");
        const usersSnapshot = await getDocs(usersRef);
        const users = [];
        usersSnapshot.forEach((doc) => {
            users.push({ id: doc.id, ...doc.data() });
        });
        return users;
    }
    catch (error) {
        console.error("Error al obtener los usuarios:", error);
        return [];
    }
};
export const getUserss = (callback) => {
    const usersRef = collection(db, "users");
    const unsubscribe = onSnapshot(usersRef, (querySnapshot) => {
        const users = [];
        querySnapshot.forEach((doc) => {
            users.push({ id: doc.id, ...doc.data() });
        });
        callback(users);
    });
    return unsubscribe;
};
export const updateUser = async (userId, newData) => {
    try {
        const userRef = doc(db, "users", userId);
        await updateDoc(userRef, newData);
        console.log(`Usuario actualizado correctamente :${userId} `);
        return true;
    }
    catch (error) {
        console.error("Error al actualizar el usuario:", error);
        return false;
    }
};
