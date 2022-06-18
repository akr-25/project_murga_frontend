import React from "react";
import Navbar from '../components/Navbar';
import {RequestCard} from '../components/RequestCard';

export default function Home() {

  return (
    <div className="pg-main" style={{height:"800px"}}>
      <Navbar/>

      <div className='page_container'>
        <RequestCard />
      </div>
      
    </div>
  );
}
