import React from 'react'
import {services} from "../assets/data/services"
import ServiceCard from '../components/Services/ServiceCard'
import '../components/Services/ServiceList.css'

export default function Services() {
  return (
    <div className='servicelist'>
      {services.map((item,index)=><ServiceCard item={item} index={index}/>)}
    </div>
  )
}
