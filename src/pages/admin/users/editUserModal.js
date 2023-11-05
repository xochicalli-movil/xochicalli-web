import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Text, CircularProgress, Radio, RadioGroup, Stack, } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { updateUser } from "@/hooks/getDataFirebase";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
const EditUserModal = ({ dataUser }) => {
    const [rol, setRol] = useState("1");
    const [updatee, setUpdatee] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [updateData, setUpdateData] = useState({
        name: dataUser.name,
        email: dataUser.email,
        role: dataUser.role,
        uid: dataUser.uid,
        nacimiento: dataUser.birthday,
        contacto: dataUser.phoneNumber,
    });
    const parsedDate = (originalDate) => {
        const parsedDate = new Date(originalDate);
        const year = parsedDate.getFullYear();
        const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0");
        const day = parsedDate.getDate().toString().padStart(2, "0");
        const hour = "00";
        const minutes = "00";
        const formattedDate = `${year}-${month}-${day}T${hour}:${minutes}`;
        return formattedDate;
    };
    const initialRef = useRef(null);
    const finalRef = useRef(null);
    const inputs = [
        {
            name: "name",
            type: "text",
            value: updateData.name,
            validation: () => updateData.name.length > 4,
            msgError: "Ingrese un nombre valido ",
        },
        {
            name: "email",
            type: "email",
            value: updateData.email,
            validation: () => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(updateData.email);
            },
            msgError: "Ingrese un email valido",
        },
        {
            name: "nacimiento",
            type: "datetime-local",
            value: updateData.nacimiento,
            validation: () => updateData.name.length > 4,
            msgError: "ingrese un valor valido",
        },
        {
            name: "Contacto",
            type: "tel",
            value: updateData.contacto,
            validation: () => updateData.name.length > 4,
            msgError: "ingrese un valor valido",
        },
    ];
    const handleInputChange = (name, value) => {
        setUpdateData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleRol = (e) => {
        const newRole = e;
        setRol(newRole);
        setUpdateData((prevData) => ({
            ...prevData,
            role: newRole,
        }));
    };
    useEffect(() => {
        setRol(updateData.role);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(SnackbarProvider, {}), _jsx(Button, { onClick: onOpen, children: _jsx(FiEdit2, { fontSize: "1.25rem" }) }), _jsxs(Modal, { initialFocusRef: initialRef, finalFocusRef: finalRef, isOpen: isOpen, onClose: onClose, children: [_jsx(ModalOverlay, {}), _jsxs(ModalContent, { children: [_jsx(ModalHeader, { children: "Editar Usuario" }), _jsx(ModalCloseButton, {}), _jsxs(ModalBody, { pb: 6, children: [inputs.map((input) => (_jsxs(FormControl, { children: [_jsx(FormLabel, { style: { fontSize: "16px", fontWeight: "600" }, children: input.name }), _jsx(Input, { type: input.type, ref: initialRef, value: input.type === "datetime-local"
                                                    ? parsedDate(input.value)
                                                    : input.value, onChange: (e) => handleInputChange(input.name, e.target.value) }), _jsx(Text, { style: {
                                                    display: input.validation() ? "none" : "block",
                                                    marginLeft: "2px",
                                                    marginTop: "10px",
                                                }, color: "red", children: input.msgError })] }, input.name))), _jsx(FormLabel, { style: { fontSize: "16px", fontWeight: "600" }, children: "Asignar roles" }), _jsx(RadioGroup, { name: "rol" //
                                        , onChange: (e) => handleRol(e), value: rol, children: _jsxs(Stack, { direction: "row", children: [_jsx(Radio, { value: "admin", children: "administrador" }), _jsx(Radio, { value: "user", children: "usuario" })] }) })] }), _jsxs(ModalFooter, { children: [_jsx(Button, { id: "Actualizar-Button", mr: 3, onClick: async () => {
                                            setUpdatee(true);
                                            const update = await updateUser(updateData.uid, updateData);
                                            enqueueSnackbar(update
                                                ? "usuario actualizado con exito"
                                                : "Error al actualizar el usuario", {
                                                variant: update ? "success" : "error",
                                                preventDuplicate: true,
                                                anchorOrigin: {
                                                    vertical: "bottom",
                                                    horizontal: "right",
                                                },
                                            });
                                            setUpdatee(false);
                                            update && onClose();
                                        }, colorScheme: "blue", children: !updatee ? ("Actualizar") : (_jsx(CircularProgress, { size: "25px", isIndeterminate: true, color: "#ffffff" })) }), _jsx(Button, { onClick: onClose, children: "Cancel" })] })] })] })] }));
};
export default EditUserModal;
