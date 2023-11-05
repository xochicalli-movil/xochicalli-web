import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { lazy, useContext } from "react";
import { Routes, Route, Outlet, useLocation, Navigate } from "react-router-dom";
import { CartContext, UserContext } from "@/context";
import { PrivateRoute } from "@/components/auth";
import { Navbar } from "@/components";
import { Box } from "@chakra-ui/react";
// Lazy load components
const AdminNavbar = lazy(() => import("@/components/admin/Navbar"));
const LoggedUserRedirect = lazy(() => import("@/components/auth/LoggedUserRedirect"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));
const LoggedUserNavbar = lazy(() => import("@/components/ui/LoggedUserNavbar"));
const ModNavbar = lazy(() => import("@/components/ui/ModNavbar"));
const Footer = lazy(() => import("@/components/Footer"));
// Public routes
const Home = lazy(() => import("@/pages/home/Home"));
const Products = lazy(() => import("@/pages/products/Products"));
const Product = lazy(() => import("@/pages/products/Product"));
const Cart = lazy(() => import("@/pages/cart/Cart"));
const Contact = lazy(() => import("@/pages/contact/Contact"));
const PrivacyPolicy = lazy(() => import("@/pages/privacyPolicy/PrivacyPolicy"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Checkout = lazy(() => import("@/pages/checkout/Checkout"));
const Faqs = lazy(() => import("@/pages/faqs/index"));
const Questions = lazy(() => import("@/pages/questions/index"));
// Normal user routes
const UserProfile = lazy(() => import("@/pages/user/UserProfile"));
const UserInformation = lazy(() => import("@/pages/user/UserInformation"));
const Security = lazy(() => import("@/pages/user/security/Security"));
const Addresses = lazy(() => import("@/pages/user/address/Addresses"));
// Admin routes
const AddProduct = lazy(() => import("@/pages/admin/addProduct/AddProduct"));
const Dashboard = lazy(() => import("@/pages/admin/dashboard/Dashboard"));
const AdminProducts = lazy(() => import("@/pages/admin/products/Products"));
const Users = lazy(() => import("@/pages/admin/users/Users"));
const Backups = lazy(() => import("@/pages/admin/backups/Backups"));
const Encuestas = lazy(() => import("@/pages/admin/encuestas/Encuestas"));
const Comentarios = lazy(() => import("@/pages/admin/comentarios/page"));
const NavbarRenderer = () => {
    const { user, userRole } = useContext(UserContext);
    if (user) {
        if (userRole === "admin")
            return _jsx(AdminNavbar, { isUser: user });
        if (userRole === "user")
            return _jsx(LoggedUserNavbar, {});
        if (userRole === "moderator")
            return _jsx(ModNavbar, {});
    }
    return _jsx(Navbar, {});
};
export const App = () => {
    const { cart } = useContext(CartContext);
    const { pathname } = useLocation();
    return (_jsxs(_Fragment, { children: [_jsx(NavbarRenderer, {}), _jsx(Box, { id: "router", children: _jsxs(Routes, { children: [_jsx(Route, { index: true, element: _jsx(Home, {}) }), _jsx(Route, { path: "/products", element: _jsx(Products, {}) }), _jsx(Route, { path: "/products/:id", element: _jsx(Product, {}) }), _jsx(Route, { path: "/cart", element: _jsx(Cart, {}) }), _jsx(Route, { path: "/checkout", element: cart.length < 1 ? _jsx(Navigate, { to: "/cart" }) : _jsx(Checkout, {}) }), _jsx(Route, { path: "/faqs", element: _jsx(Faqs, {}) }), _jsx(Route, { path: "/questions", element: _jsx(Questions, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "/privacy-policy", element: _jsx(PrivacyPolicy, {}) }), _jsx(Route, { path: "/login", element: _jsx(LoggedUserRedirect, {}) }), _jsx(Route, { path: "/signup", element: _jsx(LoggedUserRedirect, {}) }), _jsxs(Route, { path: "/user/profile", element: _jsx(PrivateRoute, { allowedRoles: "user", children: _jsx(Outlet, {}) }), children: [_jsx(Route, { path: ":uid", element: _jsxs(PrivateRoute, { allowedRoles: "user", children: [_jsx(UserProfile, {}), _jsx(Outlet, {})] }) }), _jsx(Route, { path: ":uid/information", element: _jsx(UserInformation, {}) }), _jsx(Route, { path: ":uid/security", element: _jsx(Security, {}) }), _jsx(Route, { path: ":uid/purchases", element: _jsx(UserInformation, {}) }), _jsx(Route, { path: ":uid/payments", element: _jsx(UserInformation, {}) }), _jsx(Route, { path: ":uid/addresses", element: _jsx(Addresses, {}) })] }), _jsxs(Route, { path: "/admin", element: _jsx(PrivateRoute, { allowedRoles: "admin", children: _jsx(Outlet, {}) }), children: [_jsx(Route, { path: "backups", element: _jsx(PrivateRoute, { allowedRoles: "admin", children: _jsx(Backups, {}) }) }), _jsx(Route, { path: "encuestas", element: _jsx(PrivateRoute, { allowedRoles: "admin", children: _jsx(Encuestas, {}) }) }), _jsx(Route, { path: "comentarios", element: _jsx(PrivateRoute, { allowedRoles: "admin", children: _jsx(Comentarios, {}) }) }), _jsx(Route, { path: "add", element: _jsx(PrivateRoute, { allowedRoles: "admin", children: _jsx(AddProduct, {}) }) }), _jsx(Route, { path: "dashboard", element: _jsx(PrivateRoute, { allowedRoles: "admin", children: _jsx(Dashboard, {}) }) }), _jsx(Route, { path: "products", element: _jsx(PrivateRoute, { allowedRoles: "admin", children: _jsx(AdminProducts, {}) }) }), _jsx(Route, { path: "products/:id", element: _jsx(PrivateRoute, { allowedRoles: "admin", children: _jsx(AdminProducts, {}) }) }), _jsx(Route, { path: "user", element: _jsx(PrivateRoute, { allowedRoles: "admin", children: _jsx(Users, {}) }) }), _jsx(Route, { path: "/admin/", element: _jsx(NotFound, {}) })] }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }) }), pathname !== "/checkout" && _jsx(WhatsAppButton, {}), pathname !== "/login" &&
                pathname !== "/signup" &&
                pathname !== "/checkout" && _jsx(Footer, {})] }));
};
