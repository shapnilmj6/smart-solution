import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';

const Services = () => {
const [serviceData, setServiceData] = useState([]);

useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res=>res.json())
    .then(data=>setServiceData(data))
},[])


    return (
        <section id="service" style={{ backgroundColor: "#f8f9fa" }} className="services-container">
            <div className="text-center pt-5">
                <h2 style={{ fontWeight: '700px' }}>Our Services</h2>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                {serviceData.length < 1 ?

                    <div className="d-flex py-5 my-5 justify-content-center">
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> :
                    <div className="w-75 row mt-5">
                        {
                            serviceData.map(service => <ServicesCard service={service} key={service.id}></ServicesCard>)
                        }
                    </div>
                }
            </div>
        </section>
    );
};

export default Services;