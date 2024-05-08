import React, { useState } from 'react';
import { doctors } from "../../assets/data/doctors.js";
import DoctorCard from "../../components/Doctor/DoctorCard.jsx";
import './FindaDoctor.css'
import Testimonial from "../../components/testimonial/Testimonial.jsx";
import DoctorDetails from "./DoctorDetails.jsx";

function Doctors() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredDoctors = doctors.filter(doctor =>
        doctor.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <>
            <section className="find">
                <div>
                    <h2>Find a Doctor</h2>
                </div>
                <div>
                    <input type="search" placeholder="Search by doctor name" onChange={handleSearchInputChange} />
                    <button>Search</button>
                </div>
            </section>
            <section>
                <div>
                    <div className="doctor-card">
                        {filteredDoctors.map((doctor) => (
                            <DoctorCard key={doctor.id} doctor={doctor} />
                        ))}
                    </div>
                </div>
            </section>
            <Testimonial />
        </>
    );
}

export default Doctors;
