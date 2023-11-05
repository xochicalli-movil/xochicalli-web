import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { lazy, useContext } from 'react';
import { Center, FormControl, FormLabel, Heading, Input, Stack, VStack } from '@chakra-ui/react';
import { UserContext } from '@/context';
const SecurityModal = lazy(() => import('@/components/auth/SecurityModal'));
const Security = () => {
    const { userInformation } = useContext(UserContext);
    return (_jsx(VStack, { minH: 'calc(100vh - 64px)', bgColor: 'gray.100', p: 4, children: _jsx(Center, { bg: 'white', p: [6, 8], borderRadius: 'lg', w: ['sm', 'lg', 'xl', '2xl'], children: _jsxs(VStack, { spacing: 6, w: 'full', children: [_jsx(Heading, { children: "Seguridad de la cuenta" }), _jsxs(Stack, { spacing: 4, w: 'full', children: [_jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Correo electr\u00F3nico" }), _jsx(Input, { value: userInformation.email, readOnly: true })] }), _jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Contrase\u00F1a" }), _jsx(Input, { value: '********', readOnly: true })] })] }), _jsx(SecurityModal, {})] }) }) }));
};
export default Security;
