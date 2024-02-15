import React from 'react';
import Star from '../../assets/images/Star.png';
import {Link} from "react-router-dom";
import '../../pages/FindaDoctor.css'
import { GoArrowRight } from "react-icons/go";

function DoctorCard({doctor}) {

    const {name, avgRating, specialty, totalRating, photo, totalPatients, hospital} = doctor;
    return (
        <>
        <div className="doctor-card">
            <div>
                    <img src={photo}/>

                <h2>{name}</h2>

                <div className="rating">
                <span className="spansp">{specialty}</span>
                    <span className="rate-text"> <img src={Star}/> {avgRating} ({totalRating})
                </span>
                </div>

                <div className="flexc">
                <span><h3>+{totalPatients} patients</h3>
                        <p>{hospital}</p>
                    </span>
                    <button><GoArrowRight /></button>
                </div>

                </div>
            </div>



        </>
    );
}

export default DoctorCard;
