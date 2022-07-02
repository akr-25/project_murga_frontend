import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
// import '../App.css'

export default function Dashboard() {
  const { currentUser } = useAuth();
  if(!currentUser || !currentUser.isAuthorized){ 
    return (
      <Navigate to="/login" replace={true} /> 
    )
  }
  else{
    return (
      <Navigate to="/home" replace={true} /> 
    )
  }
}
