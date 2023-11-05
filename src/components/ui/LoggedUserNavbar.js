import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext } from "react";
import { Accordion, AccordionButton, AccordionIcon, Icon, AccordionItem, AccordionPanel, Avatar, Box, Button, CloseButton, Divider, Flex, HStack, IconButton, Image, Link, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text, useDisclosure, useMediaQuery, VStack, PopoverHeader, Badge } from "@chakra-ui/react";
import { FiBox, FiMenu, FiShoppingCart, FiUser, FiMessageSquare, FiMail, FiLogOut } from "react-icons/fi";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { UserContext, CartContext } from "@/context";
import { logOut } from "@/utils";
const links = [
    {
        id: 1,
        text: "Productos",
        route: '/products',
        icon: _jsx(FiBox, {}),
    },
    {
        id: 2,
        text: "Blog",
        route: '/blog',
        icon: _jsx(FiMessageSquare, {}),
    },
    {
        id: 3,
        text: "Contacto",
        route: '/contact',
        icon: _jsx(FiMail, {}),
    }
];
const LoggedUserNavbar = () => {
    const isInLogin = window.location.pathname;
    const { userInformation } = useContext(UserContext);
    const { cart } = useContext(CartContext);
    const [isLargerThan860] = useMediaQuery('(min-width: 860px)');
    const mobileNav = useDisclosure();
    const popover = useDisclosure();
    const navigate = useNavigate();
    const onRoute = (toRoute) => {
        mobileNav.onClose();
        popover.onClose();
        toRoute.includes('/user/profile') && navigate(`user/profile/${userInformation.uid}`);
        navigate(toRoute);
    };
    const onLogout = async () => await logOut();
    return (_jsx(_Fragment, { children: (isInLogin !== '/login' && isInLogin !== '/signup' && isInLogin !== '/checkout') &&
            _jsxs(Flex, { as: 'nav', alignItems: "center", justifyContent: "space-between", mx: "auto", bgColor: 'green.500', w: "full", px: { base: 2, sm: 4, }, py: 1, shadow: "md", children: [_jsx(Link, { to: "/", title: "Xochicalli Commerce - Inicio", as: RouterLink, children: _jsx(Image, { src: import.meta.env.VITE_ADMIN_LOGIN_IMAGE, alt: 'Navbar Image', objectFit: 'cover', fallbackSrc: 'https://via.placeholder.com/256', loading: 'lazy', width: '64px', borderRadius: 'lg' }) }), _jsxs(HStack, { display: "flex", alignItems: "center", spacing: 1, children: [_jsxs(HStack, { spacing: [1, 2, 2, 4, 6], mr: 1, color: "brand.500", display: ["none", "none", "inline-flex"], children: [links.map(({ id, text, route, icon }) => {
                                        return (!isLargerThan860
                                            ?
                                                _jsx(Button, { color: 'white', variant: 'ghost', _hover: { bg: 'gray.200', color: 'gray.800' }, onClick: () => onRoute(route), children: text }, id)
                                            :
                                                _jsx(Button, { leftIcon: icon, color: 'white', variant: 'ghost', _hover: { bg: 'gray.200', color: 'gray.800' }, onClick: () => onRoute(route), children: text }, id));
                                    }), !isLargerThan860
                                        ?
                                            _jsxs(_Fragment, { children: [_jsxs(Popover, { placement: "bottom-end", isLazy: true, children: [_jsx(PopoverTrigger, { children: _jsx(Avatar, { cursor: 'pointer', src: userInformation.profilePicture, name: `${userInformation.name} ${userInformation.fatherSurname}` }) }), _jsxs(PopoverContent, { children: [_jsx(PopoverArrow, {}), _jsx(PopoverCloseButton, {}), _jsxs(PopoverHeader, { noOfLines: 1, fontWeight: 700, fontSize: 18, children: [userInformation.name, " ", userInformation.fatherSurname, " ", userInformation.motherSurname] }), _jsx(PopoverBody, { width: 'xs', children: _jsxs(VStack, { alignItems: 'flex-start', p: 2, children: [_jsx(Button, { variant: 'link', colorScheme: 'black', onClick: () => onRoute(`/user/profile/${userInformation.uid}`), children: "Mi perfil" }), _jsx(Divider, { my: 2 }), _jsx(Button, { variant: 'link', colorScheme: 'black', onClick: () => onRoute(`/user/profile/${userInformation.uid}`), children: "Mis compras" }), _jsx(Divider, { my: 2 }), _jsx(Button, { leftIcon: _jsx(FiLogOut, {}), colorScheme: 'red', onClick: onLogout, children: "Cerrar sesi\u00F3n" })] }) })] })] }), _jsx(IconButton, { "aria-label": "Cart", color: 'white', variant: 'ghost', _hover: { bg: 'gray.200', color: 'gray.800' }, onClick: () => navigate('/cart'), icon: _jsxs(_Fragment, { children: [_jsx(FiShoppingCart, {}), cart.length > 0 && (_jsx(Badge, { colorScheme: "green", position: "absolute", right: "0", borderRadius: 'full', top: "0", w: 4, h: 4, children: cart.length }))] }) })] })
                                        :
                                            _jsxs(_Fragment, { children: [_jsxs(Popover, { placement: "bottom-end", isLazy: true, children: [_jsx(PopoverTrigger, { children: _jsx(Avatar, { cursor: 'pointer', src: userInformation.profilePicture, name: `${userInformation.name} ${userInformation.fatherSurname}` }) }), _jsxs(PopoverContent, { children: [_jsx(PopoverArrow, {}), _jsx(PopoverCloseButton, {}), _jsxs(PopoverHeader, { noOfLines: 1, fontWeight: 700, fontSize: 18, children: [userInformation.name, " ", userInformation.fatherSurname, " ", userInformation.motherSurname] }), _jsx(PopoverBody, { width: 'xs', children: _jsxs(VStack, { alignItems: 'flex-start', p: 2, children: [_jsx(Button, { variant: 'link', colorScheme: 'black', onClick: () => onRoute(`/user/profile/${userInformation.uid}`), children: "Mi perfil" }), _jsx(Divider, { my: 2 }), _jsx(Button, { variant: 'link', colorScheme: 'black', onClick: () => onRoute(`/user/profile/${userInformation.uid}`), children: "Mis compras" }), _jsx(Divider, { my: 2 }), _jsx(Button, { leftIcon: _jsx(FiLogOut, {}), colorScheme: 'red', onClick: onLogout, children: "Cerrar sesi\u00F3n" })] }) })] })] }), _jsx(IconButton, { "aria-label": "Cart", color: 'white', variant: 'ghost', _hover: { bg: 'gray.200', color: 'gray.800' }, onClick: () => navigate('/cart'), icon: _jsxs(_Fragment, { children: [_jsx(FiShoppingCart, {}), cart.length > 0 && (_jsx(Badge, { colorScheme: "green", position: "absolute", right: "2", borderRadius: 'full', top: "2", w: 2, h: 2 }))] }) })] })] }), _jsxs(Box, { display: ["inline-flex", "inline-flex", "none"], children: [_jsx(IconButton, { display: ["flex", "flex", "none"], "aria-label": "Open menu", fontSize: "20px", variant: 'ghost', color: 'white', _hover: { bgColor: 'whiteAlpha.400' }, icon: _jsx(FiMenu, {}), onClick: mobileNav.onOpen }), _jsxs(VStack, { pos: "absolute", zIndex: 99, top: 0, left: 0, right: 0, display: mobileNav.isOpen ? "flex" : "none", flexDirection: "column", alignItems: 'flex-end', p: 2, pb: 4, m: 2, bgColor: 'gray.200', spacing: 3, rounded: "sm", shadow: "sm", children: [_jsx(CloseButton, { "aria-label": "Close menu", size: 'lg', onClick: mobileNav.onClose }), links.map(({ id, text, route, icon }) => (_jsx(Button, { leftIcon: icon, variant: 'ghost', width: 'full', _hover: { bg: 'green.400', color: 'white' }, onClick: () => onRoute(route), children: text }, id))), _jsx(Accordion, { allowToggle: true, width: '100%', rounded: 'lg', children: _jsxs(AccordionItem, { children: [_jsx(AccordionButton, { rounded: 'lg', justifyContent: 'center', children: _jsxs(HStack, { children: [_jsx(Icon, { as: FiUser }), _jsx(Text, { fontWeight: 600, children: "Mi perfil" }), _jsx(AccordionIcon, {})] }) }), _jsx(AccordionPanel, { pb: 0, width: 'inherit', children: _jsxs(VStack, { alignItems: 'center', p: 2, children: [_jsx(Button, { variant: 'link', colorScheme: 'black', onClick: () => onRoute(`/user/profile/${userInformation.uid}`), children: "Mi perfil" }), _jsx(Divider, { my: 2 }), _jsx(Button, { variant: 'link', colorScheme: 'black', onClick: () => onRoute(`/user/profile/${userInformation.uid}`), children: "Mis compras" }), _jsx(Divider, { my: 2 }), _jsx(Button, { variant: 'link', colorScheme: 'red', onClick: onLogout, children: "Cerrar sesi\u00F3n" })] }) })] }) }), _jsx(Button, { leftIcon: _jsx(FiShoppingCart, {}), w: "full", colorScheme: 'green', onClick: () => onRoute('/cart'), children: "Ver carrito" })] })] })] })] }) }));
};
export default LoggedUserNavbar;
