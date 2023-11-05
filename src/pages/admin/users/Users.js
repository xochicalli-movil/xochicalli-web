import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getUserss } from "@/hooks/getDataFirebase";
import { Box, Checkbox, HStack, Icon, Table, Tbody, Td, Text, Th, Thead, Tr, Container, Stack, useBreakpointValue, } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { IoArrowDown } from "react-icons/io5";
import ManualClose from "./deleteModal";
import EditUserModal from "./editUserModal";
const Users = (props) => {
    const isMobile = useBreakpointValue({ base: true, lg: false });
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getFirebaseUser = (arrayUsers) => {
            console.log("escuchar continuamente", arrayUsers);
            setUsers(arrayUsers);
        };
        getUserss(getFirebaseUser);
    }, []);
    const colums = [
        {
            colum: (_jsxs(HStack, { spacing: "3", children: [_jsx(Checkbox, {}), _jsxs(HStack, { spacing: "1", children: [_jsx(Text, { children: "Nombre" }), _jsx(Icon, { as: IoArrowDown, color: "muted", boxSize: "4" })] })] })),
        },
        {
            colum: "Email",
        },
        {
            colum: "role",
        },
    ];
    return (_jsx(Container, { py: { base: "4", md: "8" }, px: { base: "0", md: 8 }, children: _jsx(Box, { bg: "bg-surface", boxShadow: { base: "none", md: "sm" }, borderRadius: { base: "none", md: "lg" }, children: _jsxs(Stack, { spacing: "5", children: [_jsx(Box, { px: { base: "4", md: "6" }, pt: "5", children: _jsx(Stack, { direction: { base: "column", md: "row" }, justify: "space-between", children: _jsx(Text, { fontSize: "lg", fontWeight: "medium", children: "Usuarios" }) }) }), _jsx(Box, { children: _jsxs(Table, { children: [_jsx(Thead, { display: isMobile ? "contents" : "", children: _jsx(Tr, { children: colums.map((colum, index) => (_jsx(Th, { children: colum.colum === "Email" && isMobile ? "" : colum.colum }, index))) }) }), _jsx(Tbody, { children: users.map((member) => (_jsxs(Tr, { children: [_jsx(Td, { children: _jsx(HStack, { spacing: "3", children: _jsx(Box, { children: _jsx(Text, { fontWeight: "medium", children: member.name }) }) }) }), _jsx(Td, { display: isMobile ? "none" : "block", children: _jsx(Text, { color: "muted", children: member.email }) }), _jsx(Td, { children: _jsx(Text, { color: "muted", children: member.role }) }), _jsx(Td, { children: _jsxs(HStack, { spacing: "1", children: [_jsx(ManualClose, { dataUser: member }), _jsx(EditUserModal, { dataUser: member })] }) })] }, member.id))) })] }) })] }) }) }));
};
export default Users;
