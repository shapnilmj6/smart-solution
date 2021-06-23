import React, { useContext, useEffect, useState } from 'react';
import SideNavBar from '../SideNavBar/SideNavBar';
import { UserContext, UserOrder } from '../../../App';
import { Toast } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from '../../SimpleCardForm/SimpleCardForm';

const Book = () => {
    const [order, setOrder] = useContext(UserOrder)
    const stripePromise = loadStripe('pk_test_51J2ngkJKrqdkDqK9eAmDxkC1gQBD1EFkpw8BPrXeFdM2bcU90rYlq9waPCARAl4g1lVt6P6wsD210tZrT6BZOW2V00pXgbyZPH');
    const [show, setShow] = useState(true);
    const [paymentId, setPaymentId] = useState(null)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [showPaymentBtn, setShowPaymentBtn] = useState(false)
    const handlePayment = (id) => {
        setPaymentId(id)
        setShowPaymentBtn(true)
    }

    return (
        <div className="row">
            <SideNavBar></SideNavBar>
            <div className="col-md-9 mt-5 ">
                <div style={{ backgroundColor: "#F4FDFB" }} className="shadow pt-5 px-5">
                    <div className=" d-flex   justify-content-center  flex-column">
                        <>
                            <Toast className="toast-right" onClose={() => setShow(false)} show={show} delay={5000} autohide>
                                <Toast.Header>
                                    {/* <img src={infoEmojis} className="rounded mr-2" alt="Info" /> */}
                                    <strong className="mr-auto">Important Info</strong>
                                </Toast.Header>
                                <Toast.Body className="text-center">
                                    Use this Card Number to test the payment
                                    <br />
                                    <b>4242 4242 4242 4242</b>
                                </Toast.Body>
                            </Toast>
                        </>
                        <Elements stripe={stripePromise}>
                            <SimpleCardForm order={order}></SimpleCardForm>
                        </Elements>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Book;