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

const Login = (props) => {
   const {auth, setAuth}  = react.useContext(AuthApi);
 // const kk = Auth.auth;
  const handleOnClick = () => {
    // props.auth.setAuth(true);
    setAuth(true);
    Cookies.set("user","loginTrue")
  }
  return(
    <div>
      <button onClick={handleOnClick}>Login</button>
    </div>
  )
}

// const Logout = (props) => {
//   const {auth, setAuth}  = react.useContext(AuthApi);
// // const kk = Auth.auth;
//  const handleOnClick = () => {
//    // props.auth.setAuth(true);
//    setAuth(false);
//  }
//  return(
//    <div>
//      <button onClick={handleOnClick}>Logout</button>
//    </div>
//  )
// }

const Dashboard = () => {
  const {auth, setAuth}  = react.useContext(AuthApi);
  // const kk = Auth.auth;
   const handleOnClick = () => {
     // props.auth.setAuth(true);
     setAuth(false);
     Cookies.remove("user");
   }
  return(
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleOnClick}>Logout</button>
    </div>
  )
}

const KK = () =>{
  const Auth = react.useContext(AuthApi);
  return(
    <Routes>
      <Route exact path='/login' auth={Auth.auth} element={<PrivateLogin/>}>
      <Route exact path='/login'  element={<Login/>}/>
      </Route>
      <Route exact path='/Dashboard' auth={Auth.auth} element={<PrivateRoute/>}>
      <Route exact path='/Dashboard' element={<Dashboard/>}/>
</Route>
    </Routes>
  )
}
const PrivateRoute = (props) => {
  const {auth, setAuth} = react.useContext(AuthApi);
   // const auth = false; // determine if authorized, from context or however you're doing it
  //console.log(props);
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet /> : <Navigate to="/login" />;
   
}

const PrivateLogin = (props) => {
  const {auth, setAuth} = react.useContext(AuthApi);
  // const auth = false; // determine if authorized, from context or however you're doing it
 //console.log(props);
   // If authorized, return an outlet that will render child elements
   // If not, return element that will navigate to login page
   return !auth ?  <Outlet /> : <Navigate to="/Dashboard" />;
}
export default App;
