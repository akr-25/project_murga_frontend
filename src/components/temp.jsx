import react from "react";
import { AuthApi } from "../AuthApi";
import Cookies from "js-cookie";
import axios from "axios";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate, Outlet
  } from "react-router-dom";
import { Login } from "./login";
import { Dashboard } from "./Dashboard";

export const LoadingPage = () => {
    const [post, setPost] = react.useState(null);

    react.useEffect(() => {
      axios.get("/auth/status").then((response) => {
        setPost(response.data);
      });
    }, []);
  
    if (!post) {return  <Navigate to="/login"/>; }
    const {auth, setAuth}  = react.useContext(AuthApi);
    if(post){
     setAuth(true);
    Cookies.set("user","data.user") 
    // instead of data.user set post.user
    return <Navigate to="/Dashboard"/>;
    }
}