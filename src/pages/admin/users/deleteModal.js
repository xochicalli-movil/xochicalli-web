import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Image, Text, CircularProgress, } from "@chakra-ui/react";
import { FiTrash2 } from "react-icons/fi";
import { deleteUser } from "@/utils/firebase/data";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { useState } from "react";
const ManualClose = ({ dataUser }) => {
    const [updatee, setUpdatee] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const updateData = {
        name: dataUser?.name ?? "",
        email: dataUser?.email ?? "",
        role: dataUser?.role ?? "",
        uid: dataUser?.uid ?? "",
        nacimiento: dataUser?.birthday ?? "",
        contacto: dataUser?.phoneNumber ?? "",
    };
    return (_jsxs(_Fragment, { children: [_jsx(SnackbarProvider, {}), _jsx(Button, { onClick: onOpen, children: _jsx(FiTrash2, { fontSize: "1.25rem" }) }), _jsxs(Modal, { closeOnOverlayClick: false, isOpen: isOpen, onClose: onClose, children: [_jsx(ModalOverlay, {}), _jsxs(ModalContent, { children: [_jsx(ModalHeader, { children: _jsx(Text, { style: {
                                        fontWeight: 700,
                                        fontSize: "xx-large",
                                        textAlignLast: "center",
                                    }, children: "ELIMINAR USUARIO" }) }), _jsx(ModalCloseButton, {}), _jsx(ModalBody, { pb: 6, children: _jsxs(Box, { children: [_jsx(Image, { src: "/deleteUser.jpg" }), _jsxs(Text, { style: { display: "flex", placeContent: "center" }, fontSize: "2xl", children: [`Deseas eliminar a :`, _jsx("span", { style: {
                                                        fontWeight: 700,
                                                        color: "#2e2ec9",
                                                        marginLeft: "5px",
                                                    }, children: updateData.name })] })] }) }), _jsxs(ModalFooter, { style: { display: "flex", justifyContent: "space-around" }, children: [_jsx(Button, { onClick: async () => {
                                            setUpdatee(true);
                                            const deleteFuntion = await deleteUser(updateData.uid);
                                            enqueueSnackbar(deleteFuntion
                                                ? "usuario eliminado con exito"
                                                : "Error al elimianr el usuario", {
                                                variant: deleteFuntion ? "success" : "error",
                                                preventDuplicate: true,
                                                anchorOrigin: {
                                                    vertical: "bottom",
                                                    horizontal: "right",
                                                },
                                            });
                                            setUpdatee(false);
                                            deleteFuntion && onClose();
                                        }, colorScheme: "blue", mr: 3, children: !updatee ? ("Eliminar") : (_jsx(CircularProgress, { size: "25px", isIndeterminate: true, color: "#ffffff" })) }), _jsx(Button, { onClick: onClose, children: "Cancelar" })] })] })] })] }));
};
export default ManualClose;
