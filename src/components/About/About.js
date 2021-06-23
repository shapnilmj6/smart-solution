import React from 'react';
import businessPic from '../../images/business.jpg';

const About = () => {
    return (
        <div id="aboutUs" className="row justify-content-center" style={{ backgroundColor: 'rgb(245, 247, 255)' }} >
            <h5 className="text-center">Message From Us</h5>
            <div className="col-md-6 d-flex p-5">
                <div>
                    <img style={{width:'500px', paddingRight:'40px'}}  src={businessPic} alt="" />
                </div>

                <div style={{margin:'90px', paddingLeft:'30px'}} className="col-md-6">
                    <p style={{ color: 'gray' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora alias repudiandae libero! Odio fuga deleniti iure dolore repudiandae illum tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, obcaecati!</p>
                </div>
            </div>
        </div>
    );
};

export default About;