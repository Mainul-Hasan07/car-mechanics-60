import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user,isLoading} = useAuth();
    const location = useLocation();
    if(isLoading){
        return <Spinner animation="border" variant="danger" />
    }
    if(user.email){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace={true}></Navigate>
};

export default PrivateRoute;