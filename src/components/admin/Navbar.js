import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { lazy } from "react";
import { Text, HStack, useMediaQuery, Heading, IconButton, Select, } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { logOut } from "@/utils";
const Sidebar = lazy(() => import("./Sidebar"));
const links = [
    {
        id: 1,
        text: "Usuarios",
        path: "/admin/user",
    },
    {
        id: 2,
        text: "Ventas",
        path: "/admin/dashboard",
    },
    {
        id: 3,
        text: "Backup",
        path: "/admin/backups",
    },
    {
        id: 4,
        text: "comentarios",
        path: "/admin/comentarios",
    },
    {
        id: 5,
        text: "Encuestas",
        path: "/admin/encuestas",
    },
];
const selectProducts = [
    {
        id: 1,
        text: "Agregar producto",
        path: "/admin/add",
    },
    {
        id: 2,
        text: "Productos",
        path: "/admin/products",
    },
];
const Navbar = ({ isUser }) => {
    const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
    const navigate = useNavigate();
    const onLogout = async () => {
        await logOut()
            .then(() => {
            navigate("/");
            window.location.reload();
        })
            .catch((err) => console.log(err));
    };
    const handleSelectChange = (e) => {
        const selectedProductId = parseInt(e.target.value);
        const selectedProduct = selectProducts.find((product) => product.id === selectedProductId);
        if (selectedProduct) {
            navigate(selectedProduct.path);
        }
    };
    return (_jsxs(HStack, { justifyContent: 'space-between', alignItems: 'center', bgColor: 'green.400', textAlign: 'center', h: '64px', px: [4, 8, 12], width: '100%', children: [_jsx(Heading, { color: 'white', fontSize: ["xl", "2xl"], children: "Panel de administrador" }), isLargerThan800 ? (_jsx(_Fragment, { children: _jsxs(HStack, { justifyContent: 'space-between', children: [_jsxs(HStack, { children: [links.map(({ path, id, text }) => (_jsx(NavLink, { style: ({ isActive }) => isActive
                                        ? {
                                            backgroundColor: "#fff",
                                            color: "#4A5568",
                                            padding: "4px",
                                            borderRadius: "4px",
                                            transition: "all 300ms ease",
                                        }
                                        : { color: "#fff", transition: "all 300ms ease" }, to: path, children: _jsx(Text, { fontWeight: 'semibold', mx: [1, 1, 1, 4, 8], children: text }) }, id))), _jsx(Select, { iconColor: '#fff', onChange: handleSelectChange, variant: 'unstyled', placeholder: 'opciones de productos', style: {
                                        color: "#fff",
                                        transition: "all 300ms ease",
                                        fontWeight: "600",
                                    }, children: selectProducts.map(({ path, id, text }) => (_jsx("option", { style: { color: "#000" }, value: id, children: text }, id))) })] }), isUser && (_jsx(IconButton, { "aria-label": 'logout', colorScheme: 'red', icon: _jsx(FiLogOut, {}), onClick: onLogout }))] }) })) : (_jsx(Sidebar, { isUser: isUser }))] }));
};
export default Navbar;
