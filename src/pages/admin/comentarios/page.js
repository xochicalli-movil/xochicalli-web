import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, Box, Stack, Text } from "@chakra-ui/react";
const Comentarios = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    return (_jsx(Box, { style: {
            display: 'flex',
            width: '100%',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
        }, children: array.map((e) => (_jsxs(Box, { p: 4, marginY: '20px', borderRadius: 'md', bgColor: 'gray.100', minWidth: ['full', 350], maxWidth: ['full', 350], children: [_jsxs(Stack, { direction: 'row', alignItems: 'center', children: [_jsx(Avatar, { src: "", name: "commentInfo?.name" }), _jsxs(Text, { fontWeight: 600, children: ["commentInfo?.name", " ", "commentInfo?.fatherSurname"] })] }), _jsx(Text, { noOfLines: 3, my: 2, children: "commentInfo?.comment" }), _jsxs(Text, { fontWeight: 600, children: ["Fecha: ", new Date().toLocaleDateString()] })] }, e))) }));
};
export default Comentarios;
