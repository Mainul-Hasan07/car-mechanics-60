import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../../images/banner.avif'
import img1 from '../../../images/img-1.jpg'

const Banner = () => {
    return (
        <>
           <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100" style={{height:'500px'}}
                    src={banner}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100" style={{height:'500px'}}
                    src={img1}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 
        </>
    );
};

export default Banner;