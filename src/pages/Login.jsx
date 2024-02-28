import React, { useState ,useContext} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import './Login.css'
import loginimage from '../assets/images/pexels-photo-4047186.webp'
import {Base_URL} from "../config";
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext.jsx';
import HashLoader from "react-spinners/HashLoader"
export default function Login() {

  const[formdata,setFormData] = useState({
    email:'',
    password:''
  })
  const[loading,setLoading] = useState(false);

  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext);
  const handelInputChange = r=>{
    setFormData({...formdata,[r.target.name]:r.target.value})
  };

  const submitHandler = async event => {
    
    event.preventDefault();
    setLoading(true)
    try{
      const res = await fetch(`${Base_URL}/auth/login`,{
        method:'post',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formdata)
      })
      const result = await res.json()
      if(!res.ok){
        throw new Error(result.message)
    }
    dispatch({type:"LOGIN_SUCCESS",
    payload:{
      user:result.data,
      token:result.token,
      role:result.role,
    },
  });
  console.log(result,"login data");
    setLoading(false)
    toast.success(result.message)
    navigate('/home')

  }
    catch(err){
      toast.error(err.message)
      setLoading(false);
    }
    console.log(formdata)
   
  }
  return (
    <div className='containerall'>
    <div className='container1'><img src={loginimage}/></div>
    <div className="container2">
    <h1>Welcome to +MediCare</h1>
    
      <form onSubmit={submitHandler}>
        <div>
          <h1>Email:</h1>
          <input type='text' name='email' value={formdata.email} onChange={handelInputChange} />
         </div>
         <div>
          <h1>Password:</h1>
          <input type='password'  name='password' value={formdata.password} onChange={handelInputChange}/>
         </div>
         <div><button>{loading ? <HashLoader/> : 'Login'}</button></div>
         <p>Don't have an account ? <Link to='/signup'>Register</Link></p>
      </form>
    </div>
    </div>
  )
}
