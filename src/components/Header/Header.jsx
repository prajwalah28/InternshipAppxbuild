import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/avatar-icon.png";
import './Header.css';
import { BiMenu } from 'react-icons/bi';
import {authContext} from "../../context/AuthContext.jsx";

const navLinks = [
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/doctors',
    display:'Find a Doctor'
  },
  {
    path:'/services',
    display:'Services'
  },
  {
    path:'/contact',
    display:'Contact'
  }
];

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);


    const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header>
      <div className='headerall'>
        <div className='headera'>
          <img src={logo} alt='' />
        </div>
        <div className={`nav ${showNavbar ? 'active' : ''}`}>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={link.path} onClick={() => setShowNavbar(false)}>
                  {link.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className='headerb'>
          <img src={avatar} alt='' />
          <Link to="/login">
            <button>Login</button>
          </Link>
          <span  className='bi-menu-icon' onClick={handleShowNavbar}>
            <BiMenu />
          </span>
        </div>
      </div>
    </header>
  );
}
