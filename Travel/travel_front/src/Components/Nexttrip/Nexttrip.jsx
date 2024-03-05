import React,{useEffect} from 'react';

import './nexttrip.css'

import card1 from './Assets/card-1.jpg'
import card2 from './Assets/card-2.jpg'
import card3 from './Assets/card-3.jpg'
import card4 from './Assets/card-4.jpg'
import card5 from './Assets/card-5.jpg'
import card6 from './Assets/card-6.jpg'


import Aos from "aos"
import 'aos/dist/aos.css'

const Nexttrip = () => {

    useEffect(()=>{
        Aos.init();
       },[])

  return (
   <>

<section className="destinations-area section-gap">
                <div className="container">	
                       <div className="row d-flex justify-content-center">
                            <div className="menu-content pt-4 col-lg-12">
                                <div className="color-destinations text-center">
                                    <h1 className="">Popular Destinations</h1>
                                    <p className='small-size'>We all live in an age that belongs to the young at heart. Life that is becoming extremely fast, day to.</p>
                                </div>
                            </div>
                        </div>      

                   					
					<div className="row pt-4"  data-aos="zoom-out-right">

						<div className="col-lg-4 ">
							<div className="single-destinations">
								<div className="thumb">
									<img src={card1} alt=""/>
								</div>
								<div className="details">
									<h5>Holiday Sea beach Blue Ocean</h5>
									<p>
										United staes of America
									</p>
									<ul className="package-list pl-1 pr-2">
										<li className="d-flex justify-content-between align-items-center">
											<span>Duration</span>
											<span>06 days and 7 nights</span>
										</li>
										<li className="d-flex justify-content-between align-items-center">
											<span>Date</span>
											<span>18.04.2024</span>
										</li>
										<li className="d-flex justify-content-between align-items-center">
											<span>Airport</span>
											<span>Changi</span>
										</li>
										<li className="d-flex justify-content-between align-items-center">
											<span>Extras</span>
											<span>All Inclusive</span>
										</li>
										<li className="d-flex justify-content-between align-items-center">
											<span>Price per person</span>
											<a href="#" className="price-btn">$300</a>
										</li>													
									</ul>
								</div>
							</div>
						</div>

						<div className="col-lg-4"  data-aos="zoom-out-right">
							<div className="single-destinations">
								<div className="thumb">
									<img src={card2} alt=""/>
								</div>
								<div className="details">
									<h5>Holiday Sea beach Blue Ocean</h5>
									<p>
										United staes of America
									</p>
									<ul className="package-list pl-1 pr-2">
										<li className="d-flex justify-content-between align-items-center">
											<span>Duration</span>
											<span>06 days and 7 nights</span>
										</li>
										<li className="d-flex justify-content-between align-items-center">
											<span>Date</span>
											<span>24.04.2024</span>
										</li>
										<li className="d-flex justify-content-between align-items-center">
											<span>Airport</span>
											<span>Changi</span>
										</li>
										<li className="d-flex justify-content-between align-items-center">
											<span>Extras</span>
											<span>All Inclusive</span>
										</li>
										<li className="d-flex justify-content-between align-items-center">
											<span>Price per person</span>
											<a href="#" className="price-btn">$400</a>
										</li>													
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4"  data-aos="zoom-out-right">
							<div className="single-destinations">
								<div className="thumb">
									<img src={card3} alt=""/>
								</div>
								<div className="details">
									<h5>Holiday Sea beach Blue Ocean</h5>
									<p>
										United staes of America
									</p>
									<ul className="package-list pl-1 pr-2">
										<li className="d-flex justify-content-between align-items-center">
											<span>Duration</span>
											<span>06 days and 7 nights</span>
										</li>
										<li className="d-flex justify-content-between align-items-center">
											<span>Date</span>
											<span>16.03.2024</span>
										</li>
										<li className="d-flex justify-content-between align-items-center">
											<span>Airport</span>
											<span>Changi</span>
										</li>
										<li className="d-flex justify-content-between align-items-center">
											<span>Extras</span>
											<span>All Inclusive</span>
										</li>
										<li className="d-flex justify-content-between align-items-center">
											<span>Price per person</span>
											<a href="#" className="price-btn">$250</a>
										</li>													
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4" data-aos="zoom-out-left">
							<div className="single-destinations">
								<div className="thumb">
									<img src={card4} alt=""/>
								</div>
								<div className="details">
									<h5>Holiday Sea beach Blue Ocean</h5>
									<p>
										United staes of America
									</p>
									<ul className="package-list pl-1 pr-2">
										<li className="d-flex justify-content-between align-items-center">
											<span>Duration</span>
											<span>06 days and 7 nights</span>
										</li>
										<li className="d-flex justify-content-between align-items-center">
											<span>Date</span>
											<span>15.04.2024</span>
										</li>
										<li className="d-flex justify-content-between align-items-center">
											<span>Airport</span>
											<span>Changi</span>
										</li>
										<li className="d-flex justify-content-between align-items-center">
											<span>Extras</span>
											<span>All Inclusive</span>
										</li>
										<li className="d-flex justify-content-between align-items-center">
											<span>Price per person</span>
											<a href="#" className="price-btn">$500</a>
										</li>													
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4" data-aos="zoom-out-left">
							<div className="single-destinations">
								<div className="thumb">
									<img src={card5} alt=""/>
								</div>
								<div className="details">
									<h5>Holiday Sea beach Blue Ocean</h5>
									<p>
										United staes of America
									</p>
									<ul className="package-list pl-1 pr-2">
										<li className="d-flex justify-content-between align-items-center">
											<span>Duration</span>
											<span>06 days and 7 nights</span>
										</li>
										<li className="d-flex justify-content-between align-items-center">
											<span>Date</span>
											<span>20.04.2024</span>
										</li>
										<li className="d-flex justify-content-between align-items-center">
											<span>Airport</span>
											<span>Changi</span>
										</li>
										<li className="d-flex justify-content-between align-items-center">
											<span>Extras</span>
											<span>All Inclusive</span>
										</li>
										<li className="d-flex justify-content-between align-items-center">
											<span>Price per person</span>
											<a href="#" className="price-btn">$254</a>
										</li>													
									</ul>
								</div>
							</div>
						</div>
						<div className="col-lg-4" data-aos="zoom-out-left">
							<div className="single-destinations">
								<div className="thumb">
									<img src={card6} alt=""/>
								</div>
								<div className="details">
									<h5>Holiday Sea beach Blue Ocean</h5>
									<p>
										United staes of America
									</p>
									<ul className="package-list pl-1 pr-2">
										<li className="d-flex justify-content-between align-items-center">
											<span>Duration</span>
											<span>06 days and 7 nights</span>
										</li>
										<li className="d-flex justify-content-between align-items-center">
											<span>Date</span>
											<span>23.03.2024</span>
										</li>
										<li className="d-flex justify-content-between align-items-center">
											<span>Airport</span>
											<span>Changi</span>
										</li>
										<li className="d-flex justify-content-between align-items-center">
											<span>Extras</span>
											<span>All Inclusive</span>
										</li>
										<li className="d-flex justify-content-between align-items-center">
											<span>Price per person</span>
											<a href="#" className="price-btn">$150</a>
										</li>													
									</ul>
								</div>
							</div>
						</div>																														
					</div>
				</div>	
			</section>
   
   </>
  )
}

export default Nexttrip