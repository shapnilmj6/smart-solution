import React from 'react';
import ClickedService from '../ClickedService/ClickedService';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Order = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ClickedService></ClickedService>
            <Footer></Footer>
        </div>
    );
};

export default Order;