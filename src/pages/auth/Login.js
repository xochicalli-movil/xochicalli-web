import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Box, Button, ButtonGroup, Container, Divider, FormControl, FormErrorMessage, FormLabel, Heading, HStack, IconButton, Image, Input, InputGroup, InputRightElement, Stack, Text, useMediaQuery, useToast, } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { loginWithEmail } from "@/utils";
import { ProviderButtons } from "@/components";
import { ForgotPassword } from "@/components/auth";
const Login = () => {
    const [show, setShow] = useState(true);
    const toast = useToast();
    const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
    const navigate = useNavigate();
    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .required("El correo es requerido")
            .email("Debe ser un correo válido"),
        password: yup
            .string()
            .required("La contraseña es requerida")
            .min(6, "La contraseña debe tener mínimo 6 caracteres"),
    });
    const { handleSubmit, register, formState: { errors, isSubmitting }, reset, } = useForm({ resolver: yupResolver(validationSchema) });
    const onSubmit = async (values) => {
        try {
            await loginWithEmail(values.email, values.password);
            toast({
                status: "success",
                duration: 1500,
                isClosable: false,
                title: "Inicio de sesión",
                position: isLargerThan800 ? "top-right" : "bottom",
                description: "¡Bienvenido de vuelta!",
            });
            reset();
            navigate(-1);
        }
        catch ({ message }) {
            toast({
                status: "error",
                duration: 1500,
                isClosable: false,
                title: "Inicio de sesión",
                position: isLargerThan800 ? "bottom" : "top-right",
                description: message,
            });
        }
    };
    return (_jsxs(Box, { bgColor: "gray.100", minHeight: "100vh", children: [_jsx(Helmet, { children: _jsx("title", { children: "Iniciar sesi\u00F3n" }) }), _jsx(Container, { maxW: "lg", py: { base: "12", md: "24" }, px: { base: "0", sm: "8" }, children: _jsxs(Stack, { spacing: "8", children: [_jsxs(Stack, { spacing: "6", children: [isLargerThan800 && (_jsx(Image, { src: import.meta.env.VITE_ADMIN_LOGIN_IMAGE ??
                                        "https://firebasestorage.googleapis.com/v0/b/xochicalli-commerce.appspot.com/o/assets%2Flogo.png?alt=media&token=b5a9e3c5-d9f1-469c-9c9d-9af0c5f1cfd9", alt: "Top Image", objectFit: "cover", fallbackSrc: "https://via.placeholder.com/256", loading: "lazy", width: "128px", borderRadius: "lg", mx: "auto" })), _jsxs(Stack, { spacing: { base: "2", md: "3" }, textAlign: "center", children: [_jsx(Heading, { size: { base: "xl", md: "lg" }, children: "Iniciar sesi\u00F3n" }), _jsxs(HStack, { spacing: "1", justify: "center", children: [_jsx(Text, { color: "muted", children: "\u00BFNo tienes cuenta?" }), _jsx(Button, { variant: "link", as: Link, to: "/signup", colorScheme: "blue", children: "Registrarme" })] })] })] }), _jsx(Box, { py: { base: "0", sm: "8" }, px: { base: "4", sm: "10" }, bg: { base: "transparent", sm: "white" }, boxShadow: { base: "none", sm: "md" }, borderRadius: { base: "none", sm: "xl" }, children: _jsxs(Stack, { spacing: "6", children: [_jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsxs(FormControl, { isInvalid: !!errors.email, children: [_jsx(FormLabel, { htmlFor: "email", children: "Correo electr\u00F3nico" }), _jsx(Input, { autoComplete: "false", type: "email", id: "email", bgColor: ["white", "transparent"], placeholder: "correo@electronico.com", borderColor: "gray.200", ...register("email") }), errors.email && (_jsx(FormErrorMessage, { children: errors.email.message }))] }), _jsxs(FormControl, { isInvalid: !!errors.password, mt: 4, children: [_jsx(FormLabel, { htmlFor: "password", children: "Contrase\u00F1a" }), _jsxs(InputGroup, { children: [_jsx(InputRightElement, { children: _jsx(IconButton, { variant: "link", "aria-label": "Show password", icon: show ? _jsx(FiEye, {}) : _jsx(FiEyeOff, {}), onClick: () => setShow(!show) }) }), _jsx(Input, { autoComplete: "false", type: show ? "password" : "text", id: "password", bgColor: ["white", "transparent"], placeholder: "********", borderColor: "gray.200", ...register("password") })] }), errors.password && (_jsx(FormErrorMessage, { children: errors.password.message }))] }), _jsx(HStack, { alignItems: "right", mt: 4, mb: 1, justifyContent: "flex-end", children: _jsx(ForgotPassword, {}) }), _jsx(ButtonGroup, { pt: 4, width: "100%", colorScheme: "green", children: _jsx(Button, { type: "submit", isLoading: isSubmitting, width: "100%", children: "Iniciar sesi\u00F3n" }) })] }), _jsxs(HStack, { children: [_jsx(Divider, { borderColor: ["gray.400", "gray.200"] }), _jsx(Text, { fontSize: "sm", whiteSpace: "nowrap", color: "muted", children: "O ingresa con:" }), _jsx(Divider, { borderColor: ["gray.400", "gray.200"] })] }), _jsx(ProviderButtons, {})] }) })] }) })] }));
};
export default Login;
