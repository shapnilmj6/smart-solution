import React from 'react';
import apple from '../../../images/apple.png';
import samsung from '../../../images/samsung.png';
import oneplus from '../../../images/oneplus.webp';
import lenovo from '../../../images/lenovo.png';
import sony from '../../../images/sony.jpg';
import xiaomi from '../../../images/xiaomi-logo-1.png';
import './RepairingBrands.css';

const RepairingBrands = () => {
    const imageStyle={
        height:'100px',
        padding:'10px'
    }
    return (
        <section className="repairing-brands">
            <div className="container">
                <div className="section-header">
                    <h2 style={{ fontWeight: "600" }} className="text-center">CERTIFIED EXPERTS</h2>
                </div>
                <div className="d-flex row">
                    <div>
                        <h4 className="mt-5">We fix all the popular brands</h4>
                        <small className="text-secondary mt-2">Vivamus nibh dolor, posuere et consequat ut, posuere nec velit. Nullam non augue pretium, rutrum urna eu, viverra magna. Nullam accumsan arcu id auctor mattis. Vestibulum vitae bibendum nisl, a maximus massa. Vestibulum erat turpis, dapibus et diam nec, fringilla pellentesque nulla. Integer rutrum tristique nisi blandit volutpat. Proin rhoncus mauris in consequat vulputate. Etiam dictum mauris a sapien fermentum imperdiet. Suspendisse potenti. Aenean sagittis libero eu nibh varius imperdiet. Nunc tempus at mi eu convallis. Vestibulum suscipit congue nunc sed ultrices. Phasellus posuere, elit nec euismod fermentum, purus massa congue magna, nec consequat arcu nisi sit amet sapien.</small>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <img style={imageStyle} src={apple} alt="" />
                        <img style={imageStyle} src={samsung} alt="" />
                        <img style={imageStyle} src={lenovo} alt="" />
                        <img style={imageStyle} src={oneplus} alt="" />
                        <img style={imageStyle} src={sony} alt="" />
                        <img style={imageStyle} src={xiaomi} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RepairingBrands;