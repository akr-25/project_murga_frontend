import React from 'react';
import Dashboard from './Dashboard';
import LogIn from './LogIn'
import { Routes, Route } from 'react-router-dom';
import {AuthProvider, RequireAuth} from '../contexts/AuthContext';
import LogOut from './LogOut';
import Restricted from './Restricted';
import AdminLanding from './AdminLanding';
import EntryUpdate from './AdminPages/EntryUpdate';
import FeedLog from './AdminPages/FeedLog';
import PricingTable from './AdminPages/PricingTable';
import ReqHistory from './AdminPages/ReqHistory';
import OrderDetails from './AdminPages/OrderDetails';
import CreateOrder from './AdminPages/CreateOrder';
import Home from './Home';

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
        <Routes>
            //! auth ho jane par iss route ko uncomment krke check kr lena 
            {/* <Route path='/home' element={<RequireAuth><Home/></RequireAuth>}> */} 
            <Route path='/home' element={<Home/>}>
              <Route path='' element={<AdminLanding/>} /> 
              <Route path='entry_update' element={<EntryUpdate/>} />
              <Route path='feed_log' element={<FeedLog/>} />
              <Route path='pricing_table' element={<PricingTable/>} />
              <Route path='req_history' element={<ReqHistory/>} />
              <Route path='create_an_order' element={<CreateOrder/>} />
              <Route path='orderDetails/:id' element={<OrderDetails/>}/> 
            </Route>
        </Routes>
    </AuthProvider>
  </>);
}
