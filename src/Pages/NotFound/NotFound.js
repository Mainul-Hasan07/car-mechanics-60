import React from 'react';
import NotFoundimg from '../../images/404.jpg'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center'>
            <Link to='/'>
            <img style={{width:'100%',height:'100vh'}} src={NotFoundimg} alt="" />
            </Link>
        </div>
    );
};

export default NotFound;