import react from "react";
import Cookies from 'js-cookie'
import { AuthApi } from "../AuthApi";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
axios.defaults.withCredentials=true;

export const Login = (props) => {
    const {auth, setAuth}  = react.useContext(AuthApi);
  // const kk = Auth.auth;
   const handleOnClick = () => {
    window.open("http://localhost:3001/auth/google", "_self")
   }
   return(
<div>
<h1> Google Login </h1>
  Click here to authenticate with Google
  <button onClick={handleOnClick}> GOOGLE BUTTON </button>
</div>
       
     
   )
 }