import React from 'react';
import { BACKEND_URLS } from '../config/urls';
import { useAuth } from '../contexts/AuthContext';


export default function LogIn() {
  const { auth } = useAuth(); 
  return (
  <>
    {
      auth ?
      <h1>Already Logged In</h1>
      :
      (<div className='app'>
        <div className='login'>
            <h1>Login Here!</h1>
            <button onClick={() => window.open(BACKEND_URLS.AUTH.GOOGLE_LOGIN,"_self")}>Google Log In</button>
        </div>
      </div>)  
    }
  </>
  )
}
