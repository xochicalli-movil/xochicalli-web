import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Img, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const NotFound = () => {
    const navigate = useNavigate();
    const handleGoBack = () => navigate('/');
    return (_jsxs(VStack, { minH: 'calc(100vh - 72px)', bgColor: 'gray.200', justifyContent: 'center', gap: 4, children: [_jsx(Helmet, { children: _jsx("title", { children: "404" }) }), _jsx(Img, { src: import.meta.env.VITE_NOTFOUND_IMAGE, width: '256px' }), _jsx(Text, { fontWeight: 'medium', children: "No pudimos encontrar la p\u00E1gina que buscaste" }), _jsx(Button, { colorScheme: 'red', onClick: handleGoBack, children: "Volver al inicio" })] }));
};
export default NotFound;
