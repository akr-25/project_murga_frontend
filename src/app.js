import React, {Fragment} from 'react';
import Dashboard from './components/Dashboard';
import LogIn from './components/LogIn'
import { Routes, Route } from 'react-router-dom';
import {AuthProvider, RequireAuth} from './contexts/AuthContext';
import LogOut from './components/LogOut';
import Restricted from './components/Restricted';

export default function App() {
  return (
  <>
    <AuthProvider>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/logout' element={<LogOut/>}/>
          <Route path='/restricted' element={<RequireAuth><Restricted/></RequireAuth>}/>
        </Routes>    
    </AuthProvider>
  </>);
}


