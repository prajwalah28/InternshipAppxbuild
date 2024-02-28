import React, { useEffect } from 'react'
import  { useState } from 'react';

import { Link ,useNavigate} from 'react-router-dom';

import signup from '../../assets/images/signup.webp'
import '../../pages/Signup.css';
import uploadImageToCloudinary from '../../utils/uploadCloudinary';
import {Base_URL,token} from "../../config";
import {toast} from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader'
export default function Profile({user}) {
    const [selectedFile,setSelectedFile] = useState("");
    
    const[loading,setLoading] = useState(false)
    
  
    const [formdata, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      photo:selectedFile,
      role: '',
      gender: '',
      bloodType:''
    });
  
    const navigate = useNavigate()
    useEffect(()=>{
        setFormData({name: user.name,email:user.email,photo:user.photo,gender:user.gender,bloodType:user.bloodType});
    },[user]);
    const handelInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formdata, [name]: value });
    };
    const handelFileInputChange = async(event)=> {
      const file = event.target.files[0];
      const data = await uploadImageToCloudinary(file);
      setPreviewURL(data.url);
      setSelectedFile(data.url);
      setFormData({...formdata,photo:data.url})
    }
   
    const submitHandler = async event => {
      
      event.preventDefault();
      setLoading(true)
      try{
        const res = await fetch(`${Base_URL}/users/${user._id}`,{
          method:'put',
          headers:{
            'Content-Type':'application/json',
            Authorization:`Bearer ${token}`
          },
          body:JSON.stringify(formdata)
        })
        const {message} = await res.json()
        if(!res.ok){
          throw new Error(message)
      }
      setLoading(false)
      toast.success(message)
      navigate('/users/profile/me')
  
    }
      catch(err){
        toast.error(err.message)
        setLoading(false);
      }
      console.log(formdata)
      console.log(message)
    }
  return (
    <div className='signupall'>
     
      <div className='signup2'>
        <form  onSubmit={submitHandler}> 
          <div><h1>Fullname:</h1>
            <input type='text' name='name' value={formdata.name} onChange={handelInputChange} />
          </div>
          <div><h1>Email:</h1>
            <input type='email' name='email' value={formdata.email} onChange={handelInputChange} />
          </div>
          
          
          <div>
            <label>Are you a:</label>
            <select name='role' value={formdata.role} onChange={handelInputChange}>
              <option value=''>Select</option>
              <option value='patient'>Patient</option>
              <option value='doctor'>Doctor</option>
            </select>
            <label>Gender:</label>
            <select name='gender' value={formdata.gender} onChange={handelInputChange}>
              <option value=''>Select</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='other'>Other</option>
            </select>
          </div>
          <div>
  {formdata.photo && <img src={formdata.photo} alt='Avatar' width="62" height="62" style={{ border: '1px solid black', borderRadius: '50%' }} />} <br />
  <input type='file' name='photo' id='customFile' accept='.jpg,.png' onChange={handelFileInputChange} />
  {/* <label>{selectedFile? selectedFile.name : 'Upload photo'}</label> */}
</div>
          <div><button
          disabled = {loading && true}
          >{loading ? (<HashLoader size={35} color='#ffffff'/>) : ("Update")}</button></div>
          

        </form>

      </div>
    </div>
  )
}
