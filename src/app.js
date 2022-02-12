import React, {Fragment} from 'react';
import Dashboard from './pages/Dashboard';
import LogIn from './pages/LogIn'
import { Routes, Route } from 'react-router-dom';
import {AuthProvider, RequireAuth} from './contexts/AuthContext';
import LogOut from './pages/LogOut';
import Restricted from './pages/Restricted';
import Home from './pages/Home';

import './App.css';
export default function App() {
  return (
  <>
    <AuthProvider>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/logout' element={<LogOut/>}/>
          <Route path='/restricted' element={<RequireAuth><Restricted/></RequireAuth>}/>
          <Route path='/home' element={<RequireAuth><Home/></RequireAuth>}/>
        </Routes>    
    </AuthProvider>
  </>);
}