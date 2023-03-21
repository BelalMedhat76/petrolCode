import React from 'react'
import './footer.css'
import footerLogo from './footerLogo.png'
import {GrLocation} from 'react-icons/gr'
import {BiPhoneCall} from 'react-icons/bi'
import { AiOutlineMail} from 'react-icons/ai'

const Footer = () => {

  return (
   <div className='footer'>
   <div className="footerContent ">
<img src={footerLogo} alt="" />
<p>Norooz Qeshm Company entered the field in 2000 with the aim of exporting and importing various types of Iranian and </p>
<p>foreign engine oils and was able to gain a worthy position in this field in a short period of time.</p>
<div className="contactIcons-footer">
  <span>  <GrLocation style={{marginRight:"10px",fontSize:"30px",color:"black"}}/> Dargahan, Qeshm Island, Iran</span>
  <span> <BiPhoneCall style={{marginRight:"10px",fontSize:"30px",color:"black"}}/> <a href="tel:07635262268" style={{textDecoration:"none",color:"black"}}>07635262268</a></span>
  <span> <AiOutlineMail style={{marginRight:"10px",fontSize:"30px",color:"black"}}/> 
  <a href="mailto:info@noroozqeshm.ir" style={{textDecoration:"none",color:"black"}}>info@noroozqeshm.ir</a>
</span>
</div>
   </div>
   
   <div className="copyRight">
    <p>noroozqeshm.ir - Copyright © 2023 - All rights reserved </p>
   </div>
   </div>
  )
}

export default Footer;