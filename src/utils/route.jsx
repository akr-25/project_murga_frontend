import react from "react"
import { AuthApi } from "../AuthApi";
import { Navigate,Outlet } from "react-router-dom";
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