import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebase.config";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../../App";
import "./Login.css"
import { Toast } from "react-bootstrap";
import NavBar from "../../Shared/NavBar/NavBar";

const Login = () => {
    const storeAuthToken = () => {
        firebase
            .auth()
            .currentUser.getIdToken(/* forceRefresh */ true)
            .then(function (idToken) {
                sessionStorage.setItem("token", idToken);
            })
            .catch(function (error) { });
    };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [loginInfo, setLoginInfo] = useState({});
    let [newUser, setNewUser] = useState(false)
    const [show, setShow] = useState(true);

    const handleBlur = (event) => {
        let newUser = { ...loginInfo }
        newUser[event.target.name] = event.target.value
        setLoginInfo(newUser)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (newUser && loginInfo.password && loginInfo.password === loginInfo.confirmPassword) {
            firebase.auth().createUserWithEmailAndPassword(loginInfo.email, loginInfo.password)
                .then((userCredential) => {
                    const { displayName, email } = userCredential.user;
                    let newUserInfo = { name: displayName, email: email }
                    newUserInfo.error = ''
                    newUserInfo.success = true
                    setLoggedInUser(newUserInfo)
                    storeAuthToken();
                    history.replace(from);

                })
                .catch((error) => {

                    let newUserInfo = { ...loggedInUser }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false
                    setLoggedInUser(newUserInfo)
                });
        }
        if (newUser && loginInfo.password !== loginInfo.confirmPassword) {
            let newUserInfo = { ...loggedInUser }
            newUserInfo.error = "pass word not matched";

            setLoggedInUser(newUserInfo)


        }
        if (!newUser && loginInfo.email && loginInfo.password) {
            firebase.auth().signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
                .then((userCredential) => {
                    var { displayName, email } = userCredential.user;
                    let newUserInfo = { name: displayName, email: email }
                    newUserInfo.error = ''
                    newUserInfo.success = true
                    setLoggedInUser(newUserInfo)
                    storeAuthToken();
                    history.replace(from);

                })
                .catch((error) => {
                    let newUserInfo = { ...loggedInUser }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false
                    setLoggedInUser(newUserInfo)
                });
        }
    }


    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;

                const signedInUser = { name: displayName, email: email, img: photoURL };
                setLoggedInUser(signedInUser);

                storeAuthToken();
                history.replace(from);
            })
            .catch((error) => {
                let newUserInfo = { ...loggedInUser }
                newUserInfo.error = error.message;
                setLoggedInUser(newUserInfo);

            });
    };

    return (
        <>
            <NavBar></NavBar>
            <div className="d-flex my-5 mx-5 justify-content-center">

                <div style={{ borderRadius: "20px" }} className=" login-container bg-light p-5">
                    <form onSubmit={handleSubmit}>

                        <div style={{ marginLeft: '30%' }}>
                            <Toast className="toast-right" onClose={() => setShow(false)} show={show} delay={5000} >
                                <Toast.Header>
                                    <strong className="mr-auto">Important Info</strong>
                                </Toast.Header>
                                <Toast.Body className="text-center">
                                    Use this email to see all admin features
                                    <br />
                                    <b>Email: test@gmail.com</b>
                                    <br />
                                    <b>password : 111111</b>
                                </Toast.Body>
                            </Toast>
                        </div>

                        {newUser && <div className=" mb-1">
                            <label for="inputemail3" className="col-sm-2 col-form-label">
                                Name
                            </label>

                            <input className="form-control" type="text" name="name" placeholder="Enter Your Name" />

                        </div>}

                        <div className=" mb-1">
                            <label for="inputemail3" className="col-sm-2 col-form-label">
                                Your Email
                            </label>

                            <input className="form-control" type="text" required onBlur={handleBlur} placeholder="Enter Your Email" name="email" id="" />

                        </div>
                        <div className="mb-1">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">
                                Password
                            </label>

                            <input className="form-control" id="inputPassword3" type="password" required onBlur={handleBlur} name="password" placeholder="Enter Your Password" />

                        </div>

                        {newUser && <div className="mb-1">
                            <label for="inputPassword3" className="col-sm-2 col-form-label">
                                Confirm Password
                            </label>

                            <input className="form-control" id="inputPassword3" type="password" required onBlur={handleBlur} name="confirmPassword" placeholder="Confirm Your Password" />

                        </div>}
                        {newUser ? <p style={{ textAlign:'center', cursor: "pointer" }}>Already have an account ? <span onClick={() => setNewUser(!newUser)} name="newUser" id="newUser" className="text-primary">Log in</span></p>
                            : <p style={{ textAlign:'center', cursor: "pointer" }}>Are you new user? <span onClick={() => setNewUser(!newUser)} name="newUser" id="newUser" className="text-primary">create account</span></p>
                        }
                        <div className=" justify-content-center  d-flex mb-1">
                            <button className="w-75 btn btn-success" type="submit" variant="primary" size="md" block>
                                {newUser ? "sign up" : "Log in"}
                            </button>
                        </div>

                    </form>
                    <p className="text-warning">{loggedInUser.error}</p>
                    <div className="justify-content-center d-flex">
                        <button className="btn btn-info w-75" onClick={handleGoogleSignIn}>Sign In With Google</button>
                    </div>
                </div>
            </div>
        </>
    );
};



export default (Login);