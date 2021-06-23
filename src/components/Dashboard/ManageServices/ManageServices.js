import React, { useEffect, useState } from 'react';
import SideNavBar from '../SideNavBar/SideNavBar';
import MangesServiceDetails from '../MangesServiceDetails/MangesServiceDetails';

const ManageServices = () => {

    const [serviceList, setServiceList] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setServiceList(data))
    }, [])



    return (
        <div className="row">
            <SideNavBar></SideNavBar>
            <div className="col-md-9 mt-5 "> <h5 className="text-brand">All Services</h5>
                {
                    <MangesServiceDetails service={serviceList}></MangesServiceDetails>
                }
            </div>
        </div>
    );
};

export default ManageServices;