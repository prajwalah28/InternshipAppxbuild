import { doctors } from '../../assets/data/doctors.js';
import DoctorCard from './DoctorCard.jsx';

import React from 'react';

function DoctorList() {
    return (
        <div>
            {doctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
            ))};
        </div>
    );
}

export default DoctorList;
