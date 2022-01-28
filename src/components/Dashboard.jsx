import react from "react";
import { AuthApi } from "../AuthApi";
import Cookies from "js-cookie";

export const Dashboard = () => {
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