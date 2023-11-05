import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { saveCategoriasToFirebase } from "@/utils";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Button, CircularProgress, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, } from "@chakra-ui/react";
import React, { useState } from "react";
import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import PopoverDeleteCategory from "./DeleteCategory";
const ModalCategory = ({ propCategory }) => {
    const [success, setSuccess] = useState(false);
    const [deleteCategory, setDeleteCategory] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [createCategory, setCreateCategory] = useState({
        categoria: "",
        finalCategory: false,
        numSubcategorys: 0,
        subCategorys: {},
    });
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    const subCategory = (subcategory, index) => {
        const validation = createCategory?.subCategorys[subcategory]?.subCategorys?.numItems > 0;
        return (_jsxs(Box, { children: [_jsxs(FormLabel, { children: ["Subcategoria-", index + 1] }), _jsxs(Box, { display: "flex", children: [_jsx(Input, { value: createCategory?.subCategorys[subcategory]?.nameCategory ?? "", onChange: (event) => {
                                setCreateCategory((prevCreateCategory) => {
                                    const updatedCategory = { ...prevCreateCategory };
                                    updatedCategory.subCategorys[subcategory].nameCategory =
                                        event.target.value;
                                    return updatedCategory;
                                });
                            }, ref: initialRef, placeholder: 'Abono' }), _jsx(Button, { display: validation ? "none" : "block", onClick: () => addCategory2(subcategory), name: 'addSubcateogry', children: _jsx(AddIcon, {}) }), _jsx(Button, { children: _jsx(DeleteIcon, { onClick: () => DeleteCategory(subcategory) }) })] }), validation ? (_jsx(TagsInput, { value: createCategory?.subCategorys[subcategory]?.subCategorys[0]?.value, onChange: (event) => {
                        setCreateCategory((tags) => {
                            const updatedCategory = { ...createCategory };
                            tags.subCategorys[subcategory].subCategorys[0].value = event;
                            return updatedCategory;
                        });
                    } })) : null] }));
    };
    const addCategory = () => {
        const num = createCategory.numSubcategorys;
        const name = "subcateogory" + num;
        setCreateCategory({
            ...createCategory,
            numSubcategorys: num + 1,
            subCategorys: {
                ...createCategory.subCategorys,
                [name]: {
                    nameCategory: "",
                    subCategorys: {
                        numItems: 0,
                    },
                },
            },
        });
    };
    const addCategory2 = (subcategory) => {
        const indexSubcategory2 = createCategory.subCategorys[subcategory].subCategorys.numItems;
        setCreateCategory((prevCreateCategory) => {
            const updatedCreateCategory = { ...prevCreateCategory };
            if (updatedCreateCategory.subCategorys.hasOwnProperty(subcategory)) {
                updatedCreateCategory.subCategorys[subcategory].subCategorys.numItems =
                    indexSubcategory2 + 1;
                updatedCreateCategory.subCategorys[subcategory].subCategorys[indexSubcategory2] = {
                    name: "",
                    value: [],
                    finalCategory: false,
                };
            }
            return updatedCreateCategory;
        });
    };
    const DeleteCategory = (subcategoryKey) => {
        setCreateCategory((prevCreateCategory) => {
            const updatedCreateCategory = { ...prevCreateCategory };
            if (updatedCreateCategory.subCategorys.hasOwnProperty(subcategoryKey)) {
                delete updatedCreateCategory.subCategorys[subcategoryKey];
            }
            return updatedCreateCategory;
        });
    };
    const saveCategory = async () => {
        setSuccess(true);
        const save = await saveCategoriasToFirebase(createCategory);
        setCreateCategory({
            categoria: "",
            finalCategory: false,
            numSubcategorys: 0,
            subCategorys: {},
        });
        enqueueSnackbar(save ? "Categoria agregada con exito" : "Error al agregar categoria", {
            variant: save ? "success" : "error",
            preventDuplicate: true,
            anchorOrigin: {
                vertical: "bottom",
                horizontal: "right",
            },
        });
        setSuccess(false);
        onClose();
    };
    return (_jsxs(_Fragment, { children: [_jsx(SnackbarProvider, {}), _jsx(Button, { onClick: () => {
                    onOpen();
                    setCreateCategory({
                        categoria: "",
                        finalCategory: false,
                        numSubcategorys: 0,
                        subCategorys: {},
                    });
                }, children: _jsx(AddIcon, {}) }), _jsx(Button, { ml: 4, onClick: () => {
                    setDeleteCategory(true);
                    onOpen();
                    setCreateCategory(propCategory);
                }, ref: finalRef, children: _jsx(EditIcon, {}) }), _jsxs(Modal, { initialFocusRef: initialRef, finalFocusRef: finalRef, isOpen: isOpen, onClose: onClose, children: [_jsx(ModalOverlay, {}), _jsxs(ModalContent, { children: [_jsx(ModalHeader, { children: "Create your account" }), _jsx(ModalCloseButton, {}), _jsxs(ModalBody, { pb: 6, children: [_jsxs(FormControl, { children: [_jsx(FormLabel, { children: "Categoria" }), _jsxs(Box, { display: "flex", children: [_jsx(Input, { value: createCategory.categoria, onChange: (event) => setCreateCategory({
                                                            ...createCategory,
                                                            categoria: event.target.value,
                                                        }), ref: initialRef, placeholder: 'Abono' }), _jsx(Button, { onClick: addCategory, children: _jsx(AddIcon, {}) }), deleteCategory ? (_jsx(PopoverDeleteCategory, { category: createCategory.categoria })) : null] })] }), Object.keys(createCategory.subCategorys).map((categoryKey, index) => (_jsx(Box, { children: subCategory(categoryKey, index) }, categoryKey)))] }), _jsxs(ModalFooter, { children: [_jsx(Button, { onClick: saveCategory, colorScheme: 'blue', mr: 3, children: !success ? ("Save") : (_jsx(CircularProgress, { size: "25px", isIndeterminate: true, color: '#ffffff' })) }), _jsx(Button, { onClick: onClose, children: "Cancel" })] })] })] })] }));
};
export default ModalCategory;
