import React from 'react';

const Expert = ({expert}) => {
    const {name,img,expertize} = expert;
    return (
        <div className="col-md-6">
            <div className="card h-100">
            <img src={img} className="card-img-top" style={{height:'250px'}} alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{expertize}</p>
            </div>
            </div>
        </div>
    );
};

export default Expert;