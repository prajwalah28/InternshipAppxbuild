import React from 'react';
import Star from '../../assets/Star.png';
import {Link} from "react-router-dom";

function DoctorCard({doctor}) {

    // const {name, avgRating, specialty, totalRating, photo, totalPatients, hospital} = doctor;
    return (
        <>
        <div>
            <div>
                <img src={doctor.photo}/>
            </div>
            <h2>{name}</h2>
            <div>
                <span>{doctor.specialty}
                    <img src={Star} /> {doctor.avgRating}
                </span>
                <span>{doctor.totalRating}</span>
            </div>
            <div>
                <div>
                    <h3>+{doctor.totalPatients} patients</h3>
                    <p>{doctor.hospital}</p>
                </div>
            </div>
        </div>





        </>
    );
}

export default DoctorCard;
