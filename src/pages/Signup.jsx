import React, { useState } from 'react';
import avatar from '../assets/images/doctor-img01.png';
import { Link ,useNavigate} from 'react-router-dom';
import signup from '../assets/images/signup.webp';
import './Signup.css';
import uploadImageToCloudinary from '../utils/uploadCloudinary';
import {Base_URL} from "../config";
import {toast} from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader'
export default function Signup() {
  
  const [selectedFile,setSelectedFile] = useState("");
  const[previewUrl,setPreviewURL]=useState(false);
  const[loading,setLoading] = useState(false)
  

  const [formdata, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo:selectedFile,
    role: '',
    gender: ''
  });

  const navigate = useNavigate()
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
      const res = await fetch(`${Base_URL}/auth/register`,{
        method:'post',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formdata)
      })
      const {message} = await res.json()
      if(!res.ok){
        throw new Error(message)
    }
    setLoading(false)
    toast.success(message)
    navigate('/login')

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
      <div className='signup1'><img src={signup} alt='' /></div>
      <div className='signup2'>
        <form  onSubmit={submitHandler}> 
          <div><h1>Fullname:</h1>
            <input type='text' name='name' value={formdata.name} onChange={handelInputChange} />
          </div>
          <div><h1>Email:</h1>
            <input type='email' name='email' value={formdata.email} onChange={handelInputChange} />
          </div>
          <div><h1>Password:</h1>
            <input type='password' name='password' value={formdata.password} onChange={handelInputChange} />
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
  {selectedFile && <img src={previewUrl} alt='Avatar' width="62" height="62" style={{ border: '1px solid black', borderRadius: '50%' }} />} <br />
  <input type='file' name='photo' id='customFile' accept='.jpg,.png' onChange={handelFileInputChange} />
</div>
          <div><button
          disabled = {loading && true}
          >{loading ? (<HashLoader size={35} color='#ffffff'/>) : ("Sign up")}</button></div>
          <p>Already have an account ? <Link to='/login'>Login</Link></p>

        </form>

      </div>
    </div>
  );
}
