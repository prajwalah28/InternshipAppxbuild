import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import {RiLinkedinFill} from 'react-icons/ri'
import {AiFillYoutube,AiFillGithub,AiOutlineInstagram, AiFillInstagram} from 'react-icons/ai';
import  './Footer.css';

const socialLinks = [
  {
    path: "",
    icon:<AiFillYoutube/>
  },
  {
    path: "",
    icon:<AiFillGithub/>
  },
  {
    path: "",
    icon:<AiFillInstagram/>
  },
  {
    path: "",
    icon:<RiLinkedinFill/>
  }
];
const quickLinks =[
  {
    path:"/home",
    display:"Home",
  },
  {
    path:"/",
    display:"About Us",
  },
  {
    path:"/services",
    display:"Services"
  },
  {
    path:"/",
    display:"Blog",
  },
];
const quickLinkswant =[
  {
    path:"/home",
    display:"Find a Doctor",
  },
  {
    path:"/",
    display:"Request an Appointment",
  },
  {
    path:"/services",
    display:"Find Location",
  },
  {
    path:"/",
    display:"Get a Opinion",
  },
];
const quickLinksupport =[
  {
    path:"/home",
    display:"Donate",
  },
  {
    path:"/",
    display:"Contact Us",
  },
  
];
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
    <div className='allfooter'>

    
     <div className='col1'>
      <div>
        <div><img src={logo} alt='logo'/></div>
        <p>Copyright @ {year} developed by Codeverse.ai all right reserved.</p>
      </div>
      <div>
        {socialLinks.map((link,index)=>(
          <Link to={link.path} key={index}>{link.icon}</Link>
        ))}
      </div>
     </div>
      <div className="col2">
        <h2>Quick Links</h2>
        <ul>
          {quickLinks.map((item,index)=>
          <li><Link to={item.path}>{item.display}</Link></li>)}
        </ul>
      </div>
      <div className="col3">
        <h2>I want to:</h2>
        <ul>
          {quickLinkswant.map((item,index)=>
          <li><Link to={item.path}>{item.display}</Link></li>)}
        </ul>
      </div>
      <div className="col4">
        <h2>Support</h2>
        <ul>
          {quickLinksupport.map((item,index)=>
          <li><Link to={item.path}>{item.display}</Link></li>)}
        </ul>
      </div>
      </div>
    </footer>
  )
}
