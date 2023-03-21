import React from 'react'
import './about.css';
import { Fade } from 'react-reveal';
import aboutCards from "../../data/db";
const About = () => {
  return (
    <div>

      <div className="aboutSection container">
        {aboutCards.map( about=>(    
                                


        <div className='aboutCard1' key={about.id}>
                     

<img src={about.img}alt="" />

<div className="aboutCard-content">
    <p style={{fontSize:"20px",fontWeight:"900"}}>{about.header}</p>
    <p>{about.content}</p>
    <a href="#" className='readmoreBtn'>ReadMore</a>
   
</div>

        </div>
        ))}
       </div>


    </div>
  )
}

export default About