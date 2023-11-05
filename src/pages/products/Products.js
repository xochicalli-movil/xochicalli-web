import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { lazy, Suspense } from "react";
import { Center, Spinner, Heading, Text, VStack, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Input, InputGroup, InputLeftAddon, InputRightAddon, GridItem, Grid, CheckboxGroup, Select, Flex, Checkbox, } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FiSearch, FiX } from "react-icons/fi";
import { Helmet } from "react-helmet-async";
import { useFilter, useProducts } from "@/hooks";
import { Spinner as LazySpinner } from "@/components/loading";
const ProductCard = lazy(() => import("@/components/products/ProductCard"));
const Products = () => {
    const { loading, products } = useProducts();
    const { searchInput, sortedProducts, handleCategoryChange, onClearInput, onSearchInputChange, handleSortChange, } = useFilter();
    return (_jsxs(VStack, { minH: 'calc(100vh - 64px)', bgColor: 'gray.100', p: 4, children: [_jsx(Helmet, { children: _jsx("title", { children: "Productos" }) }), _jsx(Heading, { mt: 4, children: "Productos" }), _jsxs(Breadcrumb, { py: 2, children: [_jsx(BreadcrumbItem, { children: _jsx(BreadcrumbLink, { as: Link, to: '/', children: "Inicio" }) }), _jsx(BreadcrumbItem, { children: _jsx(BreadcrumbLink, { as: Link, to: '/products', isCurrentPage: true, children: "Productos" }) })] }), _jsx(Center, { pt: 4, pb: 8, children: loading ? (_jsx(Spinner, { size: 'xl', mt: 4 })) : products.length !== 0 ? (_jsxs(VStack, { gap: 6, children: [_jsxs(VStack, { width: ["xs", "md"], gap: 2, children: [_jsxs(InputGroup, { width: ["xs", "sm"], children: [_jsx(InputLeftAddon, { bgColor: 'gray.200', children: _jsx(FiSearch, {}) }), _jsx(Input, { ref: searchInput, type: 'text', onChange: onSearchInputChange, bgColor: 'white', placeholder: 'Planta...' }), _jsx(InputRightAddon, { cursor: 'pointer', bgColor: 'gray.200', onClick: onClearInput, children: _jsx(FiX, {}) })] }), _jsx(CheckboxGroup, { colorScheme: 'green', onChange: handleCategoryChange, children: _jsxs(Flex, { pl: [8, 8, 0], direction: ["column", "column", "row"], gap: 4, justifyContent: ["flex-start", "flex-start", "center"], w: '100%', children: [_jsx(Checkbox, { value: 'Macetas', children: "Macetas" }), _jsx(Checkbox, { value: 'Abonos', children: "Abonos" }), _jsx(Checkbox, { value: 'Plantas', children: "Plantas" }), _jsx(Checkbox, { value: 'Fertilizantes', children: "Fertilizantes" }), _jsx(Checkbox, { value: 'Herramientas', children: "Herramientas" })] }) }), _jsxs(Select, { bgColor: 'gray.200', placeholder: 'Ordenar por', w: '100%', onChange: handleSortChange, children: [_jsx("option", { value: 'desc', children: "Precio (Mayor a menor)" }), _jsx("option", { value: 'asc', children: "Precio (Menor a mayor)" }), _jsx("option", { value: 'title', children: "Nombre" }), _jsx("option", { value: 'category', children: "Categor\u00EDa" })] })] }), _jsx(Grid, { height: '100%', templateColumns: [
                                "repeat(1, 1fr)",
                                "repeat(1, 1fr)",
                                "repeat(2, 1fr)",
                                "repeat(2, 1fr)",
                                "repeat(3, 1fr)",
                            ], templateRows: 'repeat(4, 1fr)', gap: 6, children: sortedProducts &&
                                sortedProducts.map(({ category, description, id, image, price, title, stock, subcategory, tags, }) => {
                                    return (_jsx(Suspense, { fallback: _jsx(LazySpinner, {}), children: _jsx(GridItem, { children: _jsx(ProductCard, { id: id, tags: tags, subcategory: subcategory, category: category, description: description, image: image, price: price, title: title, stock: stock }) }) }, id));
                                }) })] })) : (_jsx(Text, { fontWeight: 'medium', children: "No hay productos \uD83D\uDE13" })) })] }));
};
export default Products;
