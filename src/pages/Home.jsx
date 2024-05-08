import "./Home.css";

import d1 from "../assets/images/hero-img01.png";
import d2 from "../assets/images/doctor-img02.png";
import d3 from "../assets/images/doctor-img03.png";
import ServiceList from "../components/Services/ServiceList";
import { Link } from "react-router-dom";
import { BiSolidRightArrowCircle } from "react-icons/bi";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import About from "../components/About/About";
import featureImg from "../assets/images/feature-img.png";
import Doctors from "./Doctors";
import Testimonial from "../components/testimonial/Testimonial";
import Faqlist from '../components/Faq/Faqlist';
import FaqImg from '../assets/images/faq-img.png'

import '../components/Faq/Faq.css'
export default function Home(params) {
  return (
    <>
      <div className="main_class">
        <div className="class1">
          <div className="one">
              <h1>We help patient live a healthy & longer life!</h1>
          </div>
          <div className="two">
            <div className="tone">
              <p>
                
              We believe in fostering a compassionate and supportive environment
               for our patients. Our approach to doctor-patient care is rooted in 
                empathy, respect, and trust. We understand that each individual's 
                 health journey is unique, and we prioritize open communication to 
                  ensure that every patient feels heard and understood. From the 
                   moment you walk through our doors, our dedicated team is 
                    committed to providing personalized attention and comprehensive
                     medical support. 

                     </p>
              <button><a href="http://localhost:5173/doctors"  >Request an Appointment</a></button>
            </div>
          </div>
          <div className="three">
            <h2 className="c1">30+</h2>
            <h2 className="c2">15+</h2>
            <h2 className="c3">100%</h2>
          </div>

          <div className="four">
            <h5>Year Of Experience</h5>
            <h5>Clinic location</h5>
            <h5>Patient Satisfaction</h5>
          </div>
        </div>

        <div className="class2">
          <div className="img1">
            <img src={d1} />
          </div>
          <div className="img2">
            <img src={d2} />
            <img src={d3} />
          </div>
        </div>
      </div>
      {/* {/ section2 /} */}
      <div className="main_class2">
      <h2>
              Provide the best medical service
            </h2>
            <p>World-class care for everyone.Our health System offers unmatched,
            expert health care.</p>


          <div className="c2_two">
             <div className="c_img">
              <img src={icon01} />
              <h3>Find Doctor</h3>
              <p>
              Finding a doctor is made simple, with directories at your fingertips, ensuring quality care with every click.
              </p>
              <Link to='/doctors'>
                <BiSolidRightArrowCircle size={40}/>
              </Link>
            </div>
            <div className="c_img">
              <img src={icon02} />
              <h3>Find a Location</h3>
              <p >
              Finding a location is a cinch, with maps guiding the way, ensuring you arrive without delay.
              </p>
              <Link to='/doctors'>
                <BiSolidRightArrowCircle size={40}/>
              </Link>
            </div>
            <div className="c_img">
              <img src={icon03} />
              <h3>Book Appintment</h3>
              <p>
              Booking an appointment is a breeze, just a click away, ensuring your time's spent where it matters most.
              </p>
              <Link to='/doctors'>
                <BiSolidRightArrowCircle size={40}/>
              </Link>
            </div>
            </div>


        </div>

     {/* {/ about section start /} */}
     <About/>
     {/* {/ feature section /} */}

      {/* {/ services /} */}
      <div className="sb">
      <div className="servicesection">
        <h2>Our medical services</h2>
        <p>World-class care for everyone.Our health System offers unmatched,expert health care. </p>
      </div>
      <ServiceList/>
      </div>
      <div className="featureall">
          <div className="feature1">
          <div className="feature1content">
            <h1>Get Virtual Treatment Anytime</h1>
            <ol>
              <li>Schedule the appointment directly</li>
              <li>Search for your physician here, and contact their office.</li>
              <li>View our physicians who accepting new patients,use the <br></br>online scheduling tool to select an appointment time.</li>

            </ol>
            <Link to='/doctors'><button>Learn More</button></Link>
          </div>

          </div>
          <div className="feature2">
            <div className="image"><img src={featureImg} alt=""/></div>
          </div>
        </div>
        {/* {/ our doctors /} */}
        <div>
      <div className="doctors"><h1>Our great doctors</h1>
        <p>World-class care for everyone.Our health system offers unmatched,expert healthcare.</p></div>

      <Doctors/>
      </div>
      {/* {/ faq /} */}
      <section className="faq-header">
              <div className="faq-all">
                  <div className="faqimg">
                      <img src={FaqImg}/>
                  </div>
                  <div className="qq">
                      <h1 className="faq-top">
                          Most questions by our beloved  patients
                      </h1>
                      <div className="list">
                          <Faqlist/>
                      </div>
                  </div>
              </div>


          </section>
{/* {/ testimonials /} */}
          <Testimonial/>
         

    </>
  );
}
