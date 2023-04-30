import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    console.log(from)
    const navigate = useNavigate();


    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={()=>signInUsingGoogle(navigate,from)} className='btn btn-warning'>Google Sign In</button>
        </div>
    );
};

export default Login;