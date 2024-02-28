import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import React from 'react';
import doctorimg from '../../assets/images/doctor-img01.png';
import './MyAccount.css';
import Profile from './Profile';
import MyBookings from './MyBookings';
import useFetchData from '../../hooks/useFetchData';
import { Base_URL } from '../../config';
import Loading from '../../components/Loader/Loading';
import Error from '../../components/Error/Error';
import {Link} from 'react-router-dom'
function MyAccount() {
    const { dispatch } = useContext(AuthContext);
    const [tab, setTab] = useState('bookings');
    const {
        data: userData,
        loading,
        error,
    } = useFetchData(`${Base_URL}/users/profile/me`);
    console.log(userData, 'userdata');

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
      <div>
      {loading && !error && <Loading/>}
      {error && !loading && <Error errorMessage={error}/>}
      {!loading &&  !error  &&(
          <div className='allside'>
            <div className='leftside'>
                {/* <img src={userData.photo} /> */}
                <img src={doctorimg} />
                <h1>{userData.name}</h1>
                <p>{userData.email}</p>
                {/* <p>Blood Type:</p><p>{userData.bloodType}</p> */}
                <p>{userData.role}</p>
                <div className='allbtn'>
                <Link to="/login">
              <button className='logout' onClick={handleLogout}>Logout</button>
            </Link>
                   <br></br>
                    <button className='delete'>Delete account</button>
                </div>
            </div>
            <div className='rightside'>
                <div>
                    <button
                        onClick={() => setTab("bookings")}
                        className={`${tab === "bookings" ? "active" : ""}`}
                    >My Bookings</button>
                    <button
                        onClick={() => setTab("settings")}
                        className={`${tab === "settings" ? "active" : ""}`}
                    >Profile settings</button>
                </div>
                {tab === 'settings' && <Profile  user={userData}/>}
                {tab === 'bookings' && <MyBookings />}
            </div>
        </div>
        )
      }
      
       
        </div>
    );
}

export default MyAccount;
