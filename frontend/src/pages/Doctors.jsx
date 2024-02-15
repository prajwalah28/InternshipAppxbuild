import React from 'react';
import {doctors} from "../assets/data/doctors.js";
import DoctorCard from "../components/Doctor/DoctorCard.jsx";

function Doctors() {
    return (
        <>
        <section>
            <div>
                <h2>Find a Doctor</h2>
            </div>
            <div>
                <input type="search"/>
                <button>Search</button>
            </div>
        </section>
            <section>
                <div>
                    <div>
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
