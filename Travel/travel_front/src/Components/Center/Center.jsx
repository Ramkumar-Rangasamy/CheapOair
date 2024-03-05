import React from 'react'
import './center.css';

import o1 from './Assets/o1.jpg';
import bok from './Assets/bok.jpg';
import o3 from './Assets/o3.jpg';
import o4 from './Assets/o4.jpg';
const Center = () => {
  return (
    <>
       <section className="price-area section-gap">
				<div className="container">
		            <div className="row d-flex justify-content-center">
		                <div className="menu-content col-lg-8">
		                    <div className="title text-center">
		                        <h2 className="p-1 text-dark">We Provide Affordable Prices</h2>
		                        <p className='font'>Well educated, intellectual people, especially scientists at all times demonstrate considerably.</p>
		                    </div>
		                </div>
		            </div>						
					<div className="row pb-5">
						<div className="col-lg-4">
							<div className="single-price">
								<h4>Cheap Packages</h4>
								<ul className="price-list">
									<li className="d-flex justify-content-between align-items-center">
										<span>New York</span>
										<a href="#" className="price-btn">$1500</a>
									</li>
									<li className="d-flex justify-content-between align-items-center">
										<span>Maldives</span>
										<a href="#" className="price-btn">$1500</a>
									</li>
									<li className="d-flex justify-content-between align-items-center">
										<span>Sri Lanka</span>
										<a href="#" className="price-btn">$1500</a>
									</li>
									<li className="d-flex justify-content-between align-items-center">
										<span>Nepal</span>
										<a href="#" className="price-btn">$1500</a>
									</li>
									<li className="d-flex justify-content-between align-items-center">
										<span>Thiland</span>
										<a href="#" className="price-btn">$1500</a>
									</li>	
									<li className="d-flex justify-content-between align-items-center">
										<span>Singapore</span>
										<a href="#" className="price-btn">$1500</a>
									</li>														
								</ul>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="single-price">
								<h4>Luxury Packages</h4>
								<ul className="price-list">
									<li className="d-flex justify-content-between align-items-center">
										<span>New York</span>
										<a href="#" className="price-btn">$1500</a>
									</li>
									<li className="d-flex justify-content-between align-items-center">
										<span>Maldives</span>
										<a href="#" className="price-btn">$1500</a>
									</li>
									<li className="d-flex justify-content-between align-items-center">
										<span>Sri Lanka</span>
										<a href="#" className="price-btn">$1500</a>
									</li>
									<li className="d-flex justify-content-between align-items-center">
										<span>Nepal</span>
										<a href="#" className="price-btn">$1500</a>
									</li>
									<li className="d-flex justify-content-between align-items-center">
										<span>Thiland</span>
										<a href="#" className="price-btn">$1500</a>
									</li>	
									<li className="d-flex justify-content-between align-items-center">
										<span>Singapore</span>
										<a href="#" className="price-btn">$1500</a>
									</li>														
								</ul>
							</div>
						</div>
						<div className="col-lg-4">
							<div className="single-price">
								<h4>Camping Packages</h4>
								<ul className="price-list">
									<li className="d-flex justify-content-between align-items-center">
										<span>New York</span>
										<a href="#" className="price-btn">$1500</a>
									</li>
									<li className="d-flex justify-content-between align-items-center">
										<span>Maldives</span>
										<a href="#" className="price-btn">$1500</a>
									</li>
									<li className="d-flex justify-content-between align-items-center">
										<span>Sri Lanka</span>
										<a href="#" className="price-btn">$1500</a>
									</li>
									<li className="d-flex justify-content-between align-items-center">
										<span>Nepal</span>
										<a href="#" className="price-btn">$1500</a>
									</li>
									<li className="d-flex justify-content-between align-items-center">
										<span>Thiland</span>
										<a href="#" className="price-btn">$1500</a>
									</li>	
									<li className="d-flex justify-content-between align-items-center">
										<span>Singapore</span>
										<a href="#" className="price-btn">$1500</a>
									</li>														
								</ul>
							</div>
						</div>												
					</div>
				</div>	
			</section>
		


			
			<section className="other-issue-area section-gap p-5">
				<div className="container">
		            <div className="row d-flex justify-content-center">
		                <div className="menu-content pb-70 col-lg-9">
		                    <div className="title text-center pt-5">
		                        <h2 className="text-dark">Other issues we can help you with</h2>
		                        <p className='font pb-3'>We all live in an age that belongs to the young at heart. Life that is.</p>
		                    </div>
		                </div>
		            </div>					
					<div className="row">
						<div className="col-lg-3 col-md-6">
							<div className="single-other-issue">
								<div className="thumb">
									<img className="img-fluid" src={o1} alt=""/>					
								</div>
								<a href="#" className='link'>
									<h4>Rent a Car</h4>
								</a>
								<p>
									The preservation of human life is the ultimate value, a pillar of ethics and the foundation.
								</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-other-issue">
								<div className="thumb">
									<img className="img-fluid" src={bok} alt=""/>					
								</div>
								<a href="#"  className='link'>
									<h4>Cruise Booking</h4>
								</a>
								<p>
									I was always somebody who felt quite sorry for myself, what I had not got compared.
								</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-other-issue">
								<div className="thumb">
									<img className="img-fluid" src={o3} alt=""/>					
								</div>
								<a href="#"  className='link'>
									<h4>To Do List</h4>
								</a>
								<p>
									The following article covers a topic that has recently moved to center stage–at least it seems.
								</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6">
							<div className="single-other-issue">
								<div className="thumb">
									<img className="img-fluid" src={o4} alt=""/>					
								</div>
								<a href="#"  className='link'>
									<h4>Food Features</h4>
								</a>
								<p>
									There are many kinds of narratives and organizing principles. Science is driven by evidence.
								</p>
							</div>
						</div>																		
					</div>
				</div>	
			</section>
			
    
    </>
  )
}

export default Center