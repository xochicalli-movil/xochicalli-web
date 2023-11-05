import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext, useId } from 'react';
import { Divider, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { CheckoutProduct } from '@/components/products';
import { CartContext } from '@/context';
const OrderSummary = () => {
    const id = useId();
    const { cart, total } = useContext(CartContext);
    return (_jsxs(Stack, { spacing: { base: '6', md: '10' }, children: [_jsx(Heading, { size: "lg", children: "Resumen de la compra" }), _jsxs(Stack, { spacing: "8", children: [_jsxs(Stack, { spacing: "6", children: [cart.length < 1 && _jsx(Text, { fontSize: 'md', fontWeight: 'semibold', children: "No hay productos en tu carrito" }), cart.map((product) => (_jsxs(_Fragment, { children: [_jsx(CheckoutProduct, { id: product.id, image: product.image, price: product.price, title: product.title, category: product.category, subcategory: product.subcategory, tags: product.tags }, id), _jsx(Divider, {})] })))] }), _jsxs(Stack, { spacing: "6", children: [_jsxs(Stack, { spacing: "3", children: [_jsxs(Stack, { direction: "row", justify: "space-between", children: [_jsx(Text, { color: 'gray.600', children: "Subtotal" }), _jsxs(Text, { color: 'black', children: ["$", total] })] }), _jsxs(Stack, { direction: "row", justify: "space-between", children: [_jsx(Text, { color: 'gray.600', children: "Costo de envio" }), _jsx(Text, { color: 'black', children: cart.length >= 1 ? `Gratis` : `Necesitas un producto` })] })] }), _jsx(Divider, {}), _jsxs(Stack, { direction: "row", justify: "space-between", children: [_jsx(Text, { fontSize: "lg", fontWeight: "semibold", color: useColorModeValue('gray.700', 'gray.200'), children: "Total de tu pedido" }), _jsxs(Text, { fontSize: "xl", fontWeight: "semibold", color: useColorModeValue('black', 'white'), children: ["$", total] })] })] })] })] }));
};
export default OrderSummary;
