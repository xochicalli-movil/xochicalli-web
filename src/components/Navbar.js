import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, CloseButton, Flex, HStack, IconButton, Image, Link, useDisclosure, useMediaQuery, VStack, } from "@chakra-ui/react";
import { FiBox, FiMenu, FiShoppingCart, FiUser, FiMessageSquare, FiMail, } from "react-icons/fi";
import { Link as RouterLink, useNavigate } from "react-router-dom";
const links = [
    {
        id: 1,
        text: "Productos",
        route: "/products",
        icon: _jsx(FiBox, {}),
    },
    {
        id: 2,
        text: "Blog",
        route: "/blog",
        icon: _jsx(FiMessageSquare, {}),
    },
    {
        id: 3,
        text: "Contacto",
        route: "/contact",
        icon: _jsx(FiMail, {}),
    },
];
export const Navbar = () => {
    const isInLogin = window.location.pathname;
    const [isLargerThan860] = useMediaQuery("(min-width: 860px)");
    const mobileNav = useDisclosure();
    const navigate = useNavigate();
    const onRoute = (toRoute) => {
        mobileNav.onClose();
        navigate(toRoute);
    };
    return (_jsx(_Fragment, { children: isInLogin !== "/login" && isInLogin !== "/signup" && (_jsxs(Flex, { as: "nav", alignItems: "center", justifyContent: "space-between", mx: "auto", bgColor: "green.500", w: "full", px: { base: 2, sm: 4 }, py: 1, shadow: "md", children: [_jsx(Link, { to: "/", title: "Xochicalli Commerce - Inicio", as: RouterLink, children: _jsx(Image, { src: import.meta.env.VITE_ADMIN_LOGIN_IMAGE ??
                            "https://firebasestorage.googleapis.com/v0/b/xochicalli-commerce.appspot.com/o/assets%2Flogo.png?alt=media&token=b5a9e3c5-d9f1-469c-9c9d-9af0c5f1cfd9", alt: "Navbar Image", objectFit: "cover", fallbackSrc: "https://via.placeholder.com/256", loading: "lazy", width: "64px", borderRadius: "lg" }) }), _jsxs(HStack, { display: "flex", alignItems: "center", spacing: 1, children: [_jsxs(HStack, { spacing: [1, 1, 1, 2, 4], mr: 1, color: "brand.500", display: ["none", "none", "inline-flex"], children: [links.map(({ id, text, route, icon }) => {
                                    return !isLargerThan860 ? (_jsx(Button, { color: "white", variant: "ghost", _hover: { bg: "gray.200", color: "gray.800" }, onClick: () => onRoute(route), children: text }, id)) : (_jsx(Button, { leftIcon: icon, color: "white", variant: "ghost", _hover: { bg: "gray.200", color: "gray.800" }, onClick: () => onRoute(route), children: text }, id));
                                }), !isLargerThan860 ? (_jsxs(_Fragment, { children: [_jsx(Button, { color: "white", variant: "ghost", _hover: { bg: "gray.200", color: "gray.800" }, onClick: () => navigate("/login"), children: "Iniciar sesi\u00F3n" }), _jsx(Button, { color: "white", variant: "ghost", _hover: { bg: "gray.200", color: "gray.800" }, onClick: () => navigate("/cart"), children: "Carrito" })] })) : (_jsxs(_Fragment, { children: [_jsx(Button, { leftIcon: _jsx(FiUser, {}), color: "white", variant: "ghost", _hover: { bg: "gray.200", color: "gray.800" }, onClick: () => navigate("/login"), children: "Iniciar sesi\u00F3n" }), _jsx(IconButton, { "aria-label": "cart", icon: _jsx(FiShoppingCart, {}), color: "white", variant: "ghost", _hover: { bg: "gray.200", color: "gray.800" }, onClick: () => navigate("/cart"), children: "Carrito" })] }))] }), _jsxs(Box, { display: ["inline-flex", "inline-flex", "none"], children: [_jsx(IconButton, { display: ["flex", "flex", "none"], "aria-label": "Open menu", fontSize: "20px", variant: "ghost", color: "white", _hover: { bgColor: "whiteAlpha.400" }, icon: _jsx(FiMenu, {}), onClick: mobileNav.onOpen }), _jsxs(VStack, { pos: "absolute", zIndex: 99, top: 0, left: 0, right: 0, display: mobileNav.isOpen ? "flex" : "none", flexDirection: "column", alignItems: "flex-end", p: 2, pb: 4, m: 2, bgColor: "gray.200", spacing: 3, rounded: "sm", shadow: "sm", children: [_jsx(CloseButton, { "aria-label": "Close menu", size: "lg", onClick: mobileNav.onClose }), links.map(({ id, text, route, icon }) => (_jsx(Button, { leftIcon: icon, variant: "ghost", width: "full", _hover: { bg: "green.400", color: "white" }, onClick: () => onRoute(route), children: text }, id))), _jsx(Button, { leftIcon: _jsx(FiUser, {}), w: "full", colorScheme: "blue", onClick: () => onRoute("/login"), children: "Iniciar sesi\u00F3n" }), _jsx(Button, { leftIcon: _jsx(FiShoppingCart, {}), w: "full", colorScheme: "green", onClick: () => onRoute("/cart"), children: "Ver carrito" })] })] })] })] })) }));
};
