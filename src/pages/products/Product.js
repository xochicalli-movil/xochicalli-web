import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { lazy, Suspense, useContext, useEffect } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Center, Box, VStack, Heading, Stack, Text, Button, useToast, useMediaQuery, IconButton, Input, FormControl, FormLabel, Textarea, FormErrorMessage, } from "@chakra-ui/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ProductSkeleton } from "@/components/skeleton";
import { Comment } from "@/components/ui";
import { useComments, useProduct } from "@/hooks";
import { addComment } from "@/utils";
import { UserContext } from "@/context";
const ProductView = lazy(() => import("@/components/products/ProductView"));
const Product = () => {
    const toast = useToast();
    const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
    const { id } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { product, loading } = useProduct(id);
    const { comments, loading: loadingComments } = useComments(product?.title);
    const guestSchema = yup.object().shape({
        name: yup
            .string()
            .required("El nombre es requerido")
            .min(4, "El nombre debe tener mínimo 4 caracteres"),
        fatherSurname: yup
            .string()
            .required("El apellido paterno es requerido")
            .min(4, "El apellido debe tener mínimo 4 caracteres"),
        comment: yup
            .string()
            .required("El comentario es requerido")
            .min(6, "El comentario debe tener mínimo 6 caracteres"),
    });
    const userSchema = yup.object().shape({
        comment: yup
            .string()
            .required("El comentario es requerido")
            .min(6, "El comentario debe tener mínimo 6 caracteres"),
    });
    const { handleSubmit, register, formState: { errors, isSubmitting }, reset, } = useForm({
        resolver: yupResolver(user ? userSchema : guestSchema),
    });
    const onSubmit = async (values) => {
        try {
            toast({
                status: "success",
                duration: 1500,
                isClosable: false,
                title: "Añadir comentario",
                position: isLargerThan800 ? "top-right" : "bottom",
                description: "Se ha añadido tu comentario",
            });
            reset();
            user
                ? await addComment(values, product?.title)
                : await addComment(values, product?.title);
        }
        catch ({ message }) {
            toast({
                status: "error",
                duration: 1500,
                isClosable: false,
                title: "Añadir un comentario",
                position: isLargerThan800 ? "bottom" : "top-right",
                description: message,
            });
        }
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (_jsxs(Box, { minH: 'calc(100vh - 72px)', bgColor: 'gray.100', p: 4, children: [_jsx(Helmet, { children: _jsx("title", { children: `Producto: ${product?.title === undefined ? "Cargando..." : product.title}` }) }), _jsxs(Breadcrumb, { pt: 2, pb: 6, ml: [0, 0, 16, 24], children: [isLargerThan800 && (_jsx(BreadcrumbItem, { children: _jsx(IconButton, { "aria-label": 'back', icon: _jsx(FiArrowLeft, {}), onClick: () => navigate(-1) }) })), _jsx(BreadcrumbItem, { children: _jsx(BreadcrumbLink, { as: Link, to: '/', children: "Inicio" }) }), _jsx(BreadcrumbItem, { children: _jsx(BreadcrumbLink, { as: Link, to: '/products', children: "Productos" }) }), _jsx(BreadcrumbItem, { children: _jsx(BreadcrumbLink, { as: Link, to: `/products/${id}`, children: id }) })] }), _jsx(Center, { children: _jsx(Box, { bgColor: 'white', p: 4, borderRadius: 'lg', children: loading ? (_jsx(ProductSkeleton, {})) : (_jsxs(Stack, { direction: 'column', gap: 16, width: [350, "md", "2xl", "4xl", "7xl"], minHeight: 'xl', as: 'main', children: [_jsx(Suspense, { fallback: _jsx(ProductSkeleton, {}), children: _jsx(ProductView, { id: id, category: product?.category, description: product?.description, image: product?.image, price: product?.price, title: product?.title, subcategory: product?.subcategory, tags: product?.tags, stock: product?.stock }) }), _jsxs(Box, { bgColor: 'white', p: 6, borderRadius: 'lg', boxShadow: 'base', children: [_jsx(Heading, { fontSize: [20, 24, 32], mb: 4, children: "Comentarios sobre el producto" }), _jsx(Stack, { as: 'article', direction: 'row', gap: 4, width: 'full', justifyContent: 'center', py: 4, flexWrap: 'wrap', children: loadingComments ? (_jsx(Heading, { children: "Cargando..." })) : comments && comments.length === 0 ? (_jsx(Text, { fontWeight: 500, fontSize: 'xl', textAlign: 'center', py: 8, children: "A\u00FAn no hay comentarios sobre este producto" })) : (comments.map((comment) => (_createElement(Comment, { ...comment, key: comment.id })))) }), _jsxs(Box, { bgColor: 'white', children: [_jsx(Heading, { fontSize: [20, 24, 32], my: 2, children: "Deja un comentario" }), _jsx("form", { onSubmit: handleSubmit(onSubmit), children: _jsxs(VStack, { gap: 4, p: [0, 0, 8], as: 'article', alignItems: 'flex-start', justifyContent: 'space-between', width: '75%', mx: 'auto', children: [_jsx(Stack, { direction: ["column", "column", "row"], width: 'full', justifyContent: 'space-between', gap: 4, children: (user === null || user === undefined) && (_jsxs(_Fragment, { children: [_jsxs(FormControl, { isInvalid: !!errors.name, children: [_jsx(FormLabel, { htmlFor: 'Nombre', children: "Nombre(s)" }), _jsx(Input, { placeholder: 'Nombre', id: 'name', type: 'text', maxLength: 35, ...register("name") }), errors.name && (_jsx(FormErrorMessage, { children: errors.name.message }))] }), _jsxs(FormControl, { isInvalid: !!errors.fatherSurname, children: [_jsx(FormLabel, { htmlFor: 'Apellido', children: "Apellido(s)" }), _jsx(Input, { placeholder: 'Apellido', id: 'fatherSurname', type: 'text', max: 50, ...register("fatherSurname") }), errors.fatherSurname && (_jsx(FormErrorMessage, { children: errors.fatherSurname.message }))] })] })) }), _jsxs(FormControl, { isInvalid: !!errors.comment, children: [_jsx(FormLabel, { htmlFor: 'Comentario', children: "Comentario" }), _jsx(Textarea, { placeholder: 'Me parece bastante...', id: 'comment', ...register("comment") }), errors.comment && (_jsx(FormErrorMessage, { children: errors.comment.message }))] }), _jsx(Button, { type: 'submit', colorScheme: 'green', isLoading: isSubmitting, children: "Enviar comentario" })] }) })] })] })] })) }) })] }));
};
export default Product;
