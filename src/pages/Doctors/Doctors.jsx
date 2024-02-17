import React from 'react';
import {doctors} from "../../assets/data/doctors.js";
import DoctorCard from "../../components/Doctor/DoctorCard.jsx";
import './FindaDoctor.css'
import Testimonial from "../../components/testimonial/Testimonial.jsx";
import DoctorDetails from "./DoctorDetails.jsx";

function Doctors() {
    return (
        <>
            <section className="find">
                <div>
                    <h2>Find a Doctor</h2>
                </div>
                <div>
                    <input type="search" placeholder="Search by doctor name or specification"/>
                    <button>Search</button>
                </div>
            </section>
            <section>
                <div>
                    <div className="doctor-card">
                        {doctors.map((doctor) => (
                            <DoctorCard key={doctor.id} doctor={doctor}/>
                        ))}
                    </div>
                </div>
            </section>
            <Testimonial/>
            <DoctorDetails/>

        </>
    );
}

export default Doctors;
