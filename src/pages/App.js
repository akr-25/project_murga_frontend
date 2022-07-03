import React from 'react';
import Dashboard from './Dashboard';
import LogIn from './LogIn'
import { Routes, Route } from 'react-router-dom';
import { AuthProvider, RequireAuth} from '../contexts/AuthContext';
import AdminLanding from './AdminLanding';
import EntryUpdate from './AdminPages/EntryUpdate';
import FeedLog from './AdminPages/FeedLog';
import PricingTable from './AdminPages/PricingTable';
import ReqHistory from './AdminPages/ReqHistory';
import OrderDetails from './AdminPages/OrderDetails';
import CreateOrder from './AdminPages/CreateOrder';
import Fallback from '../components/Fallback';
import Home from './Home';
import { ErrorBoundary } from 'react-error-boundary';

const errorHandler = (err, errInfo) => {
  console("logging", err, errInfo)
}

export default function App() {
  return (
  <>
    <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
      <AuthProvider>
          <Routes>
            <Route path='/' element={<Dashboard/>}/>
            <Route path='/login' element={<LogIn/>}/>
            //! auth ho jane par iss route ko uncomment krke check kr lena 
            {/* <Route path='/home' element={<RequireAuth><Home/></RequireAuth>}> */} 
            <Route path='/home' element={<RequireAuth> <Home/></RequireAuth>}>
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
    </ErrorBoundary>
  </>);
}
