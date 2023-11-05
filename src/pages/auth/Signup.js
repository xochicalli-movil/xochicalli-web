import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Box, Button, ButtonGroup, Container, Divider, Flex, FormControl, FormErrorMessage, FormLabel, Heading, HStack, IconButton, Image, Input, InputGroup, InputLeftElement, InputRightElement, Select, Stack, Text, useMediaQuery, useToast, } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiEye, FiEyeOff, FiPhone } from 'react-icons/fi';
import { ProviderButtons } from '@/components';
import { validationSchema } from './data';
const Signup = () => {
    const [show, setShow] = useState(true);
    const [showTwo, setShowTwo] = useState(true);
    const [formState, setFormState] = useState(1);
    const [securityQuestion, setSecurityQuestion] = useState('¿Cuál es tu color favorito?');
    console.log(securityQuestion);
    const toast = useToast();
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
    const navigate = useNavigate();
    const nextForm = () => formState <= 3 && setFormState(prev => prev + 1);
    const prevForm = () => formState >= 1 && setFormState(prev => prev - 1);
    const setQuestionValue = ({ target }) => setSecurityQuestion(target.value);
    const { handleSubmit, register, formState: { errors, isSubmitting }, reset } = useForm({ resolver: yupResolver(validationSchema) });
    console.log(errors);
    const onSubmitt = async (values) => {
        console.log('values:::>', values);
        try {
            toast({
                status: 'success',
                duration: 1500,
                isClosable: false,
                title: 'Registro',
                position: isLargerThan800 ? 'top-right' : 'bottom',
                description: `¡Hola, ${values.name}! Revisa tu email para verificar la cuenta.`
            });
            reset();
            navigate(`/products`);
        }
        catch (message) {
            toast({
                status: 'error',
                duration: 1500,
                isClosable: false,
                title: 'Error de registro',
                position: isLargerThan800 ? 'bottom' : 'top-right',
                description: message.messsage
            });
        }
    };
    return (_jsxs(Box, { bgColor: 'gray.100', minHeight: '100vh', children: [_jsx(Helmet, { children: _jsx("title", { children: "Crear cuenta" }) }), _jsx(Container, { maxW: "lg", py: { base: '12', md: '24' }, px: { base: '0', sm: '8' }, children: _jsxs(Stack, { spacing: "8", alignItems: 'center', children: [_jsxs(Stack, { spacing: "6", children: [isLargerThan800 &&
                                    _jsx(Image, { src: import.meta.env.VITE_ADMIN_LOGIN_IMAGE, alt: 'Top Image', objectFit: 'cover', fallbackSrc: 'https://via.placeholder.com/256', loading: 'lazy', width: '128px', borderRadius: 'lg', mx: 'auto' }), _jsxs(Stack, { spacing: { base: '2', md: '3' }, textAlign: "center", children: [_jsx(Heading, { size: { base: 'xl', md: 'lg' }, children: "Crear cuenta" }), _jsxs(HStack, { spacing: "1", justify: "center", children: [_jsx(Text, { color: "muted", children: "\u00BFYa tienes cuenta?" }), _jsx(Button, { variant: "link", as: Link, to: '/login', colorScheme: "blue", children: "Iniciar sesi\u00F3n" })] })] })] }), _jsx(Box, { py: { base: '0', sm: '8' }, px: { base: '4', sm: '10' }, bg: { base: 'transparent', sm: 'white' }, boxShadow: { base: 'none', sm: 'md' }, borderRadius: { base: 'none', sm: 'xl' }, id: 'register-form', w: ['sm', 'md', 'xl'], children: _jsxs(Stack, { spacing: "6", children: [_jsxs("form", { onSubmit: handleSubmit(onSubmitt), children: [formState === 1
                                                &&
                                                    _jsxs(_Fragment, { children: [_jsxs(Flex, { direction: ['column', 'row'], gap: [0, 8], children: [_jsxs(FormControl, { isInvalid: !!errors.name, children: [_jsx(FormLabel, { htmlFor: 'name', children: "Nombre(s)" }), _jsx(Input, { autoComplete: 'false', type: 'string', id: 'name', bgColor: ['white', 'transparent'], borderColor: 'gray.200', placeholder: 'Antonio', ...register('name'), onChange: (e) => {
                                                                                } }), errors.name && _jsx(FormErrorMessage, { children: errors.name.message })] }), _jsxs(FormControl, { isInvalid: !!errors.gender, mt: [4, 0], children: [_jsx(FormLabel, { htmlFor: 'gender', children: "G\u00E9nero" }), _jsxs(Select, { defaultValue: 'Masculino', id: 'gender', borderColor: 'gray.200', bgColor: ['white', 'transparent'], ...register('gender'), children: [_jsx("option", { value: "Masculino", children: "Masculino" }), _jsx("option", { value: "Femenino", children: "Femenino" })] }), errors.gender && _jsx(FormErrorMessage, { children: errors.gender.message })] })] }), _jsxs(Flex, { direction: ['column', 'row'], gap: [0, 8], children: [_jsxs(FormControl, { isInvalid: !!errors.fatherSurname, mt: 4, children: [_jsx(FormLabel, { htmlFor: 'fatherSurname', children: "Apellido paterno" }), _jsx(Input, { autoComplete: 'false', type: 'string', id: 'fatherSurname', bgColor: ['white', 'transparent'], borderColor: 'gray.200', placeholder: 'Banderas', ...register('fatherSurname') }), errors.fatherSurname && _jsx(FormErrorMessage, { children: errors.fatherSurname.message })] }), _jsxs(FormControl, { isInvalid: !!errors.motherSurname, mt: 4, children: [_jsx(FormLabel, { htmlFor: 'motherSurname', children: "Apellido materno" }), _jsx(Input, { autoComplete: 'false', type: 'string', id: 'motherSurname', bgColor: ['white', 'transparent'], borderColor: 'gray.200', placeholder: 'Solano', ...register('motherSurname') }), errors.motherSurname && _jsx(FormErrorMessage, { children: errors.motherSurname.message })] })] }), _jsxs(Flex, { direction: ['column', 'row'], alignItems: ['center', 'auto'], gap: [0, 8], children: [_jsxs(FormControl, { isInvalid: !!errors.birthday, mt: 4, children: [_jsx(FormLabel, { htmlFor: 'birthday', children: "Fecha de nacimiento" }), _jsx(Input, { autoComplete: 'false', type: 'date', id: 'birthday', bgColor: ['white', 'transparent'], borderColor: 'gray.200', ...register('birthday') }), errors.birthday && _jsx(FormErrorMessage, { children: errors.birthday.message })] }), _jsxs(FormControl, { isInvalid: !!errors.phoneNumber, mt: 4, children: [_jsx(FormLabel, { htmlFor: 'phoneNumber', children: "Tel\u00E9fono" }), _jsxs(InputGroup, { children: [_jsx(InputLeftElement, { children: _jsx(FiPhone, {}) }), _jsx(Input, { autoComplete: 'false', type: 'number', id: 'phoneNumber', bgColor: ['white', 'transparent'], borderColor: 'gray.200', size: 'md', pattern: "[0-9]*", maxLength: 10, max: 10, placeholder: '3331112244', ...register('phoneNumber') })] }), errors.phoneNumber && _jsx(FormErrorMessage, { children: errors.phoneNumber.message })] })] })] }), formState === 2
                                                &&
                                                    _jsxs(_Fragment, { children: [_jsxs(FormControl, { isInvalid: !!errors.email, children: [_jsx(FormLabel, { htmlFor: 'email', children: "Correo electr\u00F3nico" }), _jsx(Input, { autoComplete: 'false', type: 'email', id: 'email', bgColor: ['white', 'transparent'], borderColor: 'gray.200', placeholder: 'correo@electronico.com', ...register('email') }), errors.email && _jsx(FormErrorMessage, { children: errors.email.message })] }), _jsxs(Flex, { direction: ['column', 'row'], gap: [0, 8], children: [_jsxs(FormControl, { isInvalid: !!errors.password, mt: 4, children: [_jsx(FormLabel, { htmlFor: 'password', children: "Contrase\u00F1a" }), _jsxs(InputGroup, { children: [_jsx(InputRightElement, { children: _jsx(IconButton, { variant: 'link', "aria-label": 'Show password', icon: show ? _jsx(FiEye, {}) : _jsx(FiEyeOff, {}), onClick: () => setShow(!show) }) }), _jsx(Input, { autoComplete: 'false', type: show ? 'password' : 'text', id: 'password', bgColor: ['white', 'transparent'], placeholder: '********', borderColor: 'gray.200', ...register('password') })] }), errors.password && _jsx(FormErrorMessage, { children: errors.password.message })] }), _jsxs(FormControl, { isInvalid: !!errors.confirmPassword, mt: 4, children: [_jsx(FormLabel, { htmlFor: 'confirmPassword', children: "Confirmar contrase\u00F1a" }), _jsxs(InputGroup, { children: [_jsx(InputRightElement, { children: _jsx(IconButton, { variant: 'link', "aria-label": 'Show password', icon: showTwo ? _jsx(FiEye, {}) : _jsx(FiEyeOff, {}), onClick: () => setShowTwo(!showTwo) }) }), _jsx(Input, { autoComplete: 'false', type: showTwo ? 'password' : 'text', id: 'confirmPassowrd', bgColor: ['white', 'transparent'], placeholder: '********', borderColor: 'gray.200', ...register('confirmPassword') })] }), errors.confirmPassword && _jsx(FormErrorMessage, { children: errors.confirmPassword.message })] })] })] }), formState === 3
                                                &&
                                                    _jsxs(_Fragment, { children: [_jsxs(FormControl, { children: [_jsx(FormLabel, { htmlFor: 'securityQuestion', children: "Pregunta de seguridad" }), _jsxs(Select, { bgColor: ['white', 'transparent'], defaultValue: "\u00BFCu\u00E1l es tu color favorito?", onChange: setQuestionValue, children: [_jsx("option", { value: "\u00BFCu\u00E1l es tu color favorito?", children: "\u00BFCu\u00E1l es tu color favorito?" }), _jsx("option", { value: "\u00BFCu\u00E1l es tu pel\u00EDcula favorita?", children: "\u00BFCu\u00E1l es tu pel\u00EDcula favorita?" }), _jsx("option", { value: "\u00BFCu\u00E1l es tu equipo de f\u00FAtbol favorito?", children: "\u00BFCu\u00E1l es tu equipo de f\u00FAtbol favorito?" }), _jsx("option", { value: "\u00BFCu\u00E1l es tu g\u00E9nero de m\u00FAsica favorito?", children: "\u00BFCu\u00E1l es tu g\u00E9nero de m\u00FAsica favorito?" }), _jsx("option", { value: "\u00BFCu\u00E1l es el nombre de tu mascota?", children: "\u00BFCu\u00E1l es el nombre de tu mascota?" })] })] }), _jsxs(FormControl, { isInvalid: !!errors.securitySelect, mt: 4, children: [_jsx(FormLabel, { htmlFor: 'securitySelect', children: "Respuesta" }), _jsx(Input, { autoComplete: 'false', type: 'text', id: 'securitySelect', bgColor: ['white', 'transparent'], borderColor: 'gray.200', placeholder: 'Tu respuesta aqu\u00ED...', ...register('securitySelect') }), errors.securitySelect && _jsx(FormErrorMessage, { children: errors.securitySelect.message })] })] }), _jsxs(ButtonGroup, { width: '100%', children: [_jsx(Button, { mt: 8, width: '100%', colorScheme: 'red', type: 'button', onClick: prevForm, isDisabled: formState === 1, children: "Anterior" }), _jsx(Button, { type: 'submit', mt: 8, width: '100%', colorScheme: 'blue', onClick: nextForm, isDisabled: formState === 3, children: "Siguiente" })] }), formState === 3
                                                &&
                                                    _jsx(Button, { mt: 8, width: '100%', colorScheme: 'green', type: 'submit', isLoading: isSubmitting, children: "Registrarme" })] }), _jsxs(HStack, { children: [_jsx(Divider, { borderColor: ['gray.400', 'gray.200'] }), _jsx(Text, { fontSize: "sm", whiteSpace: "nowrap", color: "muted", children: "O reg\u00EDstrate con:" }), _jsx(Divider, { borderColor: ['gray.400', 'gray.200'] })] }), _jsx(ProviderButtons, {})] }) })] }) })] }));
};
export default Signup;
