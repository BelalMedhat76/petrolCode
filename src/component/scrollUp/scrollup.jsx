import React from 'react';
import './scrollup.css';
import { useState,useEffect } from 'react';
import {HiArrowUpCircle} from 'react-icons/hi2'
function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
  
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', toggleVisibility);
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }, []);
  
    return (
      <div className={isVisible ? "scroll-to-top show" : "scroll-to-top"} onClick={scrollToTop}>
       <HiArrowUpCircle/>
      </div>
    );
  }
  
  export default ScrollToTop;
