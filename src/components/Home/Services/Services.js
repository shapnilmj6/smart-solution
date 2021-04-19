import React from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';
import wifi from '../../../images/phone network.jpg';
import display from '../../../images/broken phone.jpg';
import speed from '../../../images/speed.jpg';
import battery from '../../../images/battery.jpg';
import virus from '../../../images/phone virus.jpg';
import sound from '../../../images/sound system.jpg';



const Services = () => {

    const serviceData = [
        {
            id: 1,
            img: wifi,
            name: 'Wifi problems',
            cost: 50,
            description: 'Network related problems that you face.'
        },
        {
            id: 2,
            img: display,
            name: 'Display problems',
            cost: 120,
            description: 'Display related problems you face.'
        },
        {
            id: 3,
            img: speed,
            name: 'Speed problems',
            cost: 35,
            description: 'Phone speed related problems that you face.'
        },
        {
            id: 4,
            img: battery,
            name: 'Battery problems',
            cost: 100,
            description: 'Charging related and battery issues that you face.'
        },
        {
            id: 5,
            img: virus,
            name: 'Virus problems',
            cost: 80,
            description: 'Virus and threat related problems that you face.'
        },
        {
            id: 6,
            img: sound,
            name: 'Sound problems',
            cost: 70,
            description: 'Speaker and sound related problems that you face.'
        }
    ]
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h2 style={{ fontWeight: "700" }}>Our Services</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row">
                    {
                        serviceData.map(service => <ServicesCard service={service} key={service.id}></ServicesCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;