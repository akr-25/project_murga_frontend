import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
      <>
        <ul>
            <li><Link to='login'>Login</Link></li>
            <li><Link to='/signup'>Profile</Link></li>
        </ul>
      </>
  );
}
