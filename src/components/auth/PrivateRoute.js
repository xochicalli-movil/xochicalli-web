import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '@/context';
export const PrivateRoute = ({ children }) => {
    const { user } = useContext(UserContext);
    const uid = localStorage.getItem('uid') || '';
    if (!user && uid === '')
        return _jsx(Navigate, { to: '/login' });
    return _jsx(_Fragment, { children: children });
};
