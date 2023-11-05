import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, Box, Stack, Text } from '@chakra-ui/react';
const Comment = (commentInfo) => (_jsxs(Box, { p: 4, borderRadius: 'md', bgColor: 'gray.100', minWidth: ['full', 350], maxWidth: ['full', 350], children: [_jsxs(Stack, { direction: 'row', alignItems: 'center', children: [_jsx(Avatar, { src: commentInfo.avatar, name: commentInfo?.name }), _jsxs(Text, { fontWeight: 600, children: [commentInfo?.name, " ", commentInfo?.fatherSurname] })] }), _jsx(Text, { noOfLines: 3, my: 2, children: commentInfo?.comment }), _jsxs(Text, { fontWeight: 600, children: ["Fecha: ", new Date().toLocaleDateString()] })] }));
export default Comment;
