import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef } from 'react';
import { Button, Divider, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Icon, Text, useDisclosure, } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import { SignOutModal } from './';
const Sidebar = ({ isUser }) => {
    const btnRef = useRef();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const handleNavigate = (route) => {
        onClose();
        navigate(route);
    };
    return (_jsxs(_Fragment, { children: [_jsx(Button, { ref: btnRef, colorScheme: 'whiteAlpha', onClick: onOpen, children: _jsx(Icon, { as: FaAlignRight }) }), _jsxs(Drawer, { isOpen: isOpen, placement: 'right', onClose: onClose, finalFocusRef: btnRef, children: [_jsx(DrawerOverlay, {}), _jsxs(DrawerContent, { children: [_jsx(DrawerCloseButton, {}), _jsx(DrawerHeader, { children: "\u00A1Hola, usuario!" }), _jsxs(DrawerBody, { children: [_jsx(Text, { mb: 2.5, onClick: onClose, children: _jsx(Button, { color: 'black', fontWeight: 'normal', variant: 'link', onClick: () => handleNavigate('/admin/add'), children: "Agregar producto" }) }), _jsx(Divider, {}), _jsx(Text, { my: 2.5, onClick: onClose, children: _jsx(Button, { color: 'black', fontWeight: 'normal', variant: 'link', onClick: () => handleNavigate('/admin/products'), children: "Productos" }) }), _jsx(Divider, {}), _jsx(Text, { my: 2.5, onClick: onClose, children: _jsx(Button, { color: 'black', fontWeight: 'normal', variant: 'link', onClick: () => handleNavigate('/admin/user'), children: "Usuarios" }) }), _jsx(Divider, {}), _jsx(Text, { my: 2.5, onClick: onClose, children: _jsx(Button, { color: 'black', fontWeight: 'normal', variant: 'link', onClick: () => handleNavigate('/admin/dashboard'), children: "Ventas" }) })] }), isUser && (_jsx(DrawerFooter, { children: _jsx(SignOutModal, {}) }))] })] })] }));
};
export default Sidebar;
