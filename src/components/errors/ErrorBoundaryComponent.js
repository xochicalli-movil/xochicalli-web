import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react';
export const ErrorBoundaryComponent = () => {
    return (_jsx(VStack, { h: '100vh', justifyContent: 'center', bgGradient: 'linear(to-b, gray.700, gray.800)', px: [4, 0], children: _jsxs(Box, { bgColor: 'whiteAlpha.100', width: '100', p: 4, rounded: 'lg', children: [_jsx(Heading, { textAlign: 'center', color: 'gray.100', children: "Se ha detecado un problema interno \uD83D\uDE35\u200D\uD83D\uDCAB" }), _jsxs(Text, { textAlign: 'center', my: 2, color: 'gray.100', children: ["Actualiza la p\u00E1gina haciendo click ", _jsx(Button, { variant: 'link', colorScheme: 'blue', onClick: () => window.location.reload(), children: "aqu\u00ED" })] })] }) }));
};
