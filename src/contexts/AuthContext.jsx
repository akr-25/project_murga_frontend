import React, { createContext, useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { BACKEND_URLS } from '../config/urls';

const AuthContext = createContext(null);

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [auth, setAuth] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {
            fetch(BACKEND_URLS.AUTH.STATUS, {
                credentials: 'include'
            })
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                if(result.auth){
                    setAuth(true)
                    setUser(result.user)
                }
            })
            .catch(e => console.log(e))
    }, [])

    const value = {
        user,
        auth
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function RequireAuth({ children }) {
    const { auth } = useAuth();
    const location = useLocation();
  
    if (!auth) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
}

