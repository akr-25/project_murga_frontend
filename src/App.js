import react ,{useState, useContext, Provider}from "react";
import Cookies from 'js-cookie'
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate, Outlet
} from "react-router-dom";
import { KK } from "./components/router";
import { AuthApi } from "./AuthApi";


function App() {
  const[auth, setAuth] = React.useState(false);
  const providerValue = { auth, setAuth};//isko aise pass kia toh chal gaya but direct pass kar raha tha provider mai so wasn't working!
const readCookie = () => {
  const user = Cookies.get("user");
  if(user)
  {
    setAuth(true);
  }}
  react.useEffect(()=> {
    readCookie();
  }, [])

  console.log(auth);
  return (
    
  <div className="App">
      <AuthApi.Provider value={providerValue}>
      <h1>HAHAHAHHAHA</h1>
      <Router>  
        <KK />
      </Router>
    </AuthApi.Provider>
  </div>
  );
}

export default App;
