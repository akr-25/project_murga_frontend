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
import { PrivateLoading,PrivateRoute,PrivateLogin} from "../utils/route";

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
