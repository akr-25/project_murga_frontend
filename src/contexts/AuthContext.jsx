import {  onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React,  { useContext, useState, useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../firebase';


const AuthContext = React.createContext(); 

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider( { children } ) {
    let sessionStorageValue = JSON.parse(sessionStorage.getItem("currentUser"));
    
    console.log(sessionStorageValue)
    if(sessionStorageValue == null){
      sessionStorageValue = {
        isAuthorized: false,
        email: null
      }; 
    }

    const [currentUser, setcurrentUser] = useState(sessionStorageValue)

    function signin(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }
    function signout(){
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if(user){
            console.log("user has logged in");

            setcurrentUser({
              isAuthorized: true,
              email: user.email
            });
            sessionStorage.setItem("currentUser", JSON.stringify({
              isAuthorized: true,
              email: user.email
            }));
          }
          else{
            console.log("user is logged in");

            setcurrentUser({
              isAuthorized: false,
              email: null
            });

            sessionStorage.setItem("currentUser", JSON.stringify({
              isAuthorized: false,
              email: null
            }));
          }
        })

        return () => {
            unsubscribe()
        }
    }, [])
    
    
    const value = {
        currentUser, 
        signin, 
        signout
    }
  return (
    <AuthContext.Provider value = {value}>
        {children}
    </AuthContext.Provider>
  )
}


export function RequireAuth({ children }) {
  const { currentUser } = useAuth();
  const location = useLocation();
  // console.log("req")
  const { isAuthorized } = currentUser; 

  console.log("reqauth", isAuthorized)
  if (!isAuthorized) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
}
