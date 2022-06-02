import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


export default function Dashboard() {
  const {auth} = useAuth(); 
  return (
      <>
        <ul>
            <li><Link to='/login'>Session</Link></li>
            {auth && <li><Link to='/logout'>LogOut</Link></li>}
            <li><Link to='/restricted'>Restricted</Link></li>
        </ul>
      </>
  );
}
