import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef } from 'react';
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, useDisclosure, } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { logOut } from '@/utils';
export const SignOutModal = () => {
    const cancelRef = useRef();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const onLogout = async () => {
        await logOut()
            .then(() => {
            navigate('/');
            window.location.reload();
        })
            .catch((err) => console.log(err));
    };
    return (_jsxs(_Fragment, { children: [_jsx(Button, { leftIcon: _jsx(FiLogOut, {}), colorScheme: 'red', onClick: onOpen, children: "Cerrar sesi\u00F3n" }), _jsx(AlertDialog, { isOpen: isOpen, leastDestructiveRef: cancelRef, onClose: onClose, size: ['xs', 'sm', 'md', 'lg', 'xl'], children: _jsx(AlertDialogOverlay, { children: _jsxs(AlertDialogContent, { children: [_jsx(AlertDialogHeader, { fontSize: 'lg', fontWeight: 'bold', children: "Cerrar sesi\u00F3n" }), _jsx(AlertDialogCloseButton, {}), _jsx(AlertDialogBody, { children: "\u00BFSeguro que quieres cerrar sesi\u00F3n?" }), _jsxs(AlertDialogFooter, { children: [_jsx(Button, { ref: cancelRef, onClick: onClose, children: "No" }), _jsx(Button, { colorScheme: 'red', onClick: onLogout, ml: 3, children: "S\u00ED" })] })] }) }) })] }));
};
