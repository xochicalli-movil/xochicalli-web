import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import { AspectRatio, Button, Card, CloseButton, HStack, Image, Stack, Tag, Text } from '@chakra-ui/react';
import { CartContext } from '@/context/cart';
import { usePrice } from '@/hooks';
const CartProductCard = (product) => {
    const { addOneToCart, removeOneFromCart, getProductAmount, removeFromCart } = useContext(CartContext);
    const { newPrice } = usePrice(product.price);
    const amount = getProductAmount(product);
    return (_jsxs(Card, { direction: ['column', 'row'], bgColor: 'gray.50', h: ['md', '48'], children: [_jsx(AspectRatio, { ratio: 1, w: ['full', 256], h: ['64', 'full'], children: _jsx(Image, { loading: 'lazy', src: product.image, alt: product.title, w: ['full', '48'], h: '48', objectFit: 'cover', borderTopRadius: ['md', 'none'], borderLeftRadius: ['none', 'md'], style: {
                        borderTopLeftRadius: '8px'
                    } }) }), _jsxs(Stack, { w: 'full', p: 6, spacing: 3, children: [_jsxs(HStack, { alignItems: 'center', w: 'full', justifyContent: 'space-between', children: [_jsx(Text, { fontSize: 'xl', fontWeight: 600, children: product.title }), _jsx(CloseButton, { "aria-label": 'delete-icon', onClick: () => removeFromCart(product) })] }), _jsx(Tag, { my: 2, bgColor: 'gray.200', width: 'max-content', children: product.category }), _jsx(Text, { fontSize: ['xl', 'lg'], fontWeight: 'medium', children: newPrice }), _jsx(HStack, { my: 4, w: '100%', justifyContent: 'space-between', children: _jsxs(HStack, { spacing: [4, 6], children: [_jsx(Button, { onClick: () => removeOneFromCart(product), size: 'sm', children: "-" }), _jsx(Text, { children: amount }), _jsx(Button, { onClick: () => addOneToCart(product), size: 'sm', children: "+" })] }) })] })] }));
};
export default CartProductCard;
