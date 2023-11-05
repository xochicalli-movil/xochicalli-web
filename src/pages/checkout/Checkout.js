import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Flex, Stack, useColorModeValue } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";
import { OrderSummary, ShippingInformation } from "@/components/checkout";
const Checkout = () => {
    return (_jsxs(_Fragment, { children: [_jsx(Helmet, { children: _jsx("title", { children: "Checkout" }) }), _jsx(Box, { bgGradient: useColorModeValue("linear(to-l, gray.50 50%, white 50%)", "linear(to-l, gray.700 50%, gray.800 50%)"), minH: "100vh", children: _jsxs(Flex, { maxW: "8xl", mx: "auto", direction: { base: "column", md: "row" }, children: [_jsx(Box, { flex: "1", bg: useColorModeValue("white", "gray.800"), px: { base: "4", md: "8", lg: "12", xl: "20" }, py: { base: "6", md: "8", lg: "12", xl: "20" }, h: "100vh", children: _jsx(Stack, { spacing: { base: "16", lg: "8" }, children: _jsx(ShippingInformation, {}) }) }), _jsx(Box, { flex: "1", maxW: { lg: "md", xl: "40rem" }, bg: "gray.50", px: { base: "4", md: "8", lg: "12", xl: "20" }, py: { base: "6", md: "8", lg: "12", xl: "20" }, children: _jsx(OrderSummary, {}) })] }) })] }));
};
export default Checkout;
