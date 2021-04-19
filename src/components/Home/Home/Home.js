import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import RepairingBrands from '../RepairingBrands/RepairingBrands';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
        <Header></Header>
        <Services></Services>
        <Testimonials></Testimonials>
        <RepairingBrands></RepairingBrands>
        <Contact></Contact>
        <Footer></Footer>
        </div>
    );
};

export default Home;