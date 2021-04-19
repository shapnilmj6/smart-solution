import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer-area clear-both">
            <div className="col-sm-6 d-flex container pt-5">
                <div className="text-white">
                    <h1>Phone repair</h1>
                    <p>In nulla nibh, malesuada sit amet purus id, mollis auctor ex. In sit amet venenatis eros. Curabitur sed convallis mauris. Nam eget volutpat purus, ut egestas nulla. Nunc scelerisque eros vitae lacus dictum dictum. Donec luctus ligula lectus, eu auctor sem sollicitudin sit amet.</p>
                </div>
                <ul className="social-media list-inline">
                    <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                    <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                    <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                </ul>
                <div className="mt-5 text-white">
                    <h6>Call now</h6>
                    <button className="btn btn-info">+2025550295</button>
                </div>
            </div>
            <div className="copyRight text-center">
                <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </footer>

    );
};

export default Footer;