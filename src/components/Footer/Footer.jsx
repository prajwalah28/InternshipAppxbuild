import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import {RiLinkedinFill} from 'react-icons/ri'
import {AiFillYoutube,AiFillGithub,AiOutlineInstagram} from 'react-icons/ai';

const socialLinks = [
  {
    path: "",
    icon:<AiFillYoutube/>
  }
];
const quickLinks =[
  {
    path:"/",
    display:"Find a doctor",
  }
]
export default function Footer() {
  return (
    <div>
      Foote
    </div>
  )
}
