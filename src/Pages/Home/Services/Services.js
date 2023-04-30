import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [Services,setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='mb-5 pb-5' id='services'>
            <h2>This is Services</h2>
            <p>{Services.length}</p>
            <div className='service-container'>
            {
                Services.map(service => <Service key = {service.id} service={service}></Service> )
            }
        </div>
        </div>
    );
};

export default Services;