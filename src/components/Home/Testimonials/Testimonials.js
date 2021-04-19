import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const testimonialData = [
    {
        quote: 'Curabitur id justo nisi. In hac habitasse platea dictumst. Aenean a tempus diam. Donec accumsan feugiat nisl sit amet tempus. Suspendisse molestie sit amet augue eget auctor. Donec ac tortor ipsum. Integer luctus mauris nibh, id efficitur enim venenatis in. Sed et quam leo. Sed bibendum metus.',
        company: 'QUARTER INC.'
    },
    {
        quote: 'Sed rutrum orci et neque condimentum, eu aliquam felis efficitur. Aenean sed iaculis dui. Donec eu orci leo. Quisque eget pretium nisl. Ut molestie nibh leo, ut ultricies lectus eleifend eget. Vivamus tempus ligula at lacus cursus, quis congue purus elementum. In elementum enim eu ante egestas auctor.',
        company: 'TITANIUM COMPANY'
    },
    {
        quote: 'Nulla gravida nunc ac mattis efficitur. Aliquam efficitur efficitur lacus a tempor. Nulla quis vehicula neque. Integer rutrum, mauris quis elementum interdum, nibh dolor pharetra dui, eget pulvinar elit dolor vel lectus. Suspendisse non justo pharetra enim varius cursus id dictum turpis. ',
        company: 'King'
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h3 style={{fontWeight: "700"}} className="text-center text-uppercase">Testimonial</h3>
                </div>
                <div className="mt-5">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.company}></Testimonial>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;