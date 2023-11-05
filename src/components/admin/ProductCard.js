import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState } from "react";
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, ButtonGroup, Card, CardBody, Divider, Heading, HStack, Image, Stack, Tag, Text, useDisclosure, } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FiTrash } from "react-icons/fi";
import { deleteProduct } from "@/utils";
import { usePrice } from "@/hooks";
const ProductCard = ({ image, title, description, price, category, id, tags, subcategory, }) => {
    const [loading, setLoading] = useState(false);
    const cancelRef = useRef();
    const { newPrice } = usePrice(price);
    const { isOpen, onOpen, onClose } = useDisclosure();
    //const toProduct = useNavigate();
    //const handleToProduct = () => toProduct(`/admin/products/${id}`);
    const navigate = useNavigate();
    const toProduct = () => navigate(`/products/${id}`);
    const handleDelete = async () => {
        setLoading(true);
        await deleteProduct(id, image);
        setLoading(false);
        onClose();
        window.location.reload();
    };
    return (_jsxs(_Fragment, { children: [_jsx(Card, { maxW: ["xs", "sm"], borderRadius: 'xl', children: _jsxs(CardBody, { children: [_jsx(Image, { src: image, alt: `${title}-${id}`, objectFit: 'cover', fallbackSrc: 'https://via.placeholder.com/256', loading: 'lazy', height: 256, width: 512, borderRadius: 'lg' }), _jsxs(Stack, { spacing: '3', my: '3', children: [_jsx(Heading, { noOfLines: 1, size: ["lg", "md", "lg"], children: title }), _jsxs(Text, { children: ["id: ", id] }), _jsx(Divider, {}), _jsxs(Box, { display: "flex", gap: "5px", children: [_jsx(Tag, { width: 'max-content', children: category }), _jsx(Tag, { width: 'max-content', display: subcategory !== undefined ? "flex" : "none", children: subcategory }), _jsx(Tag, { width: 'max-content', display: tags !== undefined ? "flex" : "none", children: tags })] }), _jsx(Text, { noOfLines: 1, children: description })] }), _jsxs(HStack, { alignItems: 'center', justifyContent: 'space-between', width: '100%', mt: 4, children: [_jsxs(ButtonGroup, { spacing: 4, children: [_jsx(Button, { onClick: onOpen, colorScheme: 'red', children: "Eliminar" }), _jsx(Button, { onClick: toProduct, variant: 'link', colorScheme: 'telegram', children: "Ver m\u00E1s" })] }), _jsx(Text, { fontSize: 'xl', fontWeight: 'medium', children: newPrice })] })] }) }), _jsx(AlertDialog, { isOpen: isOpen, leastDestructiveRef: cancelRef, onClose: onClose, size: ["xs", "sm", "md", "lg", "xl"], children: _jsx(AlertDialogOverlay, { children: _jsxs(AlertDialogContent, { children: [_jsx(AlertDialogHeader, { fontSize: 'lg', fontWeight: 'bold', children: "Eliminar producto" }), _jsxs(AlertDialogBody, { children: ["\u00BFSeguro que quieres eliminar el producto '", title, "'?"] }), _jsxs(AlertDialogFooter, { children: [_jsx(Button, { ref: cancelRef, onClick: onClose, children: "No, cancelar" }), _jsx(Button, { isLoading: loading, leftIcon: _jsx(FiTrash, {}), colorScheme: 'red', onClick: handleDelete, ml: 3, children: "S\u00ED, eliminar" })] })] }) }) })] }));
};
export default ProductCard;
