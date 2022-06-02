import React, {Fragment} from 'react';
import Dashboard from './pages/Dashboard';
import LogIn from './pages/LogIn'
import { Routes, Route } from 'react-router-dom';
import {AuthProvider, RequireAuth} from './contexts/AuthContext';
import LogOut from './pages/LogOut';
import Restricted from './pages/Restricted';
import Home from './pages/AdminLanding';
import EntryUpdate from './pages/AdminPages/EntryUpdate';
import FeedLog from './pages/AdminPages/FeedLog';
import PricingTable from './pages/AdminPages/PricingTable';
import ReqHistory from './pages/AdminPages/ReqHistory';

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
          <Route path='/home' element={<Home/>} />
          <Route path='/home/entry_update' element={<EntryUpdate/>} />
          <Route path='/home/feed_log' element={<FeedLog/>} />
          <Route path='/home/pricing_table' element={<PricingTable/>} />
          <Route path='/home/req_history' element={<ReqHistory/>} />
        </Routes>    
    </AuthProvider>
  </>);
}
