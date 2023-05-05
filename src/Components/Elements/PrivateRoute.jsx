/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const location = useLocation()

    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return 
    }

    if (user) {
        return children
    }
    return (
        <Navigate to="/login" state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRoute;