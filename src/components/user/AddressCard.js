import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from "react";
import { Box, HStack, Heading, IconButton, Stack, Text } from "@chakra-ui/react";
import { FiTrash } from "react-icons/fi";
const AddressCard = (values) => {
    const id = useId();
    return (_jsx(Box, { as: 'section', border: '1px', borderColor: 'gray.300', borderRadius: 'lg', p: 4, w: ['xs', 'sm', 'lg', '2xl'], children: _jsxs(Stack, { spacing: 2, children: [_jsxs(HStack, { width: '100%', justifyContent: 'space-between', alignItems: 'center', children: [_jsx(Heading, { size: 'lg', children: values.names }), _jsx(IconButton, { "aria-label": "delete-address", colorScheme: "red", icon: _jsx(FiTrash, {}) })] }), _jsxs(Text, { fontSize: 'md', children: [_jsx("strong", { children: "Direcci\u00F3n:" }), " ", values.address] }), _jsxs(Text, { fontSize: 'md', children: [_jsx("strong", { children: "Estado:" }), " ", values.state] }), _jsxs(Text, { fontSize: 'md', children: [_jsx("strong", { children: "Ciudad:" }), " ", values.city] }), _jsxs(Text, { fontSize: 'md', children: [_jsx("strong", { children: "Colonia:" }), " ", values.colony] }), _jsx(Text, { fontWeight: 600, children: values.zip })] }) }, id));
};
export default AddressCard;
