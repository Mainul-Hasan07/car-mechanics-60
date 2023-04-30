import React from 'react';
import mechanic1 from '../../../images/mechanic-1.jpg';
import mechanic2 from '../../../images/plumber-2.jpg'
import mechanic3 from '../../../images/mechanic-3.jpg';
import mechanic4 from '../../../images/mechanic-4.jpg';
import mechanic5 from '../../../images/mechanic-5.jpg';
import Expert from '../Expert/Expert';


const Experts = () => {
    const experts = [
        {
            img: mechanic1,
            name: 'karim',
            expertize: '-Engine Expert-'
        },
        {
            img: mechanic2,
            name: 'Rahim',
            expertize: '-Polish Expert-'
        },
        {
            img: mechanic3,
            name: 'Jobbar',
            expertize: '-Coloring Expert-'
        },
        {
            img: mechanic4,
            name: 'Shafiq',
            expertize: '-Alrounder Expert-'
        },
        {
            img: mechanic5,
            name: 'Kuddus',
            expertize: '-Assistant Expert-'
        },
    
    ]
    
    return (
        <div className='container' id='experts'>
            <h2>Our Experts</h2>
            <div className='row g-3 mt-3'>
                {
                    experts.map(expert=><Expert
                        key={expert.name}
                        expert={expert}></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;