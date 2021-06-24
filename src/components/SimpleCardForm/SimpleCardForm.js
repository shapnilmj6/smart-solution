import React, { useContext } from 'react';
import {
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import swal from 'sweetalert';
import { useState } from 'react';
import { UserContext } from '../../App';

const SimpleCardForm = ({order}) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const stripe = useStripe();
    const elements = useElements();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);

    const handleOrder = async data => {

        if (!stripe || !elements) {
            console.log("clicked first");

            return;
        }
        const loading = toast.loading('Please wait...!');


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardNumberElement),
        });

        if (error) {
            toast.dismiss(loading);

            return swal("Failed!", error.message, "error", { dangerMode: true });
            setPaymentError(error.message);
            setPaymentSuccess(null);

        }

        console.log(loggedInUser, paymentMethod.id);
        const orderInfo = {
            ...loggedInUser,
            orderTime: new Date().toLocaleString(),
            "serviceName": order.name,
            "cost": order.cost,
            "description": order.description,
            "image": order.image,
            "status": "pending",
            "paymentId": paymentMethod.id
        }
        axios.post("https://smart-solution-server.herokuapp.com/addOrder", orderInfo)
            .then(res => {
                toast.dismiss(loading);
                if (res.data) {
                    return swal("Payment successful", "Your booking and payment has been successful.", "success");
                }
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            })
            .catch(error => {
                toast.dismiss(loading);
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            });
    };
    return (
        <div>
            <form onSubmit={handleSubmit(handleOrder)} className="row g-3">
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Service</label>
                    <input type="text" defaultValue={order.name} className="form-control" id=""></input>
                </div>

                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Price</label>
                    <input type="text" defaultValue={order.cost} className="form-control" id=""></input>
                </div>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Name</label>
                    <input type="text" defaultValue={loggedInUser.name} className="form-control" id=""></input>
                </div>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Card Number</label>
                    <CardNumberElement className="form-control" />

                </div>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Email</label>
                    <input type="text" defaultValue={loggedInUser.email} className="form-control" id=""></input>
                </div>

                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label"> Expiration Date</label>
                    <CardExpiryElement className="form-control" />

                </div>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Address</label>
                    <input type="text" className="form-control" placeholder="Address" id=""></input>
                </div>
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">CVC</label>
                    <CardCvcElement className="form-control" />
                </div>
                <div className="pb-5 text-center ">
                    <button className="btn btn-primary me-md-2 text-center" type="submit" disabled={!stripe}>
                        Order now
                    </button>
                </div>
            </form>
            {
                paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{ color: 'green' }}>Your payment was successful.</p>
            }
        </div>
    );
};

export default SimpleCardForm;