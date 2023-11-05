import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Flex, FormControl, FormErrorMessage, FormLabel, Input, Radio, Select, Stack, useDisclosure, useMediaQuery, useToast, RadioGroup, InputGroup, InputRightElement, IconButton } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { forgotPasswordWithEmail, forgotPasswordWithQuestion } from '@/utils';
import { FiEye, FiEyeOff } from 'react-icons/fi';
export const ForgotPassword = () => {
    const [show, setShow] = useState(true);
    const [formState, setFormState] = useState(0);
    const [securityQ, setSecurityQ] = useState('¿Cuál es tu color favorito?');
    const [recoveryMethod, setRecoveryMethod] = useState('email');
    const cancelRef = useRef();
    const { isOpen, onClose, onOpen } = useDisclosure();
    const toast = useToast();
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
    const nextForm = () => formState <= 3 && setFormState(prev => prev + 1);
    const prevForm = () => formState >= 0 && setFormState(prev => prev - 1);
    const onChangeRecoveryMethod = () => recoveryMethod === 'email' ? setRecoveryMethod('emailQuestion') : setRecoveryMethod('email');
    const setQuestionValue = ({ target }) => setSecurityQ(target.value);
    const validationSchemaQuestion = yup.object().shape({
        email: yup
            .string()
            .email('El email no es válido')
            .required('El correo es requerido'),
        securitySelect: yup
            .string()
            .required('La pregunta de seguridad no puede estar vacía'),
        newPassword: yup
            .string()
            .required('Debes ingresar una nueva contraseña')
            .matches(
        // eslint-disable-next-line no-useless-escape
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/, 'La contraseña debe contener al menos 1 letra minúscula, 1 letra mayúscula, 1 número y 1 caracter especial')
            .min(6, 'La contraseña debe tener mínimo 6 caracteres'),
    });
    const validationSchemaEmail = yup.object().shape({
        email: yup
            .string()
            .email('El email no es válido')
            .required('El correo es requerido')
    });
    const { handleSubmit, register, reset, formState: { errors, isSubmitting }, } = useForm({ resolver: yupResolver(recoveryMethod === 'email' ? validationSchemaEmail : validationSchemaQuestion) });
    const onSubmitQuestion = async ({ email, securityQuestion = securityQ, securitySelect, newPassword }) => {
        await forgotPasswordWithQuestion({ email, securityQuestion, securitySelect, newPassword }).then(() => {
            console.log({
                email,
                securityQuestion,
                securitySelect,
                newPassword
            });
            toast({
                status: 'success',
                duration: 1500,
                isClosable: false,
                title: 'Recuperación de contraseña',
                position: isLargerThan800 ? 'top-right' : 'bottom',
                description: 'Hemos actualizado tu contrasñea'
            });
            reset();
        }).catch(() => {
            toast({
                status: 'error',
                duration: 1500,
                isClosable: false,
                title: 'Recuperación de contraseña',
                position: isLargerThan800 ? 'top-right' : 'bottom',
                description: 'Respuesta incorrecta'
            });
        });
    };
    const onSubmitEmail = async (email) => {
        try {
            await forgotPasswordWithEmail(email);
            toast({
                status: 'success',
                duration: 1500,
                isClosable: false,
                title: 'Recuperación de contraseña',
                position: isLargerThan800 ? 'top-right' : 'bottom',
                description: 'Correo enviado exitosamente'
            });
            reset();
            onClose();
        }
        catch (error) {
            toast({
                status: 'error',
                duration: 1500,
                isClosable: false,
                title: 'Recuperación de contraseña',
                position: isLargerThan800 ? 'top-right' : 'bottom',
                description: 'Algo salió mal'
            });
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(Button, { variant: 'link', colorScheme: 'blue', onClick: onOpen, children: "Olvid\u00E9 mi contrase\u00F1a" }), _jsx(AlertDialog, { isOpen: isOpen, onClose: onClose, leastDestructiveRef: cancelRef, size: ['xs', 'sm', 'md', 'lg', 'xl'], children: _jsx(AlertDialogOverlay, { children: _jsxs(AlertDialogContent, { children: [_jsx(AlertDialogHeader, { fontSize: 'lg', fontWeight: 'bold', children: "Recuperar contrase\u00F1a" }), _jsx(AlertDialogCloseButton, {}), _jsxs(AlertDialogBody, { children: [formState === 0 &&
                                        _jsx(RadioGroup, { onChange: onChangeRecoveryMethod, value: recoveryMethod, children: _jsxs(Stack, { children: [_jsx(Radio, { value: 'email', children: "Correo electr\u00F3nico" }), _jsx(Radio, { value: 'emailQuestion', children: "Correo electr\u00F3nico y pregunta de seguridad" })] }) }), (formState === 1 && recoveryMethod === 'email') &&
                                        _jsxs(FormControl, { isInvalid: !!errors.email, children: [_jsx(FormLabel, { htmlFor: 'email', children: "Correo electr\u00F3nico" }), _jsx(Input, { autoComplete: 'false', type: 'email', id: 'email', placeholder: 'correo@electronico.com', ...register('email') }), errors.email && _jsx(FormErrorMessage, { children: errors.email.message })] }), recoveryMethod === 'emailQuestion' &&
                                        _jsxs("form", { onSubmit: handleSubmit(onSubmitQuestion), children: [formState === 1 &&
                                                    _jsxs(FormControl, { isInvalid: !!errors.email, children: [_jsx(FormLabel, { htmlFor: 'email', children: "Correo electr\u00F3nico" }), _jsx(Input, { autoComplete: 'false', type: 'email', id: 'email', placeholder: 'correo@electronico.com', ...register('email') }), errors.email && _jsx(FormErrorMessage, { children: errors.email.message })] }), formState === 2 &&
                                                    _jsxs(_Fragment, { children: [_jsxs(FormControl, { children: [_jsx(FormLabel, { htmlFor: 'securityQuestion', children: "Pregunta de seguridad" }), _jsxs(Select, { bgColor: 'white', defaultValue: "\u00BFCu\u00E1l es tu color favorito?", onChange: setQuestionValue, children: [_jsx("option", { value: "\u00BFCu\u00E1l es tu color favorito?", children: "\u00BFCu\u00E1l es tu color favorito?" }), _jsx("option", { value: "\u00BFCu\u00E1l es tu pel\u00EDcula favorita?", children: "\u00BFCu\u00E1l es tu pel\u00EDcula favorita?" }), _jsx("option", { value: "\u00BFCu\u00E1l es tu equipo de f\u00FAtbol favorito?", children: "\u00BFCu\u00E1l es tu equipo de f\u00FAtbol favorito?" }), _jsx("option", { value: "\u00BFCu\u00E1l es tu g\u00E9nero de m\u00FAsica favorito?", children: "\u00BFCu\u00E1l es tu g\u00E9nero de m\u00FAsica favorito?" }), _jsx("option", { value: "\u00BFCu\u00E1l es el nombre de tu mascota?", children: "\u00BFCu\u00E1l es el nombre de tu mascota?" })] })] }), _jsxs(FormControl, { isInvalid: !!errors.securitySelect, mt: 4, children: [_jsx(FormLabel, { htmlFor: 'securitySelect', children: "Respuesta" }), _jsx(Input, { autoComplete: 'false', type: 'text', id: 'securitySelect', bgColor: ['white', 'transparent'], borderColor: 'gray.200', placeholder: 'Tu respuesta aqu\u00ED...', ...register('securitySelect') }), errors.securitySelect && _jsx(FormErrorMessage, { children: errors.securitySelect.message })] })] }), formState === 3 &&
                                                    _jsx(_Fragment, { children: _jsxs(FormControl, { isInvalid: !!errors.newPassword, children: [_jsx(FormLabel, { htmlFor: 'newPassword', children: "Nueva contrase\u00F1a" }), _jsxs(InputGroup, { children: [_jsx(InputRightElement, { children: _jsx(IconButton, { variant: 'link', "aria-label": 'Show password', icon: show ? _jsx(FiEye, {}) : _jsx(FiEyeOff, {}), onClick: () => setShow(!show) }) }), _jsx(Input, { autoComplete: 'false', type: show ? 'password' : 'text', id: 'password', bgColor: ['white', 'transparent'], placeholder: '********', borderColor: 'gray.200', ...register('newPassword') })] }), errors.newPassword && _jsx(FormErrorMessage, { children: errors.newPassword.message })] }) })] })] }), _jsx(AlertDialogFooter, { children: _jsxs(Flex, { direction: ['column', 'column', 'column', 'row'], width: '100%', gap: 1.5, children: [_jsx(Button, { width: '100%', colorScheme: 'red', type: 'button', onClick: prevForm, isDisabled: formState === 0, children: "Anterior" }), _jsx(Button, { marginInlineStart: 0, width: '100%', colorScheme: 'blue', onClick: nextForm, isDisabled: ((formState === 3) || (recoveryMethod === 'email' && formState === 1)), children: "Siguiente" }), ((formState === 3) || (recoveryMethod === 'email' && formState === 1)) &&
                                            _jsx(Button, { marginInlineStart: 0, colorScheme: 'purple', width: '100%', isLoading: isSubmitting, onClick: recoveryMethod === 'email'
                                                    ?
                                                        handleSubmit(onSubmitEmail)
                                                    :
                                                        handleSubmit(onSubmitQuestion), children: recoveryMethod === 'email'
                                                    ?
                                                        'Enviar correo'
                                                    :
                                                        'Actualizar contraseña' })] }) })] }) }) })] }));
};
