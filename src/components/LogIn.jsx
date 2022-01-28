import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"; 

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  
  const googlesignin  = () =>{
    window.open("http://localhost:3001/auth/google", "_self")
  }

  // useEffect(() =>{
  //   axios.get("http://localhost:3001/login")
  //   .then((res) => {
  //     if(res.data.loggedIn){
  //       setLoginStatus(res.data.user[0].username + " authenticated.")
  //     }
  //     else{
  //       setLoginStatus("Not authenticated as not logged in."); 
  //     }
  //   })
  //   .catch(e => {console.log(e)})
  // }, [])

  return (<div className='app'>
      <div className='login'>
          <h1>Login Here!</h1>
          {/* <label>Username</label> */}
          {/* <input type="text" placeholder='username...' onChange={(e) => {setUsername(e.target.value)}}/>
          <br></br>
          <label>Password</label>
          <input type="text" placeholder='pasword...' onChange={(e) => {setPassword(e.target.value)}}/>
          <br></br> */}
          <button onClick={googlesignin}>Google Log In</button>
          {/* <br></br> */}
          <h3> Need an account? <Link to ='/signup'>Sign Up Now!</Link></h3>
          {/* <h1>{loginStatus}</h1> */}
      </div>
  </div>);
}
