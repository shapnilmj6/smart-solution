import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "aos/dist/aos.css";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Book from './components/Dashboard/Book/Book';
import NotFound from './components/NotFound/NotFound';
import AddService from './components/AddService/AddService';
import Profile from './components/Dashboard/Profile/Profile';
import BookList from './components/Dashboard/BookList/BookList';
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin';
import ManageServices from './components/Dashboard/ManageServices/ManageServices';
import OrderList from './components/Dashboard/OrderList/OrderList';

export const UserContext = createContext();
export const UserOrder = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [order, setOrder] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <UserOrder.Provider value={[order, setOrder]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/dashboard/book">
              <Book></Book>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/profile">
              <Profile></Profile>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/bookList">
              <BookList></BookList>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/manageServices">
              <ManageServices></ManageServices>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/addAdmin">
              <AddAdmin></AddAdmin>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/OrderList">
              <OrderList></OrderList>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </UserOrder.Provider>
    </UserContext.Provider>
  );
}

export default App;
