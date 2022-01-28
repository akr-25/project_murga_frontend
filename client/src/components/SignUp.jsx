import React from 'react';
import { useState, useEffect } from 'react'; 
import axios from 'axios';

export default function SignUp() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState(); 

  const register  = () =>{
    axios.post("http://localhost:3001/signup", {
      username: username,
      password: password
    })
    .then((res) =>{
      console.log(res); 
    })
  }

  return (<div className='app'>
      <div className='registration'>
          <h1>Register Here!</h1>
          <label>Username</label>
          <input type="text" placeholder='username...' onChange={(e) => {setUsername(e.target.value)}}/>
          <label>Password</label>
          <input type="text" placeholder='pasword...' onChange={(e) => {setPassword(e.target.value)}}/>
          <button onClick={register}>Register</button>
      </div>
  </div>);
}
