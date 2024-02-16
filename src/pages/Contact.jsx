import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <div className='contactall'>
    <div className='contactheading'>
    <h1>Contact Us</h1>
      <p>Got a technical issue? Want to send feedback about a beta feature? Let us know.</p>
    </div>
     <div className='contactform'>
      <form>
        <div>
          <label>Email</label><br></br>
          <input type='email' name='email' placeholder='Email' />
        </div>
        <div>
          <label>Subject</label><br></br>
          <input type='text' name='email' placeholder='Subject' />
        </div>
        <div>
          <label>Your Message</label><br></br>
          <textarea type="text" placeholder='Message...'></textarea>
        </div>
      </form>
      <div><button>Submit</button></div>
     </div>
    </div>
    
  )
}
