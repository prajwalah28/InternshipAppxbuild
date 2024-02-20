import React from 'react';
import './Feedback.css'
import {toast} from "react-toastify";


function Sidepanel({doctorId, ticketPrice, timeSlots }) {
    const bookingHandler = async() => {
        try {
            const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`,
                {
                    method: 'post',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message + 'Please try again')
            }

            if (data.session.url) {
                window.location.href = data.session.url
            }

        } catch (err) {
            toast.error(err.message)

        }



    }

    return (
        <div className="ticket">
            <div className="flex1">
                <div><p>
                    Ticket price
                </p></div>

                <div><h3>500 Rs</h3></div>
            </div>

            <div className="second">
                <h4>
                    Available Time Slots:
                </h4>
                <div className="flex-all">
                    <div className="flex-row1">
                        <div><p>Monday</p></div>
                        <div><p>4:00 PM - 9:30 PM</p></div>
                    </div>
                    <div className="flex-row1">
                        <div><p>Wednesday</p></div>
                        <div><p>4:00 PM - 9:30 PM</p></div>
                    </div>
                    <div className="flex-row1">
                        <div><p>Thursday</p></div>
                        <div><p>4:00 PM - 9:30 PM</p></div>
                    </div>
                    <div className="flex-row1">
                        <div><p>Friday</p></div>
                        <div><p>4:00 PM - 9:30 PM</p></div>
                    </div>
                </div>
                <div className="appointment">
                    <button onClick={bookingHandler}>Book Appointment</button>
                </div>
            </div>
        </div>
    );
}

export default Sidepanel;
