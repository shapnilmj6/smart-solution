import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer-area ">
            <div className="d-flex col-sm-4 container pt-5">
                <div className="text-white mr-5">
                    <h1>Phone repair</h1>
                    <p>In nulla nibh, malesuada sit amet purus id, mollis auctor ex. In sit amet venenatis eros. Curabitur sed convallis mauris. Nam eget volutpat purus, ut egestas nulla. Nunc scelerisque eros vitae lacus dictum dictum. Donec luctus ligula lectus, eu auctor sem sollicitudin sit amet.</p>
                </div>
                <ul className="social-media list-inline">
                    <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                    <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                    <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                </ul>
                <div className="text-white">
                    <h6>Dhaka,Bangladesh</h6>
                    <br />
                    <h6>Call now</h6>
                    <br />
                    <button className="btn btn-info">+2025550295</button>
                </div>
            </div>
            <div className="text-center p-2 text-white">
                <p><small>Copyright {(new Date()).getFullYear()} All Rights Reserved</small></p>
            </div>
        </footer>

    );
};

export default Footer;