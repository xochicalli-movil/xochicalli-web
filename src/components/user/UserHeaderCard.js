import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Avatar, Card, CardBody, CardHeader, HStack, Text } from "@chakra-ui/react";
const UserHeaderCard = ({ createdAt, imageURL, name }) => {
    return (_jsxs(Card, { direction: ['column', 'row'], alignItems: ['center'], width: ['xs', 'md', 'lg', 'lg', '2xl'], children: [_jsx(CardHeader, { children: _jsx(Avatar, { size: '2xl', name: name, src: imageURL }) }), _jsxs(CardBody, { children: [_jsxs(HStack, { alignItems: 'center', children: [_jsx(Text, { fontSize: [15, 13, 15, 16, 20], fontWeight: 700, children: "Nombre:" }), _jsx(Text, { fontSize: [15, 13, 15, 16, 20], fontWeight: 500, noOfLines: 1, children: name ? name : 'Loading...' })] }), _jsxs(Text, { fontSize: 12, children: ["Miembro desde: ", createdAt ? createdAt : 'Loading...'] })] })] }));
};
export default UserHeaderCard;
