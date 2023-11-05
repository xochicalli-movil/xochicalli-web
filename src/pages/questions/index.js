import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Box, Center, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Spinner, Stack, Text, VStack, useDisclosure } from '@chakra-ui/react';
import { Button, FormControl, FormLabel, Textarea, } from "@chakra-ui/react";
import { db } from '@/firebase';
import { addDoc, collection } from 'firebase/firestore';
const Questions = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formData, setFormData] = useState({
        frequency: "",
        navigationEase: "",
        intuitiveOrganization: "",
        pageSpeed: "",
        technicalProblems: "",
        productInformationSatisfaction: "",
        usedSearchFunction: "",
        trackingOrderEase: "",
        recommendStore: "",
        additionalComments: "",
    });
    const [loading, setLoading] = useState(false);
    const [addOK, setAddOK] = useState();
    const [answeredQuestions, setAnsweredQuestions] = useState(false);
    const [isFromValid, setIsFromValid] = useState(true);
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        const answered = Object.values(formData).some(value => value !== "");
        setAnsweredQuestions(answered);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        const answered = Object.values(formData).some(value => value !== "");
        setAnsweredQuestions(answered);
        if (!answeredQuestions) {
            // Muestra un mensaje y no intenta enviar el formulario
            setIsFromValid(false);
            return;
        }
        setLoading(true);
        const currentDateTime = new Date();
        const formattedDate = currentDateTime.toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
        const formattedTime = currentDateTime.toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
        });
        const updatedFormData = {
            ...formData,
            fecha: formattedDate,
            hora: formattedTime,
        };
        setFormData(updatedFormData);
        try {
            await addDoc(collection(db, 'questions'), updatedFormData);
            setLoading(false);
            setAddOK(true);
            setFormData({
                frequency: "",
                navigationEase: "",
                intuitiveOrganization: "",
                pageSpeed: "",
                technicalProblems: "",
                productInformationSatisfaction: "",
                usedSearchFunction: "",
                trackingOrderEase: "",
                recommendStore: "",
                additionalComments: "",
            });
            onOpen();
            setIsFromValid(true);
        }
        catch (error) {
            console.error('Error al agregar el documento: ', error);
            setLoading(false);
            setAddOK(false);
            onOpen();
            setIsFromValid(true);
        }
    };
    return (_jsx(VStack, { minH: 'calc(100vh - 64px)', bgColor: 'gray.100', p: 4, children: _jsx(Center, { bg: 'white', p: [6, 8], borderRadius: 'lg', w: ['sm', 'md', 'xl', '3xl'], children: _jsxs(VStack, { spacing: 6, w: 'full', children: [_jsx(Heading, { children: "Responder Preguntas" }), _jsx(_Fragment, { children: _jsxs(Modal, { onClose: onClose, isOpen: isOpen, isCentered: true, children: [_jsx(ModalOverlay, {}), _jsxs(ModalContent, { children: [_jsx(ModalHeader, { children: addOK ? 'Guardado correctamente!' : 'Ocurrio un error' }), _jsx(ModalCloseButton, {}), _jsx(ModalBody, { children: addOK ? 'Sus respuestas fueron enviadas!' : 'Verifique su conexión!' }), _jsx(ModalFooter, { children: _jsx(Button, { onClick: onClose, children: "Cerrar" }) })] })] }) }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs(FormControl, { mb: 8, children: [_jsx(FormLabel, { htmlFor: "frequency", children: "1. \u00BFCon qu\u00E9 frecuencia visitas nuestra tienda en l\u00EDnea de productos de plantas y jardiner\u00EDa?" }), _jsxs(Select, { name: "frequency", value: formData.frequency, onChange: handleChange, placeholder: 'Elija una opci\u00F3n', children: [_jsx("option", { value: "Diariamente", children: "Diariamente" }), _jsx("option", { value: "Semanalmente", children: "Semanalmente" }), _jsx("option", { value: "Mensualmente", children: "Mensualmente" }), _jsx("option", { value: "Ocasionalmente", children: "Ocasionalmente" })] })] }), _jsxs(FormControl, { mb: 8, children: [_jsx(FormLabel, { htmlFor: "navigationEase", children: "2. \u00BFC\u00F3mo calificar\u00EDas la facilidad de navegaci\u00F3n en nuestra plataforma?" }), _jsxs(Select, { name: "navigationEase", value: formData.navigationEase, onChange: handleChange, placeholder: 'Elija una opci\u00F3n', children: [_jsx("option", { value: "Muy facil", children: "Muy facil" }), _jsx("option", { value: "Facil", children: "Facil" }), _jsx("option", { value: "Neutral", children: "Neutral" }), _jsx("option", { value: "Dificil", children: "Dificil" }), _jsx("option", { value: "Muy dificil", children: "Muy dificil" })] })] }), _jsxs(FormControl, { mb: 8, children: [_jsx(FormLabel, { htmlFor: "intuitiveOrganization", children: "3. \u00BFHas encontrado que la organizaci\u00F3n de las categor\u00EDas y productos es intuitiva?" }), _jsxs(Select, { name: "intuitiveOrganization", value: formData.intuitiveOrganization, onChange: handleChange, placeholder: 'Elija una opci\u00F3n', children: [_jsx("option", { value: "S\u00ED", children: "S\u00ED" }), _jsx("option", { value: "No", children: "No" })] })] }), _jsxs(FormControl, { mb: 8, children: [_jsx(FormLabel, { htmlFor: "pageSpeed", children: "4. \u00BFCu\u00E1l es tu opini\u00F3n sobre la velocidad de carga de la p\u00E1gina?" }), _jsxs(Select, { name: "pageSpeed", value: formData.pageSpeed, onChange: handleChange, placeholder: 'Elija una opci\u00F3n', children: [_jsx("option", { value: "Excelente", children: "Excelente" }), _jsx("option", { value: "Buena", children: "Buena" }), _jsx("option", { value: "Aceptable", children: "Aceptable" }), _jsx("option", { value: "Lenta", children: "Lenta" }), _jsx("option", { value: "Muy lenta", children: "Muy lenta" })] })] }), _jsxs(FormControl, { mb: 8, children: [_jsx(FormLabel, { htmlFor: "technicalProblems", children: "5. \u00BFExperimentaste problemas t\u00E9cnicos al realizar una compra, como errores de pago o procesamiento?" }), _jsxs(Select, { name: "technicalProblems", value: formData.technicalProblems, onChange: handleChange, placeholder: 'Elija una opci\u00F3n', children: [_jsx("option", { value: "S\u00ED", children: "S\u00ED" }), _jsx("option", { value: "No", children: "No" })] })] }), _jsxs(FormControl, { mb: 8, children: [_jsx(FormLabel, { htmlFor: "productInformationSatisfaction", children: "6. \u00BFQu\u00E9 tan satisfecho est\u00E1s con la informaci\u00F3n proporcionada sobre los productos, como descripciones, im\u00E1genes y precios?" }), _jsxs(Select, { name: "productInformationSatisfaction", value: formData.productInformationSatisfaction, onChange: handleChange, placeholder: 'Elija una opci\u00F3n', children: [_jsx("option", { value: "Muy satisfecho", children: "Muy satisfecho" }), _jsx("option", { value: "Satisfecho", children: "Satisfecho" }), _jsx("option", { value: "Neutral", children: "Neutral" }), _jsx("option", { value: "Insatisfecho", children: "Insatisfecho" }), _jsx("option", { value: "Muy insatisfecho", children: "Muy insatisfecho" })] })] }), _jsxs(FormControl, { mb: 8, children: [_jsx(FormLabel, { htmlFor: "usedSearchFunction", children: "7. \u00BFHas utilizado la funci\u00F3n de b\u00FAsqueda en la plataforma? Si es as\u00ED, \u00BFfue efectiva?" }), _jsxs(Select, { name: "usedSearchFunction", value: formData.usedSearchFunction, onChange: handleChange, placeholder: 'Elija una opci\u00F3n', children: [_jsx("option", { value: "S\u00ED, fue efectiva", children: "S\u00ED, fue efectiva" }), _jsx("option", { value: "S\u00ED, pero no fue efectiva", children: "S\u00ED, pero no fue efectiva" }), _jsx("option", { value: "No, no la utilic\u00E9", children: "No, no la utilic\u00E9" })] })] }), _jsxs(FormControl, { mb: 8, children: [_jsx(FormLabel, { htmlFor: "trackingOrderEase", children: "8. \u00BFTe result\u00F3 f\u00E1cil realizar un seguimiento de tu pedido, recibir notificaciones y acceder a informaci\u00F3n de env\u00EDo?" }), _jsxs(Select, { name: "trackingOrderEase", value: formData.trackingOrderEase, onChange: handleChange, placeholder: 'Elija una opci\u00F3n', children: [_jsx("option", { value: "S\u00ED, fue muy f\u00E1cil", children: "S\u00ED, fue muy f\u00E1cil" }), _jsx("option", { value: "S\u00ED, pero podr\u00EDa mejorar", children: "S\u00ED, pero podr\u00EDa mejorar" }), _jsx("option", { value: "No, fue complicado", children: "No, fue complicado" })] })] }), _jsxs(FormControl, { mb: 8, children: [_jsx(FormLabel, { htmlFor: "recommendStore", children: "9. \u00BFRecomendar\u00EDas nuestra tienda en l\u00EDnea a otras personas interesadas en productos de plantas y jardiner\u00EDa?" }), _jsxs(Select, { name: "recommendStore", value: formData.recommendStore, onChange: handleChange, placeholder: 'Elija una opci\u00F3n', children: [_jsx("option", { value: "Definitivamente", children: "Definitivamente" }), _jsx("option", { value: "Probablemente", children: "Probablemente" }), _jsx("option", { value: "No estoy seguro", children: "No estoy seguro" }), _jsx("option", { value: "Probablemente no", children: "Probablemente no" }), _jsx("option", { value: "Definitivamente no", children: "Definitivamente no" })] })] }), _jsxs(FormControl, { mb: 8, children: [_jsx(FormLabel, { htmlFor: "additionalComments", children: "10. \u00BFTienes alguna sugerencia o comentario adicional sobre la usabilidad de nuestra plataforma que nos ayude a mejorar?" }), _jsx(Textarea, { name: "additionalComments", value: formData.additionalComments, onChange: handleChange, placeholder: "Escribe tus comentarios aqu\u00ED" })] }), _jsx(Box, { sx: { display: 'flex', justifyContent: 'center' }, children: loading ? (_jsx(Spinner, { color: 'red.500' })) : (_jsx(Button, { type: "submit", colorScheme: "teal", children: "Enviar respuestas" })) }), isFromValid ? null : _jsx(Box, { sx: { display: 'flex', justifyContent: 'center' }, children: _jsx(Text, { fontSize: 'xs', as: 'b', color: 'tomato', children: "Debe responder la encuesta" }) })] }), _jsx(Stack, { spacing: 3, children: _jsx(Text, { fontSize: 'sm', as: 'b', children: "\u00A1Estas preguntas te ayudar\u00E1n a obtener informaci\u00F3n valiosa sobre la experiencia de los clientes en tu tienda en l\u00EDnea y a identificar \u00E1reas de mejora!" }) })] }) }) }));
};
export default Questions;
