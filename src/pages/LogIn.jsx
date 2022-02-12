import React from 'react';
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
            <button onClick={() => window.open("http://localhost:3001/auth/google","_self")}>Google Log In</button>
        </div>
      </div>)  
    }
  </>
  )
}
