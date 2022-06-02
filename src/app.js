import React, { Fragment } from 'react';
import { Dashboard, LogIn, LogOut, Restricted } from './components';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider, RequireAuth } from './contexts/AuthContext';

export default function App() {
	return (
		<>
			<AuthProvider>
				<Routes>
					<Route path='/' element={<Dashboard />} />
					<Route path='/login' element={<LogIn />} />
					<Route path='/logout' element={<LogOut />} />
					<Route path='/restricted' element={<RequireAuth><Restricted /></RequireAuth>} />
				</Routes>
			</AuthProvider>
		</>);
}


