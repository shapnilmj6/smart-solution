import React, { useContext, useEffect, useState } from 'react';
import { useSpring, animated as a } from 'react-spring'
import AOS from "aos";
import { Link } from 'react-router-dom';
import './ServiceCard.css';
import { UserOrder } from '../../../App';

const ServicesCard = ({ service }) => {
    const [order, setOrder] = useContext(UserOrder);

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    const [flipped, set] = useState(false);

    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })

    return (
        <div className="col-md-4 col-sm-6">

            <div style={{ paddingBottom: "80px" }}>
                <div data-aos={"zoom-in-down"}
                    onMouseEnter={() => set(state => !state)}
                    onMouseLeave={() => set(state => !state)}
                >
                    {
                        !flipped ? <a.div className="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} >
                            <div style={{ backgroundColor: "rgb(96, 71, 236)", borderRadius: "10px", height: "350px" }} className=" text-center  shadow p-4">
                                <img style={{ height: '150px' }} src={`data:image/png;base64,${service.image.img}`} alt="" />
                                <h5 className="my-2 text-white">{service.name}</h5>
                                <h6 className="my-2 text-white">${service.cost}</h6>

                                <p className="text-white">{service.description}</p>
                            </div>
                        </a.div>
                            :
                            <a.div className="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} >
                                <div style={{ height: "350px", backgroundColor: "#036" }} className=" text-center rounded-3 shadow p-4">
                                    <img style={{ height: '200px' }} src={`data:image/png;base64,${service.image.img}`} alt="" />

                                    <Link to={"/dashboard/book"} >  <button onClick={() => setOrder(service)} className="btn text-light submitButton">
                                        Get Service
                                        <div className="SubmitButton__horizontal"></div>
                                        <div className="submitButton__vertical"></div>
                                    </button>{' '}</Link>
                                </div>
                            </a.div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;