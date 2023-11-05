import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext, useRef } from 'react';
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, FormControl, FormErrorMessage, FormLabel, Input, useDisclosure, useMediaQuery, useToast, Box, Grid, GridItem, Flex } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserContext } from '@/context';
import { updateInformation } from '@/utils';
import { useNavigate } from 'react-router-dom';
const UserUpdateModal = () => {
    const cancelRef = useRef();
    const { userInformation } = useContext(UserContext);
    const navigate = useNavigate();
    const { isOpen, onClose, onOpen } = useDisclosure();
    const toast = useToast();
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
    const validationSchema = yup.object().shape({
        name: yup
            .string()
            .required('El nombre no puede estar vacío')
            .min(4, 'Debes ingresar al menos 4 caracteres'),
        fatherSurname: yup
            .string()
            .required('El apellido paterno no puede estar vacío')
            .min(4, 'Debes ingresar al menos 4 caracteres'),
        motherSurname: yup
            .string()
            .required('El apellido paterno no puede estar vacío')
            .min(4, 'Debes ingresar al menos 4 caracteres'),
        birthday: yup
            .date()
            .required('La fecha de nacimiento es requerida')
            .max(new Date(), 'La fecha de nacimiento debe ser antes de hoy'),
    });
    const { handleSubmit, register, formState: { errors, isSubmitting }, } = useForm({ resolver: yupResolver(validationSchema) });
    const onUpdateValues = async (values) => {
        try {
            await updateInformation(values, userInformation.uid);
            toast({
                title: 'Actualización de datos',
                description: 'Se han actualizado tus datos',
                isClosable: true,
                duration: 1500,
                status: 'success',
                position: isLargerThan800 ? 'top-right' : 'bottom',
            });
            onClose();
        }
        catch (error) {
            toast({
                title: 'Actualización de datos',
                description: 'No se han podido actualizar los datos',
                isClosable: true,
                duration: 1500,
                status: 'error',
                position: isLargerThan800 ? 'top-right' : 'bottom',
            });
            console.log(error);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(Box, { pt: 4, children: _jsxs(Flex, { direction: 'column', width: '100%', gap: 4, children: [_jsx(Button, { colorScheme: 'blue', onClick: onOpen, children: "Editar mis datos" }), _jsx(Button, { colorScheme: 'blue', variant: 'link', onClick: () => navigate(-1), children: "Volver" })] }) }), _jsx(AlertDialog, { isOpen: isOpen, onClose: onClose, leastDestructiveRef: cancelRef, size: ['xs', 'sm', 'md', 'lg', 'xl'], children: _jsx(AlertDialogOverlay, { children: _jsxs(AlertDialogContent, { children: [_jsx(AlertDialogHeader, { fontSize: 'lg', fontWeight: 'bold', children: "Actualizar datos" }), _jsx(AlertDialogCloseButton, {}), _jsx(AlertDialogBody, { children: _jsxs(Grid, { p: 4, rounded: 'lg', bgColor: 'white', templateColumns: ['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)'], gap: 6, children: [_jsx(GridItem, { children: _jsxs(FormControl, { isInvalid: !!errors.name, children: [_jsx(FormLabel, { htmlFor: 'name', children: "Nombre(s)" }), _jsx(Input, { type: 'text', ...register('name') }), errors.name && _jsx(FormErrorMessage, { children: errors.name.message })] }) }), _jsx(GridItem, { children: _jsxs(FormControl, { isInvalid: !!errors.fatherSurname, children: [_jsx(FormLabel, { htmlFor: 'fatherSurname', children: "Apellido paterno" }), _jsx(Input, { type: 'text', ...register('fatherSurname') }), errors.fatherSurname && _jsx(FormErrorMessage, { children: errors.fatherSurname.message })] }) }), _jsx(GridItem, { children: _jsxs(FormControl, { isInvalid: !!errors.motherSurname, children: [_jsx(FormLabel, { htmlFor: 'motherSurname', children: "Apellido materno" }), _jsx(Input, { type: 'text', ...register('motherSurname') }), errors.motherSurname && _jsx(FormErrorMessage, { children: errors.motherSurname.message })] }) }), _jsx(GridItem, { children: _jsxs(FormControl, { isInvalid: !!errors.birthday, children: [_jsx(FormLabel, { htmlFor: 'birthday', children: "Fecha de nacimiento" }), _jsx(Input, { type: 'date', ...register('birthday') }), errors.birthday && _jsx(FormErrorMessage, { children: errors.birthday.message })] }) })] }) }), _jsx(AlertDialogFooter, { children: _jsx(Button, { onClick: handleSubmit(onUpdateValues), isLoading: isSubmitting, loadingText: 'Actualizando datos...', colorScheme: 'green', children: "Guardar cambios" }) })] }) }) })] }));
};
export default UserUpdateModal;
