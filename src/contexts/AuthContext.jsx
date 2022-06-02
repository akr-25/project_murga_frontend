import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { BACKEND_URLS } from "../config/urls";

const AuthContext = createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const asyncFunc = async () => {
      try {
        const response = await axios.get(BACKEND_URLS.AUTH.STATUS, {
          withCredentials: true,
        });
        if (response.data.auth === true) {
          setAuth(true);
          setUser(response.data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    asyncFunc();
  }, []);

  const value = {
    user,
    auth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function RequireAuth({ children }) {
  const { auth } = useAuth();
  const location = useLocation();

  if (!auth) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
}
