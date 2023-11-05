import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";
export const sendEmail = async ({ name, email, message }) => {
    const emailContent = {
        to: import.meta.env.DEV ? import.meta.env.VITE_TO_DEV_EMAIL : import.meta.env.VITE_TO_PROD_EMAIL,
        message: {
            subject: 'Nuevo mensaje de cliente - Xochicalli Commerce',
            text: message,
            html: `
            <h1>Nuevo mensaje de: ${name}</h1>
            <h3>Correo del cliente: ${email}</h3>
            <p>Mensaje: ${message}</p>
            `,
        }
    };
    try {
        return await addDoc(collection(db, 'emails'), emailContent);
    }
    catch (error) {
        return error;
    }
};
