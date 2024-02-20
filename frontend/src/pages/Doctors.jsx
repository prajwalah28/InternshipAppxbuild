import React from 'react';
import {doctors} from "../assets/data/doctors.js";
import DoctorCard from "../components/Doctor/DoctorCard.jsx";
import './FindaDoctor.css'

function Doctors() {
    return (
        <>
       
            <section>
                <div>
                    <div className="doctor-card">
                        {doctors.map((doctor) => (
                            <DoctorCard key={doctor.id} doctor={doctor}/>
                        ))}
                    </div>
                </div>
            </section>

        </>
    );
}

export default Doctors;
