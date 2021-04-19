import React from 'react';
import './HeaderMain.css';
import { useHistory } from "react-router-dom";

const HeaderMain = () => {
    const history = useHistory();
    const getInfo= () => history.push('/login');
    return (
        <div className="header row d-flex align-items-center">
            <div className="header-title col-md-4 offset-md-1">
                <h1>Repair Your Phone</h1>
                <h3>By The Smart Team</h3>
                <button onClick={getInfo} className="btn btn-danger">About Us</button>
            </div>
        </div>
    );
};

export default HeaderMain;