import React from 'react';
import apple from '../../../images/apple.png';
import samsung from '../../../images/samsung.png';
import oneplus from '../../../images/oneplus.webp';
import lenovo from '../../../images/lenovo.png';
import sony from '../../../images/sony.jpg';
import xiaomi from '../../../images/xiaomi-logo-1.png';
import './RepairingBrands.css';

const RepairingBrands = () => {
    return (
        <section className="my-5 py-5 repairing-brands">
            <div className="container">
                <div className="section-header">
                    <h2 style={{ fontWeight: "700" }} className="text-center text-uppercase">CERTIFIED EXPERTS</h2>
                </div>
                <div className="col-md-6 mt-5 d-flex">
                    <div>
                        <h4 mt-5>We fix it all the popular brands</h4>
                        <small className="text-secondary mt-2">Vivamus nibh dolor, posuere et consequat ut, posuere nec velit. Nullam non augue pretium, rutrum urna eu, viverra magna. Nullam accumsan arcu id auctor mattis. Vestibulum vitae bibendum nisl, a maximus massa. Vestibulum erat turpis, dapibus et diam nec, fringilla pellentesque nulla. Integer rutrum tristique nisi blandit volutpat. Proin rhoncus mauris in consequat vulputate. Etiam dictum mauris a sapien fermentum imperdiet. Suspendisse potenti. Aenean sagittis libero eu nibh varius imperdiet. Nunc tempus at mi eu convallis. Vestibulum suscipit congue nunc sed ultrices. Phasellus posuere, elit nec euismod fermentum, purus massa congue magna, nec consequat arcu nisi sit amet sapien.</small>
                    </div>
                    <div className="p-5 d-flex col-md-4">
                        <img style={{ height: '100px' }} src={apple} alt="" />
                        <img style={{ height: '100px' }} src={samsung} alt="" />
                        <img style={{ height: '100px' }} src={lenovo} alt="" />
                        <img style={{ height: '100px' }} src={oneplus} alt="" />
                        <img style={{ height: '100px' }} src={sony} alt="" />
                        <img style={{ height: '100px' }} src={xiaomi} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RepairingBrands;