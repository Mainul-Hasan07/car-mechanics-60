import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const {id,name,img,price,time} = service;
    return (
        <div style={{border:'2px solid aqua',borderRadius:'5px',textAlign:'center',height:'100%',width:'250px'}}>
            <img style={{height:'250px',width:'250px',borderRadius:'5px 5px 0 0'}} src={img} alt="" />
            <h3 style={{textAlign:'center'}}>{name}</h3>
            <p>Price : {price}</p>
            <p>Time : {time} min</p>
            <Link to={`/booking/${id}`}>
                <button type='btn' className='mb-3 btn btn-warning'>Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;