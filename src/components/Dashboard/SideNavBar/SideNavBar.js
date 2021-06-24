import React, { useContext, useEffect, useState } from 'react';
import { Col, Nav, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faHome, faBars, faTasks, faUserCircle, faShoppingBag, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const SideNavBar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://smart-solution-server.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setIsAdmin(data)
            }
            )
    }, [])

    return (
        <Tab.Container>
            <Col>
                <Nav style={{ backgroundColor: '#6047ec' }} variant="pills" className="flex-column nav-container">
                    <Nav.Item>
                        <Link to="/"><FontAwesomeIcon icon={faHome} /> Home page</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/dashboard/profile">  <FontAwesomeIcon icon={faUserCircle} /> Profile</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/dashboard/Book">
                            <FontAwesomeIcon icon={faShoppingBag} />   Book</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/dashboard/BookList"><FontAwesomeIcon icon={faShoppingCart} /> Book list</Link>
                    </Nav.Item>
                    {isAdmin &&
                        <div>
                            <Nav.Item>
                                <Link to="/dashboard/addService"><FontAwesomeIcon icon={faPlusCircle} /> Add Service</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/dashboard/addAdmin"><FontAwesomeIcon icon={faPlusCircle} /> make admin</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/dashboard/OrderList"><FontAwesomeIcon icon={faBars} /> Order List</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/dashboard/manageServices"><FontAwesomeIcon icon={faTasks} /> Manage Services</Link>
                            </Nav.Item>
                        </div>}
                </Nav>
            </Col>
        </Tab.Container>
    );
};

export default SideNavBar;