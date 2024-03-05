import React,{useEffect} from 'react';

import './landing.css';
import Aos from "aos"
import 'aos/dist/aos.css'

import {Link} from 'react-router-dom';
const Landing = () => {
  useEffect(()=>{
    Aos.init();
   },[])
  return (
    <div className="banner-video con-lg-12 ">
      <div className="content  ">
        <div className="title  p-5" data-aos="fade-up" data-aos-duration="3000">
          <h1>FIRST CHEAPOAIR TRAVELS</h1>
          <p>Plan your trip with us and travel around the world with the most affordable packages!</p>
          <Link className="button-landing" to='/newaccount'>Register Now!</Link>
        </div>
        
      </div>
    </div>
  );
};

export default Landing;
