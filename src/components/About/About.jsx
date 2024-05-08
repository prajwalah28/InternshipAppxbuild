import React from 'react'
import aboutImg from '../../assets/images/about.png';
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom';
import './About.css'

export default function About() {
  return (
    <div className='aboutall'>
    <div className='aboutimg'>
    <div className='aboutimg1'><img src={aboutImg} alt=''/></div>
     
     <div className='aboutimg2'><img src={aboutCardImg} alt=''/></div>
     
    </div>
{/* {/ about content /} */}
      <div className="mc32">
            <h1>Proud to be one of the nations best</h1>
            <p>
            Our doctors are the best because they embody excellence <br/>
             in every aspect of patient care. With extensive medical <br/>
            training, years of experience, and a passion for healing, <br/>
             they are dedicated to staying at the forefront of <br/>
            medical advancements to provide the highest quality <br/>
             care possible. Beyond their expertise, our doctors <br/>
            possess a genuine commitment to their patients. <br/>
            well-being, taking the time to listen attentively,<br/>
             answer questions thoroughly, and develop personalized <br/>
             treatment plans tailored to each individual's needs.
             </p> 

                <Link to='/'> <button>Learn More</button></Link>
          </div>
    </div>
  )
}
