import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider, RequireAuth } from './contexts/AuthContext';
import { Home, Dashboard, LogIn, LogOut, Restricted } from './pages';
import { EntryUpdate, FeedLog, PricingTable, ReqHistory } from './pages/AdminPages';

import './App.css';


export default function App() {
	return (
		<>
			<AuthProvider>
				<Routes>
					<Route path='/' element={<Dashboard />} />
					<Route path='/login' element={<LogIn />} />
					<Route path='/logout' element={<LogOut />} />
					<Route path='/restricted' element={<RequireAuth><Restricted /></RequireAuth>} />
					<Route path='/home' element={<Home />} />
					<Route path='/home/entry_update' element={<EntryUpdate />} />
					<Route path='/home/feed_log' element={<FeedLog />} />
					<Route path='/home/pricing_table' element={<PricingTable />} />
					<Route path='/home/req_history' element={<ReqHistory />} />
				</Routes>
			</AuthProvider>
		</>);
}
