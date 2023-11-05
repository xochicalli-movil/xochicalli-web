import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { lazy } from "react";
import { Center, GridItem, Heading, Text, VStack, HStack, ButtonGroup, Button, } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { ProductCardSkeleton } from "@/components/skeleton";
import { useProducts } from "@/hooks";
const ProductCard = lazy(() => import("@/components/admin/ProductCard"));
const Products = () => {
    const { handleNextProd, handlePrevProd, loading, more, products } = useProducts();
    return (_jsxs(VStack, { h: 'calc(100vh - 64px)', bgColor: 'gray.200', gap: 4, children: [_jsx(Helmet, { children: _jsx("title", { children: "Productos" }) }), _jsx(Heading, { my: 8, children: "Productos" }), _jsx(Center, { children: loading ? (_jsx(ProductCardSkeleton, {})) : products.length !== 0 ? (_jsxs(VStack, { gap: 6, children: [_jsx(HStack, { wrap: 'wrap', gap: 6, justifyContent: 'center', children: products
                                .slice(more - 3, more)
                                .map(({ category, description, id, image, price, title, subcategory, tags, }) => {
                                return (_jsx(GridItem, { children: _jsx(ProductCard, { id: id, subcategory: subcategory, tags: tags, category: category, description: description, image: image, price: price, title: title }) }, id));
                            }) }), products.length >= 4 && (_jsxs(ButtonGroup, { mt: 8, children: [_jsx(Button, { onClick: handlePrevProd, colorScheme: 'blue', leftIcon: _jsx(FiArrowLeft, { size: '0.75em' }), children: "Anterior" }), _jsx(Button, { onClick: handleNextProd, colorScheme: 'green', rightIcon: _jsx(FiArrowRight, { size: '0.75em' }), children: "Siguiente" })] }))] })) : (_jsx(Text, { fontWeight: 'medium', children: "No hay productos \uD83D\uDE13" })) })] }));
};
export default Products;
