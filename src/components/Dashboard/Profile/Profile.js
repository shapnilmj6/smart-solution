import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import SideNavBar from '../SideNavBar/SideNavBar';
import man from '../../../images/man.png';

const Profile = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="row">
            <SideNavBar></SideNavBar>
            <div style={{ marginRight: '30%' }} className="col-md-3 mt-5">
                <div style={{ backgroundColor: 'Azure'}} className="card text-center">
                    <h4 style={{ backgroundColor: 'black' }} className="text-white p-2">Your Profile Information</h4>
                    <div style={{ borderRadius: "50%" }} className="text-center ">
                        <img style={{ width: "100%", borderRadius: "50%" }} src={loggedInUser.img || man} className="   card-img-top" alt="..."></img>
                    </div>
                    <div className="card-body ">
                        <h5>{loggedInUser.name}</h5>
                        <p><small>Email: {loggedInUser.email}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;