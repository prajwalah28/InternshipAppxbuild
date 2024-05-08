import React from 'react'
import {Routes,Route} from  "react-router-dom";
import Home from '../pages/Home';
import Doctors from '../pages/Doctors/Doctors';
import DoctorDetails from '../pages/Doctors/DoctorDetails';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Services from '../pages/Services';
import MyAccount from '../Dashboard/user-account/MyAccount';
import Dashboard from '../Dashboard/doctor-account/Dashboard';
import ProtectedRoute from './ProtectedRoute';
import Payment from '../pages/Payment/Payment';
import Email from '../pages/Email/Email';
import Downloadpdf from '../pages/Downloadpdf/Downloadpdf';


export default function Routers() {
  const person = {
    name: 'John Doe',
    speciality: 'Software Engineer',
    address: '123 Main St, Anytown, USA',
    education: 'BS in Computer Science',
    dob: 'January 1, 1980',
    graduationYear: '2002',
    accomplishments: ['Won a hackathon', 'Published a research paper'],
    experience: [
      {
        company: 'ABC Company',
        title: 'Software Engineer'
      },
      {
        company: 'XYZ Company',
        title: 'Senior Software Engineer'
      }
    ]
  };
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/doctors" element={<Doctors/>}/>
        <Route path="/doctor/:id" element={<DoctorDetails/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/online" element={<Email/>}/>
        <Route path="/download" element={<Downloadpdf person={person}/>}/>
        <Route path="/doctor/:id/payment" element={<Payment/>}/>
        <Route path="/users/profile/me" element={<ProtectedRoute allowedRoles={["patient"]}><MyAccount/></ProtectedRoute>}/>
        <Route path="/doctors/profile/me" element={<ProtectedRoute allowedRoles={["doctor"]}><Dashboard/></ProtectedRoute> }/>
    </Routes>
  )
}
