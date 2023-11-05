import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { lazy, useContext } from 'react';
import { Center, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { UserContext } from '@/context';
import { AddressCard } from '@/components/user';
const AddAddressModal = lazy(() => import('@/components/user/AddAddressModal'));
const Addresses = () => {
    const { userInformation } = useContext(UserContext);
    return (_jsx(VStack, { minH: 'calc(100vh - 64px)', bgColor: 'gray.100', p: 4, children: _jsx(Center, { bg: 'white', p: [6, 8], borderRadius: 'lg', w: ['sm', 'md', 'xl', '3xl'], children: _jsxs(VStack, { spacing: 6, w: 'full', children: [_jsx(Heading, { children: "Tus direcciones" }), _jsx(AddAddressModal, {}), userInformation.address === null
                        ? _jsx(Text, { children: "No tienes direcciones actualmente" })
                        : _jsx(Stack, { spacing: 6, children: userInformation.address.map((address) => (_jsx(AddressCard, { ...address }))) })] }) }) }));
};
export default Addresses;
