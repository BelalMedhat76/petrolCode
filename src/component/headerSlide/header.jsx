import React from "react";
import { Fade } from "react-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../imgs/img1.png";
import img2 from "../../imgs/img2.png";
import img3 from "../../imgs/img3.png";
import img4 from "../../imgs/img4.png";
import icon1 from "../../imgs/icon1.png";
import icon2 from "../../imgs/icon2.png";
import icon4 from "../../imgs/icon4.png";

import "swiper/css";
import "swiper/css/navigation";

import "./header.css";
import Navbar from "../Navbar";
// import required modules
import { Navigation } from "swiper";
import Search from "./search";
import SwiperCore, { Autoplay } from "swiper";
import Company from "../companiesSlide/company";
import About from "../about/about";

const Head = () => {
  SwiperCore.use([Autoplay]);

  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        className="mySwiper "
      >
        <Navbar />
        <SwiperSlide id="slide1">
          <div className="slideContainer">
            <div className="leftSide">
              
            <Fade left delay="1200">
                  <img src={icon1} className="icon1" alt="" />
                  <p>
                    Lion
                    <br />
                    Lubricants
                  </p>
             </Fade>
            
            </div>
            <div className="rightSide">   <Fade right delay="1200">

              <img src={img1} className="img1" alt="" />
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="slide2">
          <div className="slideContainer">
            <div className="leftSide">
            <Fade left delay="1200">
                  <img src={icon2} className="icon2" alt="" />
                  <p>
                    Petrofix
                    <br />
                    2Stroke
                  </p>
             </Fade>
            </div>
            <div className="rightSide">
            <Fade right delay="1200">
              <img src={img2} className="img2" alt="" />
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="slide3">
          <div className="slideContainer">
            <div className="leftSide">
            <Fade left delay="1200">

                  <p>
                    diesel
                    <br />
                    oil
                  </p>
             </Fade>
            </div>
            <div className="rightSide">
            <Fade right delay="1200">

              <img src={img3} className="img3" alt="" />
              </Fade>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide id="slide4">
          <div className="slideContainer">
            <div className="leftSide">
            <Fade left delay="1200">

                  <img src={icon4} className="icon4" alt="" />

                  <p>
                    Escort
                    <br />
                    Lubricants
                  </p>
           </Fade>
            </div>
            <div className="rightSide">
            <Fade right delay="1200">

              <img src={img4} className="img4" alt="" />
              </Fade>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Search/>
      <Company/>
      <About/>
    </>
  );
};

export default Head;
