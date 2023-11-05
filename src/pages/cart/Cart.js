import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext, useId } from 'react';
import { Button, Card, CardBody, CardHeader, Center, Divider, Link, Text, VStack } from '@chakra-ui/react';
import { Link as RLink, useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';
import { CartContext } from '@/context/cart';
import { CartProduct } from '@/components/products';
const Cart = () => {
    const id = useId();
    const { cart, clearCart, total } = useContext(CartContext);
    const navigate = useNavigate();
    const onCheckout = () => navigate('/checkout');
    return (_jsxs(VStack, { minH: 'calc(100vh - 72px)', bgColor: 'gray.100', p: 4, children: [_jsx(Helmet, { children: _jsx("title", { children: "Carrito de compras" }) }), _jsxs(Card, { w: cart.length > 0 ? ['sm', 'md', '2xl', '2xl', '3xl'] : 'sm', my: 8, children: [_jsx(CardHeader, { textAlign: 'center', fontWeight: 700, fontSize: '3xl', children: "Carrito" }), cart.length > 0 && _jsx(Button, { colorScheme: 'red', onClick: clearCart, width: 'max-content', mr: 4, ml: 'auto', children: "Limpiar carrito" }), _jsxs(CardBody, { children: [cart.length < 1
                                ?
                                    _jsxs(Center, { flexDir: 'column', gap: 2, children: [_jsx(Text, { fontSize: 'lg', children: "\u00A1Tu carrito est\u00E1 vac\u00EDo!" }), _jsx(Link, { as: RLink, to: '/products', color: 'blue.500', fontWeight: 500, children: "Ver productos" })] })
                                :
                                    cart.map((item) => {
                                        return (_jsxs(_Fragment, { children: [_jsx(CartProduct, { id: item.id, image: item.image, price: item.price, title: item.title, category: item.category, subcategory: item?.subcategory ?? '', tags: item?.tags ?? '' }, id), _jsx(Divider, { my: 6 })] }));
                                    }), cart.length > 0 &&
                                _jsxs(Center, { flexDir: ['column', 'row'], alignItems: ['center', 'baseline'], gap: 4, w: 'full', justifyContent: 'space-between', children: [_jsxs(Text, { fontSize: ['xl', '2xl'], fontWeight: 700, textAlign: 'center', children: ["Tu total es de: $", total] }), _jsx(Button, { size: ['md', 'lg'], colorScheme: 'green', rightIcon: _jsx(FiArrowRight, {}), onClick: onCheckout, fontWeight: 500, children: "Checkout" })] })] })] })] }));
};
export default Cart;
