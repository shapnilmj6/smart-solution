import React from 'react';

const Testimonial = ({testimonial}) => {
    return (
        <div className="shadow-sm mt-5">
            <div>
                <h5 style={{color: '#003366'}}>{testimonial.company}</h5>
            </div>
            <div className="mt-2">"{testimonial.quote}"</div>
        </div>
    );
};

export default Testimonial;