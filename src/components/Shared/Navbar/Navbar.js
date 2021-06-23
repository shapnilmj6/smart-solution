import React, { useContext, useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import jwt_decode from "jwt-decode";
import "./NavBar.css";
import logo from '../../../smartSolution.png';
import { UserContext } from '../../../App';
import loginImg from '../../../images/man.png';

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const handleLogOut = () => {
        sessionStorage.removeItem('token');
        setLoggedInUser({})
    }

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

    return (
        <Navbar fixed="top" style={{ backgroundColor: '#6047ec' }} collapseOnSelect expand="lg" variant="dark">

            <Navbar.Brand>  <img style={{ width: "40px", marginLeft: "20px" }} src={logo} alt="" /><Link to="/" style={{ textDecoration: 'none', color: 'white', fontSize: '35px', fontWeight: '600' }}>Smart Solution</Link></Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto align-items-center ">
                    <Link className="js mx-3 text-white text-decoration-none" to="/">Home</Link>
                    <Nav.Link className=" px-2 mx-3 text-white text-decoration-none" href="#service" >Services</Nav.Link>

                    <Nav.Link className=" px-2 mx-3 text-white text-decoration-none" href="#aboutUs" >About us</Nav.Link>
                    <Nav.Link className=" px-2 mx-3 text-white text-decoration-none" href="#review" >Review</Nav.Link>
                    <Link className="px-2 mx-3 text-white text-decoration-none" to="/dashboard/profile">Dashboard</Link>
                    <Nav.Link className=" text-white text-decoration-none p-0 m-0" >

                        {

                            loggedInUser.email ?
                                <Popup trigger={
                                    <div className=" mr-5">
                                        <img style={{ width: '40px' }} className="profile-image rounded-circle p-1" src={loggedInUser.img || loginImg} alt="" />
                                    </div>
                                }
                                    position="bottom">
                                    <div className="bg-white p-3 text-center">

                                        <img style={{ height: '100px', width: '100px' }} className="profile-image rounded-circle p-1 border" src={loggedInUser.img || loginImg} alt="" />

                                        <p className="m-0 "><strong>{loggedInUser.name}</strong></p>
                                        <p className="m-0"><small>{loggedInUser.email}</small></p>

                                        <button onClick={handleLogOut} className="btn btn-outline-danger w-100 mt-4">Log Out?</button>

                                    </div>
                                </Popup>


                                :
                                <Link className="px-2 mx-3 text-white text-decoration-none" to="/login">Login</Link>


                        }

                    </Nav.Link>


                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;