import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Box, Center, CloseButton, Heading, HStack, Link, Stack, Text, VStack, } from "@chakra-ui/react";
import { Link as RLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ImageSlider from "react-simple-image-slider";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
const images = [
    {
        url: import.meta.env.VITE_BANNER1 ??
            "https://firebasestorage.googleapis.com/v0/b/xochicalli-commerce.appspot.com/o/assets%2Fbanner%2F1.jpg?alt=media&token=9565fa1c-4f3b-47f6-ad4e-083f8b17912b",
    },
    {
        url: import.meta.env.VITE_BANNER2 ??
            "https://firebasestorage.googleapis.com/v0/b/xochicalli-commerce.appspot.com/o/assets%2Fbanner%2F2.jpg?alt=media&token=1975fe17-f7a0-4025-9bf2-74f16926afca",
    },
    {
        url: import.meta.env.VITE_BANNER3 ??
            "https://firebasestorage.googleapis.com/v0/b/xochicalli-commerce.appspot.com/o/assets%2Fbanner%2F3.jpg?alt=media&token=0c78c39e-bbf6-449b-a667-dfaaae15af7d",
    },
    {
        url: import.meta.env.VITE_BANNER4 ??
            "https://firebasestorage.googleapis.com/v0/b/xochicalli-commerce.appspot.com/o/assets%2Fbanner%2F4.jpg?alt=media&token=70026552-bba7-42d9-8555-5b3d04efc48c",
    },
];
const Home = () => {
    const [closeBanner, setCloseBanner] = useState(true);
    return (_jsxs(Box, { overflowX: "hidden", children: [_jsx(Helmet, { children: _jsx("title", { children: "Xochicalli Commerce" }) }), _jsx(ImageSlider, { width: "100%", height: 512, style: { backgroundPosition: "center" }, autoPlay: true, images: images, slideDuration: 1, showBullets: true, showNavs: true }), _jsx(HStack, { justifyContent: "center", py: 28, px: [8, 0], bgGradient: "linear(to-b, white, gray.100)", children: _jsx(Center, { children: _jsxs(VStack, { children: [_jsx(Heading, { fontSize: [32, 48], children: "Xochicalli Commerce" }), _jsx(Text, { fontSize: [20, 24], py: 6, textAlign: "center", fontWeight: 600, children: "Planta tus sue\u00F1os y que florezcan tus objetivos" }), _jsx(Text, { fontSize: "18px", textAlign: "center", children: "En Xochicalli Commerce nos interesa proporcionar plantas, macetas, fertilizantes y todo tipo de herramientas que le permiten a tus plantas crecer de una forma m\u00E1s f\u00E1cil y eficaz" })] }) }) }), closeBanner && (_jsxs(Box, { bg: "green.500", color: "white", as: motion.div, initial: {
                    y: 100,
                    opacity: 0,
                }, animate: {
                    transition: {
                        duration: 1.05,
                        ease: "easeInOut",
                    },
                    y: 0,
                    opacity: 1,
                    filter: "blur",
                }, p: { base: "4", md: "3" }, py: { base: "3", md: "5" }, position: "fixed", bottom: 2, left: ["5%", "12.5%"], width: ["90vw", "75vw"], borderRadius: "xl", zIndex: 999, children: [_jsxs(Stack, { direction: { base: "column", md: "row" }, justify: "center", spacing: { base: "0.5", md: "1.5" }, pe: { base: "4", sm: "0" }, textAlign: "center", children: [_jsx(Text, { fontWeight: "medium", children: "Al usar nuestra tienda, est\u00E1s aceptando nuestras pol\u00EDticas de privacidad." }), _jsx(Text, { color: "on-accent-muted", children: _jsxs(Link, { display: "flex", alignItems: "center", gap: 1, as: RLink, to: "/privacy-policy", children: ["Ir a nuestras pol\u00EDticas de privacidad ", _jsx(FiExternalLink, {})] }) })] }), _jsx(CloseButton, { onClick: () => setCloseBanner(!closeBanner), position: "absolute", right: "2", top: { base: "2", md: "4" } })] }))] }));
};
export default Home;
