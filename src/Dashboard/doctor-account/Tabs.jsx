import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './Tabs.css';
import { BiMenu } from "react-icons/bi";
import { useNavigate, Link } from 'react-router-dom';

export default function Tabs({ tab, setTab }) {
    const { dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
        navigate("/");
    };

    return (
        <div>
            <span>
                <BiMenu />
            </span>
            <div className='allbtn'>
                <button onClick={() => setTab("overview")} className={`${tab === "overview" ? "active" : ""} btn overview`} >Overview</button>
                <button onClick={() => setTab("appointments")} className={`${tab === "appointments" ? "active" : ""} btn overview`} >Appointments</button>
                <button onClick={() => setTab("settings")} className={`${tab === "settings" ? "active" : ""} btn overview`} >Profile</button>
                <Link to="/login" onClick={handleLogout}><button className='logout' >Logout</button></Link>
                <br></br>
                <button className='delete'>Delete account</button>
            </div>
        </div>
    )
}
