import React from 'react';
import loginImg from '../../../images/man.png';
import './Testimonial.css';

const Testimonial = ({ testimonial }) => {
    return (
        <div className="card custom-card justify-content-center d-flex flex-column" >
            <div  >
                <img src={testimonial.img || loginImg} className="rounded-circle mt-3 border border-primary card-img-top  " alt="..."></img>
            </div>
            <div className="card-body pb-5">
                <p className="card-text m-0">{testimonial.name}</p>
                <p className="card-text m-0">{testimonial.profession}</p>

                <p className="card-text"><span className="text-success fs-2   ">”</span>{testimonial.description}<span className="text-success fs-2">“</span> </p>
            </div>
        </div>
    );
};

export default Testimonial;