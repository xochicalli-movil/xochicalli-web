import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import { AspectRatio, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CartContext } from '@/context/cart';
import { usePrice } from '@/hooks';
const CheckoutProduct = (product) => {
    const { getProductAmount } = useContext(CartContext);
    const { newPrice } = usePrice(product.price);
    const amount = getProductAmount(product);
    return (_jsxs(Flex, { justify: "space-between", children: [_jsxs(Stack, { direction: "row", spacing: "5", children: [_jsx(AspectRatio, { ratio: 1, width: "92px", children: _jsx(LazyLoadImage, { src: product.image, alt: product.title, style: { borderRadius: 12 } }) }), _jsxs(Stack, { spacing: "3", children: [_jsx(Text, { fontWeight: "semibold", children: product.title }), _jsx(HStack, { my: 4, w: '100%', justifyContent: 'space-between', children: _jsxs(Text, { children: ["Cantidad: ", amount] }) })] })] }), _jsx(Text, { fontWeight: "medium", children: newPrice })] }, product.id));
};
export default CheckoutProduct;
