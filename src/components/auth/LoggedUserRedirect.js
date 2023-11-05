import { jsx as _jsx } from "react/jsx-runtime";
import { lazy, useContext } from "react";
import { UserContext } from "@/context";
import { Navigate, useLocation } from "react-router-dom";
const Login = lazy(() => import('@/pages/auth/Login'));
const Register = lazy(() => import('@/pages/auth/Signup'));
const LoggedUserRedirect = () => {
    const { user, userRole } = useContext(UserContext);
    const { pathname } = useLocation();
    if (user && userRole) {
        if (userRole === 'user')
            return _jsx(Navigate, { to: `/user/profile/${user?.uid}`, replace: true });
        if (userRole === 'admin')
            return _jsx(Navigate, { to: '/admin/products', replace: true });
        if (userRole === 'moderator')
            return _jsx(Navigate, { to: '/moderator/', replace: true });
    }
    return pathname === '/signup' ? _jsx(Register, {}) : _jsx(Login, {});
};
export default LoggedUserRedirect;
