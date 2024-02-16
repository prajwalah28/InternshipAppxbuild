import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import loginimage from '../assets/images/pexels-photo-4047186.webp'

export default function Login() {

  const[formdata,setFormData] = useState({
    email:'',
    password:''
  })
  const handelInputChange = r=>{
    setFormData({...formdata,[r.target.name]:r.target.value})
  }
  return (
    <div className='containerall'>
    <div className='container1'><img src={loginimage}/></div>
    <div className="container2">
    <h1>Welcome to +MediCare</h1>
    
      <form>
        <div>
          <h1>Email:</h1>
          <input type='text' name='email' value={formdata.email} onChange={handelInputChange} />
         </div>
         <div>
          <h1>Password:</h1>
          <input type='password'  name='password' value={formdata.password} onChange={handelInputChange}/>
         </div>
         <div><button>Login</button></div>
         <p>Don't have an account ? <Link to='/signup'>Register</Link></p>
      </form>
    </div>
    </div>
  )
}
