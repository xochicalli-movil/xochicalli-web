import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import { Button, ButtonGroup, Card, CardBody, Divider, Heading, HStack, Stack, Tag, Text, useMediaQuery, useToast } from '@chakra-ui/react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { UserContext, CartContext } from '@/context';
import { usePrice } from '@/hooks';
const ProductCard = (product) => {
    const uid = localStorage.getItem('uid');
    const { user } = useContext(UserContext);
    const { addToCart } = useContext(CartContext);
    const toast = useToast();
    const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
    const navigate = useNavigate();
    const { newPrice } = usePrice(product.price);
    const toProduct = () => navigate(`/products/${product.id}`);
    const addItemToCart = () => {
        if (!user || uid === '') {
            toast({
                status: 'info',
                duration: 1500,
                isClosable: false,
                title: 'Añadir al carrito',
                position: isLargerThan800 ? 'top-right' : 'bottom',
                description: 'Debes iniciar sesión para añadir productos al carrito',
            });
            navigate('/login');
        }
        else {
            product && addToCart(product);
            toast({
                status: 'success',
                duration: 1000,
                isClosable: false,
                title: 'Añadir al carrito',
                position: isLargerThan800 ? 'top' : 'bottom',
                description: '¡Producto añadido al carrito!',
            });
        }
    };
    return (_jsx(Card, { maxW: ['xs', 'sm'], h: '490px', borderRadius: 'xl', children: _jsxs(CardBody, { children: [_jsx(LazyLoadImage, { src: product.image, alt: `${product.title}-${product.id}`, effect: 'blur', style: {
                        borderRadius: '8px',
                        objectFit: 'cover',
                        height: '256px',
                        width: '512px',
                    } }), _jsxs(Stack, { spacing: '3', my: '3', children: [_jsxs(HStack, { alignItems: 'center', justifyContent: 'space-between', children: [_jsx(Heading, { noOfLines: 1, size: ['lg', 'md', 'lg'], children: product.title }), _jsx(Text, { fontSize: ['xl', 'xl', '2xl'], fontWeight: 'medium', children: newPrice })] }), _jsx(Tag, { width: 'max-content', children: product.category }), _jsx(Text, { noOfLines: 1, children: product.description })] }), _jsx(Divider, { my: 2 }), _jsxs(ButtonGroup, { mt: '3', justifyContent: 'space-between', width: '100%', children: [_jsx(Button, { variant: 'link', colorScheme: 'blue', fontSize: 16, onClick: toProduct, children: "Ver m\u00E1s" }), _jsx(Button, { onClick: addItemToCart, leftIcon: _jsx(FiShoppingCart, {}), colorScheme: 'purple', isDisabled: !product?.stock, children: "A\u00F1adir al carrito" })] })] }) }));
};
export default ProductCard;
