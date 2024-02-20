import React from 'react'
import { services } from '../../assets/data/services';
import ServiceCard from './ServiceCard';
import './ServiceList.css'

export default function ServiceList() {
  return (
    <div className='servicelist'>
      {services.map((item,index)=><ServiceCard item={item} index={index}/>)}
    </div>
  )
}
