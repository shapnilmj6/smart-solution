import React from 'react';
import { useHistory } from "react-router-dom";

const ServicesCard = ({service}) => {
    const history = useHistory();
    const getServices= () => history.push('/order');
    return (
        <div className="col-md-4 pt-5">
            <img style={{height:'200px'}} src={service.img} alt=""/>
            <h5 className="mt-3 ,ms-3">{service.name}</h5>
            <small>${service.cost}</small>
            <p className="text-secondary">{service.description}</p>
            <button onClick={getServices} className="btn btn-info">Get Service</button>
        </div>
    );
};

export default ServicesCard;