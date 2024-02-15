
import './App.css'
import Doctors from "./pages/Doctors.jsx";
import Testimonial from "./components/testimonial/Testimonial.jsx";
import Faqlist from "./components/Faq/Faqlist.jsx";
import FaqImg from './assets/faq-img.png'
import './components/Faq/Faq.css'


function App() {

  return (
      <>
          <Doctors/>
          <Testimonial/>

          <section className="faq-header">
              <div className="faq-all">
                  <div>
                      <img src={FaqImg}/>
                  </div>
                  <div>
                      <h2 className="faq-top">
                          Most questions by our beloved <br/> patients
                      </h2>
                      <div className="list">
                          <Faqlist/>
                      </div>
                  </div>
              </div>


          </section>

      </>
  )
}

export default App
