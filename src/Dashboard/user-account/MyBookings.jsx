import React from 'react'
import useFetchData from '../../hooks/useFetchData';
import { Base_URL } from '../../config';
import DoctorCard from '../../components/Doctor/DoctorCard';
import Loading from '../../components/Loader/Loading';
import Error from '../../components/Error/Error';
export default function MyBookings() {
    const{
        data:appointments,
        loading,
        error,
    }= useFetchData(`${Base_URL}/users/appointments/my-appointments`);
  return (
    <div>
      {loading && !error && <Loading/>}
      {error && !loading && <Error errorMessage={error}/>}
      {!loading && !error && (
        <div>
        {appointments.map(doctor => (
            <DoctorCard doctor={doctor} key={doctor._id}/>
        ))}
        </div>
      )}
      {!loading && !error && appointments.length==0 && (<h2>You did not book any doctor</h2>)}
    </div>
  )
}