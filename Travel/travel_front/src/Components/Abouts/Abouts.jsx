import React from 'react'
import './abouts.css';

import aboutimg from './assets/Travel-Booking-Form.jpg';
const Abouts = () => {
  return (
    <>
    
    <section className="about-info-area section-gap">
				<div className="container p-5">
					<div className="row align-items-center">
						<div className="col-lg-6 info-left">
							<img className="img-fluid" src={aboutimg} alt=""/>
						</div>
						<div className="col-lg-6 info-right">
							<h6>About Us</h6>
							<h1>Who We Are?</h1>
							<p>
								Here, I focus on a range of items and features that we use in life without giving them a second thought. such as Coca Cola. Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
							</p>
						</div>
					</div>
				</div>	
	</section>
    </>
  )
}

export default Abouts