import React, { createContext, useContext, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const AuthContext = createContext(null);

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
    const [auth, setAuth] = useState(false)
    const [user, setUser] = useState({})

    useEffect(() => {
            fetch("http://localhost:3001/auth/status", {
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
    console.log(auth);
    
  
    if (!auth) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
}

