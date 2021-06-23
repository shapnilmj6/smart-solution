import React, { useEffect } from 'react';
import AOS from "aos";
import './HeaderMain.css';
import logo from '../../../smartSolution.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const HeaderMain = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    return (
        <div className="header row d-flex align-items-center">
            <div data-aos={"zoom-in-down"} className="header-title col-md-4 offset-md-1">
                <img style={{ width: "100px", marginLeft: "20px" }} src={logo} alt="" />
                <h1>Repair Your Phone</h1>
                <h3>By The Smart Team</h3>
                <div className="btn btn-success">
                    <a href="#aboutUs" className="text-light text-decoration-none">About Us <FontAwesomeIcon icon={faArrowCircleRight} /></a></div>
            </div>
        </div>
    );
};

export default HeaderMain;