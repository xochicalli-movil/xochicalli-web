import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Container, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Stack, Text, Textarea, VStack, useToast, Divider, HStack } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import { sendEmail } from "@/utils";
const Contact = () => {
    const toast = useToast();
    const validateSchema = yup.object().shape({
        name: yup
            .string()
            .required('El nombre no puede estar vacío')
            .min(4, 'El nombre debe tener mínimo 4 caracteres'),
        email: yup
            .string()
            .required('El correo no puede estar vacío')
            .email('El correo no es válido'),
        message: yup
            .string()
            .required('El mensaje no puede estar vacío')
            .min(10, 'El mensaje debe tener mínimo 10 caracteres')
    });
    const { handleSubmit, register, formState: { isSubmitting, errors }, reset } = useForm({ resolver: yupResolver(validateSchema) });
    const onSubmit = async (values) => {
        try {
            await sendEmail(values);
            toast({
                status: 'success',
                title: '¡Correo enviado!',
                description: 'Hemos enviado tu mensaje, nos pondremos en contacto contigo pronto.',
                duration: 2000,
                isClosable: true
            });
        }
        catch (err) {
            console.log(err);
            toast({
                status: 'error',
                title: '¡Error!',
                description: 'Algo salió mal, intenta luego...',
                duration: 2000,
                isClosable: true
            });
        }
        reset();
    };
    return (_jsxs(VStack, { minH: 'calc(100vh - 72px)', bgColor: 'gray.100', p: 4, children: [_jsx(Helmet, { children: _jsx("title", { children: "Contacto" }) }), _jsx(Heading, { mt: 4, children: "Contacto" }), _jsx(Text, { py: 4, children: "Aqu\u00ED podr\u00E1s contactarnos y resolver tus dudas o contarnos algo que haya sucedido." }), _jsx(Container, { children: _jsx(Stack, { spacing: "8", alignItems: 'center', children: _jsx(Box, { py: { base: '0', sm: '8' }, px: { base: '2', sm: '10' }, bg: { base: 'transparent', sm: 'white' }, boxShadow: { base: 'none', sm: 'md' }, borderRadius: { base: 'none', sm: 'xl' }, id: 'register-form', w: ['sm', 'md', 'xl'], children: _jsxs(Stack, { spacing: "6", children: [_jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsxs(FormControl, { isInvalid: !!errors.name, children: [_jsxs(Flex, { direction: ['column', 'column', 'row'], alignItems: ['flex-start', 'flex-start', 'flex-end'], w: '100%', justifyContent: 'space-between', children: [_jsx(FormLabel, { htmlFor: 'name', children: "Nombre:" }), _jsx(Input, { width: ['100%', '100%', '60%'], autoComplete: 'false', type: 'text', id: 'name', bgColor: ['white', 'transparent'], borderColor: 'gray.200', placeholder: 'Kevin Vega', ...register('name') })] }), errors.name && _jsx(FormErrorMessage, { children: errors.name.message })] }), _jsxs(FormControl, { isInvalid: !!errors.email, mt: 4, children: [_jsxs(Flex, { direction: ['column', 'column', 'row'], alignItems: ['flex-start', 'flex-start', 'flex-end'], w: '100%', justifyContent: 'space-between', children: [_jsx(FormLabel, { htmlFor: 'email', children: "Correo electr\u00F3nico:" }), _jsx(Input, { width: ['100%', '100%', '60%'], autoComplete: 'false', type: 'email', id: 'email', bgColor: ['white', 'transparent'], placeholder: 'correo@electronico.com', borderColor: 'gray.200', ...register('email') })] }), errors.email && _jsx(FormErrorMessage, { children: errors.email.message })] }), _jsxs(FormControl, { isInvalid: !!errors.message, mt: 4, children: [_jsxs(Flex, { direction: ['column', 'column', 'row'], alignItems: ['flex-start', 'flex-start', 'flex-start'], w: '100%', justifyContent: 'space-between', children: [_jsx(FormLabel, { htmlFor: 'message', children: "Mensaje:" }), _jsx(Textarea, { width: ['100%', '100%', '60%'], autoComplete: 'false', id: 'message', bgColor: ['white', 'transparent'], placeholder: 'Escribe tu mensaje aqu\u00ED...', borderColor: 'gray.200', ...register('message') })] }), errors.message && _jsx(FormErrorMessage, { children: errors.message.message })] }), _jsx(Button, { isLoading: isSubmitting, loadingText: 'Enviando mensaje...', type: 'submit', colorScheme: 'blue', width: '100%', mt: 8, children: "Enviar" })] }), _jsxs(HStack, { children: [_jsx(Divider, {}), _jsxs(Text, { whiteSpace: 'nowrap', fontWeight: 600, children: ["O nos puedes llamar al ", _jsx("a", { href: "tel:573014492053", children: "3014492053" })] }), _jsx(Divider, {})] })] }) }) }) })] }));
};
export default Contact;
