import React from 'react';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import LogIn from './components/LogIn'
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (<>
    <Routes>
      <Route path='/' element={<Dashboard/>}></Route>
      <Route path='/login' element={<LogIn/>}></Route>
      <Route path='/signup'element={<SignUp/>}></Route>
    </Routes>
  </>);
}
