import React from 'react'
import { BiSolidArrowToRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import './ServiceCard.css'

export default function ServiceCard({item,index}) {
    const{name,desc,bgColor,textColor} = item
  return (
    <div className='ServiceCard'>
    <div className='perServiceCard'>
    <h2>{name}</h2>
      <p>{desc}</p>

      <div>
        <Link to="/doctors"><BiSolidArrowToRight/></Link>
        
      </div>
    </div>
      
    </div>
  )
}
