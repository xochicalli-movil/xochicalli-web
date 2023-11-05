import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { deleteCategoria } from "@/utils";
import { DeleteIcon } from "@chakra-ui/icons";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, CircularProgress, } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import { useState } from "react";
const PopoverDeleteCategory = ({ category }) => {
    const [deletee, setDeletee] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (_jsxs(_Fragment, { children: [_jsx(SnackbarProvider, {}), _jsx(Button, { marginLeft: "10px", onClick: onOpen, children: _jsx(DeleteIcon, {}) }), _jsxs(Modal, { isOpen: isOpen, onClose: onClose, children: [_jsx(ModalOverlay, {}), _jsxs(ModalContent, { children: [_jsxs(ModalHeader, { children: ["ELIMINAR CATEGORIA", _jsx(Image, { style: { width: "60%", margin: "0 auto" }, src: "/Charco - Delete Trash.png", alt: "Dan Abramov" })] }), _jsx(ModalCloseButton, {}), _jsxs(ModalBody, { children: ["La categoria ", _jsxs("span", { style: { fontWeight: 700 }, children: ["\"", category, "\""] }), "se eliminara permanentemente"] }), _jsxs(ModalFooter, { children: [_jsx(Button, { colorScheme: "blue", mr: 3, onClick: onClose, children: "Cerrar" }), _jsx(Button, { onClick: async () => {
                                            setDeletee(true);
                                            const deleteFuntion = await deleteCategoria(category);
                                            setDeletee(false);
                                            enqueueSnackbar(deleteFuntion
                                                ? "Categoria eliminada con exito"
                                                : "Error al eiminar categoria", {
                                                variant: deleteFuntion ? "success" : "error",
                                                preventDuplicate: true,
                                                anchorOrigin: {
                                                    vertical: "bottom",
                                                    horizontal: "right",
                                                },
                                            });
                                            onClose();
                                        }, colorScheme: "red", children: deletee ? (_jsx(CircularProgress, { size: "25px", isIndeterminate: true, color: "#ffffff" })) : ("Eliminar") })] })] })] })] }));
};
export default PopoverDeleteCategory;
