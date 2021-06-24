import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideNavBar from '../SideNavBar/SideNavBar';
import jwt_decode from "jwt-decode";
import BookListDetails from '../BookListDetails/BookListDetails';

const BookList = () => {
    const [bookingList, setBookingList] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const token = sessionStorage.getItem('token');

        if (!token) {
            return false;
        }

        const decodedToken = jwt_decode(token);
        const { name, email, picture } = decodedToken;
        const newSignedInUser = { name: name, email: email, img: picture }
        setLoggedInUser(newSignedInUser)
    }, [])

    useEffect(() => {

        fetch("https://smart-solution-server.herokuapp.com/orders")
            .then(res => res.json())
            .then(data => {
                const myOrder = data.filter(orders => orders.email === loggedInUser.email)
                setBookingList(myOrder)
                setIsLoading(true)
            })
    }, [loggedInUser.email])

    return (
        <div className="row">
            <SideNavBar></SideNavBar>
            <div className="col-md-9">
                <div className="p-4 pr-5">
                    <div className="d-flex justify-content-center ">
                        {bookingList.length < 1 && !isLoading && <div className="d-flex py-5 my-5 justify-content-center">
                            <div className="spinner-border text-success" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>}
                        {bookingList.length < 1 && isLoading ?
                            <h3>No order placed yet.....</h3>
                            :
                            <div className="mt-5 row pt-5">
                                {
                                    bookingList.map(booking => <BookListDetails booking={booking}></BookListDetails>)
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookList;