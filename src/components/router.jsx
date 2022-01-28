import { AuthApi } from "../AuthApi";
import react ,{useState, useContext, Provider}from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate, Outlet
} from "react-router-dom";
import { Login } from "./login";
import { Dashboard } from "./Dashboard";
import { LoadingPage } from "./temp";


export const KK = () =>{
    const Auth = react.useContext(AuthApi);
    return(
      <Routes>
        <Route exact path='/login' auth={Auth.auth} element={<PrivateLogin/>}>
          <Route exact path='/login'  element={<Login/>}/>
        </Route>
          <Route exact path='/Dashboard' auth={Auth.auth} element={<PrivateRoute/>}>
        <Route exact path='/Dashboard' element={<Dashboard/>}/>
        </Route>
          <Route exact path='/temp' auth={Auth.auth} element={<PrivateLoading/>}>
        </Route>

      </Routes>
    )
  }
 export const PrivateRoute = (props) => {
    const {auth, setAuth} = react.useContext(AuthApi);
      return auth ? <Outlet /> : <Navigate to="/login" />;
     
  }
  
  export const PrivateLogin = (props) => {
    const {auth, setAuth} = react.useContext(AuthApi);
     return !auth ?  <Outlet /> : <Navigate to="/Dashboard" />;
  }

  export const PrivateLoading = (props) => {
    const {auth, setAuth} = react.useContext(AuthApi);
     return !auth ?  <Navigate to="/login" />: <Navigate to="/Dashboard" />;
  }