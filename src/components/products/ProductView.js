import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import { Box, Button, Heading, Image, Stack, Tag, Text, useMediaQuery, useToast, VStack, } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { CartContext, UserContext } from "@/context";
import { usePrice, useProduct } from "@/hooks";
const ProductView = ({ title, image, description, category, tags, subcategory, id, stock, }) => {
    const uid = localStorage.getItem("uid");
    const { user } = useContext(UserContext);
    const { addToCart } = useContext(CartContext);
    const toast = useToast();
    const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
    const { product } = useProduct(id);
    const { newPrice } = usePrice(product?.price);
    const addItemToCart = () => {
        if (!user || uid === "") {
            toast({
                status: "info",
                duration: 1500,
                isClosable: false,
                title: "Añadir al carrito",
                position: isLargerThan800 ? "top-right" : "bottom",
                description: "Debes iniciar sesión para añadir productos al carrito",
            });
        }
        else {
            product && addToCart(product);
            toast({
                status: "success",
                duration: 1000,
                isClosable: false,
                title: "Añadir al carrito",
                position: isLargerThan800 ? "top" : "bottom",
                description: "¡Producto añadido al carrito!",
            });
        }
    };
    return (_jsxs(Stack, { direction: ["column", "column", "column", "row"], gap: 4, width: 'full', justifyContent: 'space-between', children: [_jsx(Image, { src: image, alt: title, aspectRatio: ["auto", "auto", 4 / 3], minWidth: [350, "full", 500, 500], height: '500', mx: 'auto', objectFit: 'cover', borderRadius: 'lg', loading: 'lazy', boxShadow: 'base' }), _jsxs(VStack, { bgColor: 'white', justifyContent: 'space-between', boxShadow: 'base', py: 2, px: 6, borderRadius: 'lg', minHeight: 'full', children: [_jsxs(Box, { children: [_jsx(Heading, { textShadow: 'base', textAlign: 'center', py: 4, children: title }), _jsxs(Tag, { mb: 4, marginRight: "15px", children: ["Categor\u00EDa: ", category] }), _jsxs(Tag, { mb: 4, marginRight: "15px", children: ["Subcategor\u00EDa: ", subcategory !== undefined ? subcategory : "Otros"] }), _jsxs(Tag, { mb: 4, marginRight: "15px", children: ["Tags: ", tags !== undefined ? tags : "Otros"] }), _jsx(Text, { children: description }), _jsxs(Text, { fontWeight: 500, fontSize: 'lg', mt: 4, children: ["En stock: ", stock && stock > 1 ? "\u2705" : "\u274C"] }), stock && stock > 1 ? (_jsxs(Text, { fontWeight: 500, fontSize: 'lg', mt: 4, children: ["Disponibles: ", stock] })) : null, _jsx(Text, { fontWeight: 500, fontSize: 'md', mt: 4, children: "Garant\u00EDa de 30 d\u00EDas" })] }), _jsxs(Stack, { direction: ["row", "row", "column"], gap: 4, py: 4, alignItems: ["center", "center", "flex-start"], justifyContent: 'space-around', width: 'full', children: [_jsx(Text, { fontSize: ["xl", "xl", "2xl"], fontWeight: 600, border: '1px solid', borderColor: 'gray.200', py: 2, px: 4, borderRadius: 'lg', children: newPrice ? newPrice : "0" }), _jsx(Button, { onClick: addItemToCart, leftIcon: _jsx(FiShoppingCart, {}), colorScheme: 'purple', isDisabled: !stock, variant: stock && stock > 1 ? "solid" : "outline", size: ["md", "md", "lg"], children: "A\u00F1adir al carrito" })] })] })] }));
};
export default ProductView;
