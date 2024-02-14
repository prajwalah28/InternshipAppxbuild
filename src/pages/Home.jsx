import "./Home.css";

import d1 from "../assets/images/doctor-img01.png";
import d2 from "../assets/images/doctor-img02.png";
import d3 from "../assets/images/doctor-img03.png";

export default function Home(params) {
  return (
    <>
      <div className="main_class">
        <div className="class1">
          <div className="one">
            <h1>We help patient live a healthy, longer life</h1>
          </div>
          <div className="two">
            <div className="tone">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
                vero quas repellat quis veniam porro voluptatum, rem consequatur
                quasi ipsam! vero quas repellat quis veniam porro voluptatum,
                rem consequatur quasi ipsam!
              </p>
              <button>Request an Appointment</button>
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
    </>
  );
}