import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, InputGroup, InputLeftAddon, InputRightAddon, Select, Textarea, useToast, VisuallyHiddenInput, VStack, } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { v4 } from "uuid";
import { addProduct, getCategorias } from "@/utils";
import { storage } from "@/firebase";
import ModalCategory from "./modalCategory";
import { FaCloudUploadAlt } from "react-icons/fa";
const AddProduct = () => {
    const [arrayTags, setArrayTags] = useState([]);
    const [upload, setUpload] = useState(false);
    const [imageBase64, setImageBase64] = useState("");
    const [category, setCategory] = useState("");
    const [subCategoryForm, setSubCategoryForm] = useState("");
    const [etiqueta, setEtiqueta] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const fileRef = useRef(null);
    const [dataCategorias, setDataCategorias] = useState({});
    const { handleSubmit, register, formState: { errors, isSubmitting }, reset, } = useForm();
    const toast = useToast();
    const navigate = useNavigate();
    const handleGoProducts = () => navigate("/admin/products");
    const uploadImage = (fileRef) => {
        if (fileRef.current?.files?.length) {
            const file = fileRef.current.files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const base64String = event?.target?.result;
                if (base64String)
                    setImageBase64(base64String);
            };
            reader.readAsDataURL(file);
        }
        else {
            console.error("No file selected");
        }
    };
    const uploadImageToFirebase = (imgRef, file) => {
        const imgUpload = uploadBytesResumable(imgRef, file);
        imgUpload.on("state_changed", ({ state }) => {
            switch (state) {
                case "paused":
                    console.log("Upload is paused");
                    break;
                case "running":
                    console.log("Upload is running");
                    break;
                default:
                    break;
            }
        }, (err) => {
            console.error(err);
        }, async () => {
            const url = await getDownloadURL(imgUpload.snapshot.ref);
            setImageUrl(url);
        });
    };
    const handleAcceptImage = (fileRef) => {
        if (fileRef.current?.files?.length) {
            const file = fileRef.current.files[0];
            const fileName = file.name;
            const imgRef = ref(storage, `products/${v4() + fileName}`);
            uploadImageToFirebase(imgRef, file);
        }
        else {
            toast({
                title: "No se ha seleccionado ninguna imagen",
                duration: 2000,
                status: "error",
                position: "top-right",
            });
        }
    };
    const onSubmit = async (values) => {
        console.log("values::>", values);
        await addProduct(values, imageUrl)
            .then(() => {
            toast({
                title: "Producto subido correctamente",
                duration: 2000,
                status: "success",
                position: "top-right",
            });
            reset();
        })
            .catch(() => {
            toast({
                title: "¡Algo salió mal!",
                duration: 2000,
                status: "error",
                position: "top-right",
            });
        });
    };
    // ----------- categoria
    const handleSelectChange = (event) => {
        const category = event.target.value;
        setCategory(category);
    };
    const handleSelectChangeSubCategory = (event) => {
        const subCategoryForm = event.target.value;
        setSubCategoryForm(subCategoryForm);
        tags(subCategoryForm);
    };
    const handleSelectChangeTags = (event) => {
        const etiqueta = event.target.value;
        setEtiqueta(etiqueta);
    };
    const handleCancel = () => {
        setImageBase64("");
        setImageUrl("");
        setUpload(false);
    };
    useEffect(() => {
        const getDataCategorias = async () => {
            const dataCategorias = await getCategorias();
            const subCaregoryy = dataCategorias[Object.keys(dataCategorias)[0]].subCategorys
                .subcateogory0.nameCategory;
            const etiquetas = dataCategorias[Object.keys(dataCategorias)[0]].subCategorys
                .subcateogory0.subCategorys[0].value;
            setDataCategorias(dataCategorias);
            setCategory(Object.keys(dataCategorias)[0]);
            tags(subCategoryForm);
            setSubCategoryForm(subCaregoryy);
            setArrayTags(etiquetas);
        };
        getDataCategorias();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const tags = (subCategoryForm) => {
        for (const tags in dataCategorias[category]?.subCategorys) {
            if (dataCategorias[category]?.subCategorys[tags].nameCategory ===
                subCategoryForm) {
                setArrayTags(dataCategorias[category]?.subCategorys[tags]?.subCategorys[0]
                    ?.value ?? []);
                break;
            }
        }
    };
    return (_jsxs(VStack, { h: 'auto', paddingBottom: "2%", bgColor: 'gray.200', gap: 4, children: [_jsx(Helmet, { children: _jsx("title", { children: "Agregar producto" }) }), _jsx(Heading, { my: 4, children: "A\u00F1adir un producto" }), _jsx("form", { onSubmit: handleSubmit(onSubmit), children: _jsxs(Box, { w: [350, 450, 550, 650], bgColor: 'white', p: 5, borderRadius: 'xl', boxShadow: 'xs', children: [_jsxs(FormControl, { isInvalid: !!errors.title, mb: 4, children: [_jsx(FormLabel, { htmlFor: 'title', children: "Nombre de producto" }), _jsx(Input, { type: 'text', id: 'title', borderColor: 'gray.200', placeholder: 'Planta medicinal', ...register("title", {
                                        required: true,
                                        minLength: 4,
                                    }) }), errors.title && (_jsx(FormErrorMessage, { children: "El t\u00EDtulo es requerido" }))] }), _jsxs(FormControl, { isInvalid: !!errors.description, mb: 4, children: [_jsx(FormLabel, { htmlFor: 'description', children: "Descripci\u00F3n del producto" }), _jsx(Textarea, { id: 'description', borderColor: 'gray.200', placeholder: 'Planta con aroma agradable para curar enfermedades', ...register("description", {
                                        required: true,
                                        minLength: 10,
                                    }) }), errors.description && (_jsx(FormErrorMessage, { children: "La descripci\u00F3n es requerida" }))] }), _jsx(Box, { children: _jsxs(FormControl, { isInvalid: !!errors.category, mb: 4, children: [_jsx(FormLabel, { htmlFor: 'category', children: "Categor\u00EDa" }), _jsxs(Box, { style: { display: "flex" }, children: [_jsx(Select, { ...register("category", {
                                                    required: true,
                                                }), onChange: (e) => handleSelectChange(e), children: dataCategorias?.categorias?.map((categoria) => (_jsx("option", { value: categoria, children: categoria }, categoria))) }), _jsx(ModalCategory, { propCategory: dataCategorias[category] })] }), _jsx(FormLabel, { htmlFor: 'subcategory', style: { marginTop: "7px" }, children: "Subcategor\u00EDa" }), _jsx(Select, { ...register("subcategory", {
                                            required: true,
                                        }), value: subCategoryForm, onChange: (e) => handleSelectChangeSubCategory(e), children: Object.keys(dataCategorias[category]?.subCategorys ?? "").map((sybcategory) => {
                                            const nameSubCategory = dataCategorias[category]?.subCategorys[sybcategory]
                                                ?.nameCategory ?? "";
                                            return (_jsx("option", { value: nameSubCategory, children: nameSubCategory }, nameSubCategory));
                                        }) }), _jsxs(Box, { display: arrayTags.length > 0 ? "block" : "none", children: [_jsx(FormLabel, { htmlFor: 'tags', style: { marginTop: "7px" }, children: "Etiqueta" }), _jsx(Select, { ...register("tags", {
                                                    required: true,
                                                }), value: etiqueta, onChange: (e) => handleSelectChangeTags(e), children: arrayTags?.map((sybcategory) => (_jsx("option", { value: sybcategory, children: sybcategory }, sybcategory))) })] }), errors.category && (_jsx(FormErrorMessage, { children: "La categor\u00EDa es requerida" }))] }) }), _jsxs(FormControl, { isInvalid: !!errors.stock, mb: 4, children: [_jsx(FormLabel, { htmlFor: 'stock', children: "Stock" }), _jsx(Input, { id: 'stock', type: 'number', borderColor: 'gray.200', placeholder: '5', ...register("stock", {
                                        required: true,
                                        min: 5,
                                    }) }), errors.stock && (_jsx(FormErrorMessage, { children: "El stock de producto es requerido" }))] }), _jsxs(FormControl, { isInvalid: !!errors.price, mb: 4, children: [_jsx(FormLabel, { htmlFor: 'price', children: "Precio" }), _jsxs(InputGroup, { children: [_jsx(InputLeftAddon, { children: '$' }), _jsx(Input, { id: 'price', type: 'number', borderColor: 'gray.200', placeholder: '12345', ...register("price", {
                                                required: true,
                                                min: 20,
                                            }) }), _jsx(InputRightAddon, { children: 'MXN' })] }), errors.price && (_jsx(FormErrorMessage, { children: "El precio es requerido" }))] }), _jsxs(FormControl, { isInvalid: !!errors.image, mb: 4, children: [_jsx(FormLabel, { htmlFor: 'image', children: "Imagen" }), _jsx(Box, { style: {
                                        padding: "20%",
                                        textAlign: "center",
                                        border: "#00000040 dashed",
                                        display: upload ? "none" : "block",
                                    }, children: _jsxs(Button, { as: 'label', background: "blue.100", rightIcon: _jsx(FaCloudUploadAlt, {}), children: ["Upload IMG", _jsx(VisuallyHiddenInput, { accept: 'image/*', ref: fileRef, onChange: () => {
                                                    setUpload(true);
                                                    uploadImage(fileRef);
                                                }, type: 'file' })] }) }), imageBase64 && (_jsxs(Box, { id: 'contianer_img', sx: {
                                        justifyContent: "center",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }, children: [_jsx("img", { style: { width: "90%" }, src: imageBase64, alt: 'Preview' }), _jsxs(Box, { sx: {
                                                width: "90%",
                                                display: "flex",
                                                justifyContent: "space-evenly",
                                                marginY: "10px",
                                            }, children: [_jsx(Button, { colorScheme: 'blue', onClick: () => handleAcceptImage(fileRef), children: "Aceptar imagen" }), _jsx(Button, { colorScheme: 'red', onClick: () => handleCancel(), children: "Cancelar" })] })] })), errors.price && (_jsx(FormErrorMessage, { children: "La imagen es requerida" }))] }), _jsx(Button, { isLoading: isSubmitting, loadingText: 'Agregando producto...', colorScheme: 'blue', width: '100%', isDisabled: imageUrl ? false : true, type: 'submit', mb: 2, children: "Agregar producto" }), _jsx(Button, { colorScheme: 'linkedin', width: '100%', onClick: handleGoProducts, children: "Ver productos" })] }) })] }));
};
export default AddProduct;
