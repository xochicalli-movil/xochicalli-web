import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext, useEffect, useRef, useState } from "react";
import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, FormControl, FormErrorMessage, FormLabel, Input, Select, SimpleGrid, Stack, Text, useColorModeValue, useDisclosure, useToast } from "@chakra-ui/react";
import { SmallAddIcon } from "@chakra-ui/icons";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from "axios";
import { addAddress } from "@/utils";
import { UserContext } from "@/context";
const AddAddressModal = () => {
    const { userInformation } = useContext(UserContext);
    const [zipCode, setZipCode] = useState('');
    const [zipData, setZipData] = useState(); // Set initial value as undefined
    const [shippingInformation, setShippingInformation] = useState({
        names: '',
        address: '',
        zip: '',
        state: '',
        city: '',
        colony: '',
        email: userInformation.email,
    });
    const cancelRef = useRef();
    const { isOpen, onClose, onOpen } = useDisclosure();
    const toast = useToast();
    const validationSchema = yup.object().shape({
        names: yup
            .string()
            .required('El nombre es requerido')
            .min(6, 'El nombre debe tener al menos 6 caracteres'),
        address: yup
            .string()
            .required('La dirección es requerida')
            .min(4, 'La dirección debe tener al menos 4 caracteres'),
        zip: yup
            .string()
            .required('El código postal es requerido')
            .min(5, 'Debe ser de 5 dígitos'),
        state: yup
            .string()
            .required('El estado es requerido')
            .min(4, 'El estado debe tener al menos 4 caracteres'),
        city: yup
            .string()
            .required('La ciudad es requerida')
            .min(4, 'La ciudad debe tener al menos 4 caracteres'),
        colony: yup
            .string()
            .required('La ccolonia es requerida')
            .min(4, 'La colonia debe tener al menos 4 caracteres')
    });
    const { handleSubmit, register, formState: { errors, isSubmitting }, reset } = useForm({ resolver: yupResolver(validationSchema) });
    const getShippingByCode = async () => {
        try {
            if (zipCode.length === 5) {
                const { data } = await axios.get(`https://raw.githubusercontent.com/pulgueta/mxzip/main/mxzip.json`);
                setZipData(data[zipCode]);
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        const delayTimer = setTimeout(getShippingByCode, 500);
        if (zipData) {
            setShippingInformation((prevShippingInfo) => ({
                ...prevShippingInfo,
                zip: zipCode,
                state: zipData.state || prevShippingInfo.state,
                city: zipData.municipality || prevShippingInfo.city,
                colony: zipData.neighborhoods[0] || prevShippingInfo.colony,
            }));
        }
        else {
            setShippingInformation((prevShippingInfo) => ({
                ...prevShippingInfo,
                zip: zipCode,
                state: '',
                city: '',
                colony: '',
            }));
        }
        return () => clearTimeout(delayTimer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [zipCode, zipData]);
    const onSubmit = async (values) => {
        try {
            console.log(values);
            await addAddress(values, userInformation.uid);
            toast({
                status: 'success',
                duration: 1000,
                position: 'top',
                title: 'Dirección',
                description: 'Tu dirección ha sido agregada.'
            });
            reset();
            onClose();
        }
        catch (e) {
            throw Error(e, { cause: 'error' });
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(Button, { bgColor: 'gray.50', p: 8, rounded: 'lg', border: 'dotted', borderColor: 'gray.100', onClick: () => onOpen(), children: _jsxs(Stack, { align: 'center', direction: 'row', children: [_jsx(SmallAddIcon, { rounded: 'full', boxSize: 5, bgColor: 'blue.400', color: 'white' }), _jsx(Text, { children: "Agrega una direcci\u00F3n" })] }) }), _jsx(AlertDialog, { isOpen: isOpen, onClose: onClose, leastDestructiveRef: cancelRef, size: ['sm', 'md', 'lg', '2xl'], children: _jsx(AlertDialogOverlay, { children: _jsxs(AlertDialogContent, { children: [_jsx(AlertDialogHeader, { fontSize: 'lg', fontWeight: 'bold', children: "Agregar una direcci\u00F3n" }), _jsx(AlertDialogCloseButton, { onClick: () => { onClose(); reset(); } }), _jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsx(AlertDialogBody, { children: _jsxs(Stack, { spacing: { base: '6', md: '6' }, children: [_jsxs(FormControl, { isInvalid: !!errors.names, children: [_jsx(FormLabel, { color: useColorModeValue('gray.700', 'gray.200'), children: "Nombres y apellidos" }), _jsx(Input, { placeholder: "Callie Nun", focusBorderColor: useColorModeValue('blue.500', 'blue.200'), ...register('names') }), errors.names && _jsx(FormErrorMessage, { children: errors.names.message })] }), _jsxs(FormControl, { isInvalid: !!errors.address, children: [_jsx(FormLabel, { color: useColorModeValue('gray.700', 'gray.200'), children: "Direcci\u00F3n completa" }), _jsx(Input, { placeholder: "123 Ejemplo St", focusBorderColor: useColorModeValue('blue.500', 'blue.200'), ...register('address') }), errors.address && _jsx(FormErrorMessage, { children: errors.address.message })] }), _jsxs(SimpleGrid, { columns: [1, 2], spacing: "6", children: [_jsxs(FormControl, { isInvalid: !!errors.zip, maxW: 32, children: [_jsx(FormLabel, { color: useColorModeValue('gray.700', 'gray.200'), children: "C\u00F3digo postal" }), _jsx(Input, { placeholder: "03100", focusBorderColor: useColorModeValue('blue.500', 'blue.200'), ...register('zip'), onChange: ({ target }) => setZipCode(target.value) }), errors.zip && _jsx(FormErrorMessage, { children: errors.zip.message })] }), _jsxs(FormControl, { isInvalid: !!errors.state, children: [_jsx(FormLabel, { color: useColorModeValue('gray.700', 'gray.200'), children: "Estado" }), _jsx(Input, { defaultValue: shippingInformation.state, placeholder: "Tamaulipas", focusBorderColor: useColorModeValue('blue.500', 'blue.200'), ...register('state') }), errors.state && _jsx(FormErrorMessage, { children: errors.state.message })] }), _jsxs(FormControl, { isInvalid: !!errors.city, children: [_jsx(FormLabel, { color: useColorModeValue('gray.700', 'gray.200'), children: "Ciudad" }), _jsx(Input, { defaultValue: shippingInformation.city, placeholder: "Victoria", focusBorderColor: useColorModeValue('blue.500', 'blue.200'), ...register('city') }), errors.city && _jsx(FormErrorMessage, { children: errors.city.message })] }), _jsxs(FormControl, { isInvalid: !!errors.colony, children: [_jsx(FormLabel, { color: useColorModeValue('gray.700', 'gray.200'), children: "Colonia" }), _jsx(Select, { defaultValue: shippingInformation.colony, ...register('colony'), children: zipData && zipData.neighborhoods.map((neighborhood) => (_jsx("option", { value: neighborhood, children: neighborhood }, neighborhood))) }), errors.colony && _jsx(FormErrorMessage, { children: errors.colony.message })] })] })] }) }), _jsx(AlertDialogFooter, { children: _jsx(Button, { type: 'submit', colorScheme: 'blue', isLoading: isSubmitting, children: "Agregar direcci\u00F3n" }) })] })] }) }) })] }));
};
export default AddAddressModal;
