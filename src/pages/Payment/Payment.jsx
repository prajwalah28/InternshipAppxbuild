import React, { useState, useEffect } from 'react';
import './Payment.css';
import qrcode from '../../assets/images/qrcode.jpg'
import success from '../../assets/images/sucessful.jpeg';
import {Link} from 'react-router-dom'

export default function Payment() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showAppointments, setShowAppointments] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSuccess(true);
      setTimeout(() => setShowAppointments(true), 300); // Show appointments button after 30 seconds
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="payment-container">
      {!showSuccess ? (
        <div className="qrcode-container">
          <img src={qrcode} alt="QR Code" />
        </div>
      ) : (
        <div className="qrcode-container success">
          <img src={success} alt="QR Code" />
          <div className="success-message">Payment Successful</div>
        </div>
      )}

      {showAppointments && (
        <div className="appointment-buttons">
          <Link to="/online"><button className="online-appointment-button">Online Appointment</button></Link>
          <Link to="/download"><button className="offline-appointment-button">Offline Appointment</button></Link>
        </div>
      )}
    </div>
  );
}
