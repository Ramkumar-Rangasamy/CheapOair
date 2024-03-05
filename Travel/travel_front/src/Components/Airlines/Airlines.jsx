import React,{useEffect} from 'react';
import './airline.css';
import srt1 from './Assets/srt-1.jpg';
import srt2 from './Assets/srt-2.png';
import srt3 from './Assets/srt-3.png';
import srt4 from './Assets/srt-4.png';
import srt5 from './Assets/srt-5.png';
import srt6 from './Assets/srt-6.png';


import Aos from "aos"
import 'aos/dist/aos.css'

const Airlines = () => {

  useEffect(()=>{
    Aos.init();
   },[])
  return (
    <>
      <div className='srt-banner m-3'>

       <div className='row no-gutters p-4'>
        <div className='col-lg-4 col-md-4  p-3 ' data-aos="fade-right">
            <span className='text-white srt-banner__heading '>Need help booking? Our agents are Ready!</span>
            <span className='srt-banner__text '>Call us 24/7 at 000-800-050-3540</span>
          </div>

          <div className='col-lg-8 col-md-8 col-xs-12 p-3'>
            <div className='row airline-list'>
              <div className='col col-md-4 col-lg-2'>
                <img src={srt1} width='103' height='46' alt='Hawaiian Airlines' data-aos="fade-up"/>
                <br/>
                <p className='pt-3'>Hawaiian Airlines</p>
              </div>
              <div className='col col-md-4 col-lg-2'>
                <img src={srt2} width='103' height='46' alt='JetBlue Airways' data-aos="fade-up"/>
                <br/>
                <p className='pt-3'>JetBlue Airways</p>
              </div>
              <div className='col col-md-4 col-lg-2'>
                <img src={srt3} width='103' height='46' alt='Turkish Airways' data-aos="fade-up"/>
                <br/>
                <p className='pt-3'>Turkish Airways</p>
              </div>
              <div className='col col-md-4 col-lg-2'>
                <img src={srt4} width='103' height='46' alt='Avelo Airways' data-aos="fade-up"/>
                <br/>
                <p className='pt-3'>Avelo Airways</p>
              </div>
              <div className='col col-md-4 col-lg-2'>
                <img src={srt5} width='103' height='46' alt='Berrze Airways' data-aos="fade-up"/>
                <br/>
                <p className='pt-3'>Berrze Airways</p>
              </div>
              <div className='col col-md-4 col-lg-2'>
                <img src={srt6} width='103' height='46' alt='Frontier Airliner' data-aos="fade-up"/>
                <br/>
                <p className='pt-3'>Frontier Airliner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Airlines;
