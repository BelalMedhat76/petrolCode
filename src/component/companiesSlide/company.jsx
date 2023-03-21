import React, { useRef, useState } from "react";
import { Fade } from 'react-reveal';
import './company.css'
// Import Swiper React components
// Import Swiper styles
import "swiper/css/pagination";


// import required modules
import { Grid,Pagination } from "swiper";
import suit from './suit.png'
import comp1 from './comp1.png'
import comp7 from './comp7.png'
import comp3 from './comp3.png'
import comp4 from './comp4.png'

import comp6 from './comp6.png'
import comp5 from './comp5.png'
import iran from './iran.jpg'
import kia from  './kia.jpg'
import toyota from './toyota.jpg'
import peug from './peug.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Navigation } from "swiper";
const Company = () => {

  return (
   <>
  <Swiper
    
       breakpoints={{
         "@0.00": {
           slidesPerView: 1,
           spaceBetween: 10,
         },
         "@0.75": {
           slidesPerView: 2,
           spaceBetween: 20,
         },
         "@1.00": {
           slidesPerView: 3,
           spaceBetween: 40,
         },
         "@1.50": {
           slidesPerView: 4,
           spaceBetween: 50,
         },
       }}
   
       spaceBetween={10}
       loop={true}
       centeredSlides={true}
       autoplay={{
         delay: 2200,
         disableOnInteraction: false,
       }}
       pagination={{
         clickable: true,
       }}
       modules={[Autoplay, Pagination, Navigation]}
      
          style={{ height: "100%", paddingBottom: "80px"}}
          className="mySwiper container  carSlide"

       
        >
          <SwiperSlide className='company-slide'>
            <img src={comp1} alt=""/>
            <p>Petrofix</p>



          </SwiperSlide>
          <SwiperSlide className='company-slide'>
            <img src={comp7} alt=""/>
            <p>Escort</p>



          </SwiperSlide>
          <SwiperSlide className='company-slide' >
          <img src={comp3} alt=""/>
            <p>Pars</p>

          </SwiperSlide>
          <SwiperSlide className='company-slide' >
          <img src={comp5} alt=""/>
            <p>Adnoc</p>

          </SwiperSlide>
          <SwiperSlide className='company-slide' >
          <img src={comp6} alt=""/>
            <p>Lion</p>

          </SwiperSlide>

          <SwiperSlide className='company-slide' >
          <img src={comp4} alt=""/>
            <p>Iranol</p>

          </SwiperSlide>

     
        
          </Swiper>

          <div className="suitableSection ">
            <div className="suitable-rightSide">
              <Fade right delay="1100">
         <img src={suit} alt="" />
         </Fade>
            </div>
            <div className="suitable-leftSide">
              <Fade left delay="1400">
                <h2 style={{color:"blue",fontWeight:"900"
                ,textTransform:"capitalize",
                marginBottom:"20px"
                }} >
                Suitable for a variety of cars
                </h2>
                </Fade>
                <Fade bottom delay="1500">
                <p style={{  marginBottom:"30px"}}>
                Norooz Qeshm Company, considering the needs of all cars in the country, has prioritized all services to meet the needs of the Iranian market, which has made this company one of the most complete companies representing 
                all types of Iranian and foreign engine oils. this company …
                </p>
                </Fade>
                <Swiper
              breakpoints={{
                "@0.00": {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                "@0.75": {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                "@1.00": {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                "@1.50": {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
          
              spaceBetween={20}
              loop={true}
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
             
                 style={{ height: "100%", paddingBottom: "80px" }}
                 className="mySwiper container carSlide"
         
        >
          <SwiperSlide className='suit-slide'>
<img src={kia} alt=""/>


          </SwiperSlide>
          <SwiperSlide className='suit-slide'>
          <img src={peug} alt=""/>



          </SwiperSlide>
          <SwiperSlide className='suit-slide' >
          <img src={toyota} alt=""/>

          </SwiperSlide>
          <SwiperSlide className='suit-slide'>
          <img src={peug} alt=""/>



          </SwiperSlide>
          <SwiperSlide className='suit-slide' >
          <img src={iran} alt=""/>

          </SwiperSlide>
          <SwiperSlide className='suit-slide' >
          <img src={kia} alt=""/>

          </SwiperSlide>
          <SwiperSlide className='suit-slide'>
          <img src={peug} alt=""/>



          </SwiperSlide>
          <SwiperSlide className='suit-slide'>
          <img src={peug} alt=""/>



          </SwiperSlide>
          <SwiperSlide className='suit-slide' >
          <img src={toyota} alt=""/>

          </SwiperSlide>

     
        
          </Swiper>
                </div>
          </div>
   
   </>
  )
}

export default Company;