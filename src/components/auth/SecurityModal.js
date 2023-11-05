import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, ButtonGroup, FormControl, FormErrorMessage, FormLabel, Input, useDisclosure, useToast } from "@chakra-ui/react";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { updateEmailAddress } from "@/utils";
import { updatePassword } from "firebase/auth";
import { currentUser } from "@/firebase";
const SecurityModal = () => {
    const [toChange, setToChange] = useState('');
    const cancelRef = useRef();
    const { isOpen, onClose, onOpen } = useDisclosure();
    const toast = useToast();
    const validationSchema = toChange === 'email'
        ?
            yup.object().shape({
                email: yup
                    .string()
                    .required('El correo es requerido')
                    .email('Debe ser un correo válido'),
            })
        :
            yup.object().shape({
                password: yup
                    .string()
                    .required('La contraseña es requerida')
                    .min(6, 'Debes ingresar al menos 6 caracteres')
            });
    const { handleSubmit, register, formState: { errors, isSubmitting }, reset } = useForm({ resolver: yupResolver(validationSchema) });
    const onEmail = async ({ email }) => {
        try {
            email && await updateEmailAddress(email);
            toast({
                status: 'success',
                duration: 1000,
                position: 'top',
                title: 'Correo electrónico',
                description: 'Tu correo electrónico ha sido actualizado.'
            });
            reset();
            onClose();
        }
        catch (e) {
            throw Error(e, { cause: 'error' });
        }
    };
    const onPassword = async ({ password }) => {
        try {
            (currentUser && password) && await updatePassword(currentUser, password);
            toast({
                status: 'success',
                duration: 1000,
                position: 'top',
                title: 'Contraseña',
                description: 'Tu contraseña ha sido actualizada.'
            });
            reset();
            onClose();
        }
        catch (e) {
            throw Error(e, { cause: 'error' });
        }
    };
    return (_jsxs(_Fragment, { children: [_jsxs(ButtonGroup, { children: [_jsx(Button, { onClick: () => { setToChange('email'); onOpen(); }, children: "Cambiar correo" }), _jsx(Button, { onClick: () => { setToChange('password'); onOpen(); }, children: "Cambiar contrase\u00F1a" })] }), toChange === 'email' ?
                _jsx(AlertDialog, { isOpen: isOpen, onClose: onClose, leastDestructiveRef: cancelRef, size: ['sm', 'md', 'lg', 'xl'], children: _jsx(AlertDialogOverlay, { children: _jsxs(AlertDialogContent, { children: [_jsx(AlertDialogHeader, { fontSize: 'lg', fontWeight: 'bold', children: "Cambiar correo" }), _jsx(AlertDialogCloseButton, {}), _jsxs("form", { onSubmit: handleSubmit(onEmail), children: [_jsx(AlertDialogBody, { children: _jsxs(FormControl, { isInvalid: !!errors.email, children: [_jsx(FormLabel, { htmlFor: 'email', children: "Nuevo correo electr\u00F3nico" }), _jsx(Input, { autoComplete: 'false', id: 'email', type: 'email', ...register('email') }), errors.email && _jsx(FormErrorMessage, { children: errors.email.message })] }) }), _jsx(AlertDialogFooter, { children: _jsx(Button, { type: 'submit', colorScheme: 'blue', isLoading: isSubmitting, children: "Actualizar" }) })] })] }) }) })
                :
                    _jsx(AlertDialog, { isOpen: isOpen, onClose: onClose, leastDestructiveRef: cancelRef, size: ['sm', 'md', 'lg', 'xl'], children: _jsx(AlertDialogOverlay, { children: _jsxs(AlertDialogContent, { children: [_jsx(AlertDialogHeader, { fontSize: 'lg', fontWeight: 'bold', children: "Cambiar contrase\u00F1a" }), _jsx(AlertDialogCloseButton, {}), _jsxs("form", { onSubmit: handleSubmit(onPassword), children: [_jsx(AlertDialogBody, { children: _jsxs(FormControl, { children: [_jsx(FormLabel, { htmlFor: 'password', children: "Nueva contrase\u00F1a" }), _jsx(Input, { autoComplete: 'false', id: 'password', type: 'password', ...register('password') }), errors.password && _jsx(FormErrorMessage, { children: errors.password.message })] }) }), _jsx(AlertDialogFooter, { children: _jsx(Button, { isLoading: isSubmitting, type: 'submit', colorScheme: 'blue', children: "Actualizar" }) })] })] }) }) })] }));
};
export default SecurityModal;
