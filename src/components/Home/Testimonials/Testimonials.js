import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';
import { useEffect } from 'react';

const Testimonials = () => {

    const [testimonialData, setTestimonialData] = useState([]);

    useEffect(() => {
        fetch('https://smart-solution-server.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setTestimonialData(data))
    }, [])
    return (
        <div id="review" style={{ backgroundColor: 'rgba(38,18,147,.0784313725490196)', height: "600px" }} className="review-container d-flex row  align-items-center justify-content-center pl-3">
            <div className="text-center ">
                <h5 className="section-title">Testimonial</h5>
                <h3 className=" text-dark">Client opinions about us</h3>
            </div>
            {testimonialData.length < 1 ?
                <div className="d-flex py-5 my-5 justify-content-center">
                    <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div> :
                <div className="testimonial-container">
                    <Carousel
                        showArrows={true}
                        infiniteLoop={true}
                        showThumbs={false}
                        showStatus={false}
                        autoPlay={true}
                        interval={6100}>
                        {testimonialData?.map((testimonial, key) => (
                            <Testimonial key={key} testimonial={testimonial} />
                        ))}
                    </Carousel>
                </div>}
        </div>
    );
};

export default Testimonials;