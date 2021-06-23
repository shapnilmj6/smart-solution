import React from 'react';
import Review from '../Review/Review';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import RepairingBrands from '../RepairingBrands/RepairingBrands';
import Services from '../Services/Services';
import About from '../../About/About';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
        <Header></Header>
        <Services></Services>
        <About></About>
        <RepairingBrands></RepairingBrands>
        <Testimonials></Testimonials>
        <Review></Review>
        <Footer></Footer>
        </div>
    );
};

export default Home;