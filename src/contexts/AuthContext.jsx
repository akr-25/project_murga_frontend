import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React,  { useContext, useState, useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../firebase';


const AuthContext = React.createContext(); 

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider( { children } ) {
    const [currentUser, setcurrentUser] = useState({
      isAuthorized: false, 
      email: null
    })

    function signin(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }
    function signout(){
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user){
              // console.log("yes")
              setcurrentUser({
                isAuthorized: true, 
                email: user.email
              })
              console.log(currentUser)
            } 
            else{
              // console.log("no")
              setcurrentUser({
                isAuthorized: false, 
                email: null
              })
              console.log(currentUser)
            }
            
        })

        return () => {
            unsubscribe()
        }
    }, [])
    
    
    if(currentUser){

    }
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
  // console.log(currentUser)
  if (!currentUser.isAuthorized) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
}
