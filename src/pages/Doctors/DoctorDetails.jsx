import React, {useState} from 'react'
import Star from '../../assets/images/Star.png';
import DocPhoto from '../../assets/images/doctor-img02.png';
import DoctorAbout from "./DoctorAbout.jsx";
import Feedback from "./Feedback.jsx";

export default function DoctorDetails() {
    const [tab, setTab] = useState('about');
  return (
      <>
          <div className="docDetails">
              <div>
                  <img src={DocPhoto} className="docPhoto"/>
              </div>
              <div className="docname">
            <span className="spanspc
            ">Surgeon</span>
                  <h2>Muhbir Rahman</h2>
                  <img src={Star}/> 4.8 (272)
                  <p>Lorem Ipsum dolor sit amet </p>
              </div>
          </div>

          <div className="AbFeed">
              <div>
                  <button onClick={() => {
                      setTab('about')
                  }}>About
                  </button>
              </div>

              <div>
                  <button onClick={() => {
                      setTab('feedback')
                  }}> Feedback
                  </button>
              </div>
          </div>
          <div className="line"></div>
          <div>
              {tab === 'about' && <DoctorAbout/>}
              {tab === 'feedback' && <Feedback/>}
          </div>
      </>
  )
}
