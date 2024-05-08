import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Email.css';

const Email = () => {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [meetingCompleted, setMeetingCompleted] = useState(false);
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [showYesButton, setShowYesButton] = useState(false);
  const [timer, setTimer] = useState(20 * 60); // 20 minutes in seconds

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_jzx2tge', 'template_2vrrf6a', form.current, {
        publicKey: 'HjSM0n8RNs1WeOsuO',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitted(true);
          startTimer();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const startTimer = () => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      setMeetingCompleted(true);
      setShowYesButton(true);
    }, 2000); // 20 minutes in milliseconds
  };

  const handleDownload = () => {
    // Logic to download the perception
    console.log('Download perception');
  };

  useEffect(() => {
    if (meetingCompleted) {
      // Scroll to the bottom of the page when meeting completed
      window.scrollTo(0, document.body.scrollHeight);
    }
  }, [meetingCompleted]);

  return (
    <>
      {!submitted ? (
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="from_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      ) : (
        <div className="message">
          {meetingCompleted ? (
            <>
              <p>Your meeting completed.</p>
              {showYesButton && !showDownloadButton && (
                <button onClick={() => 
                  setShowDownloadButton(true) 
                 }>Yes</button>
              )}
              {showDownloadButton && (
                <button onClick={handleDownload}>
  <a href="https://drive.google.com/drive/folders/13wHsQJW29ocHylHWbEjCa32krviVzOyx?usp=sharing" target="_blank" rel="noopener noreferrer">
    Download Perception
  </a>
</button>
              )}
            </>
          ) : (
            <>
              <p>Join from this link for your appointment:</p>
              <a href="https://meet.google.com/qie-ifww-biy" target="_blank" rel="noopener noreferrer">https://meet.google.com/qie-ifww-biy</a>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Email;
