import React, { useState, useEffect } from 'react';
import './Contact.css';
import { FaInstagram, FaEnvelope, FaWhatsapp, FaLinkedin, FaTelegram, FaDownload, FaComments } from 'react-icons/fa';


const RESUME_URL = '/resume.pdf'; // Place your resume in public/resume.pdf


// Google Sign-In and Sheet API placeholders
const GOOGLE_CLIENT_ID = '445388236775-hsqgvbkvfomgpd0b36dq2m1duiq54156.apps.googleusercontent.com'; // Fill after setup
const SHEET_API_URL = 'https://sheetdb.io/api/v1/520jn8nvs0qpb'; // Fill after setup

function loadGoogleScript() {
  if (document.getElementById('gsi-client')) return;
  const script = document.createElement('script');
  script.src = 'https://accounts.google.com/gsi/client';
  script.async = true;
  script.id = 'gsi-client';
  document.body.appendChild(script);
}

const Contact = () => {
  const [downloading, setDownloading] = useState(false);
  const [bubbleActive, setBubbleActive] = useState(false);
  const [bubbleExpanded, setBubbleExpanded] = useState(false);

  useEffect(() => {
    loadGoogleScript();
    // Bubble attention effect after 2.5s
    const timer1 = setTimeout(() => {
      setBubbleActive(true);
      setTimeout(() => setBubbleExpanded(true), 700);
      setTimeout(() => setBubbleExpanded(false), 3200);
    }, 2500);
    return () => clearTimeout(timer1);
  }, []);

  // Google Sign-In handler
  const handleGoogleSignIn = () => {
    if (!window.google || !window.google.accounts) {
      alert('Google Sign-In not loaded. Please try again.');
      return;
    }
    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleGoogleResponse,
    });
    window.google.accounts.id.prompt();
  };

  // Google Sign-In callback
  const handleGoogleResponse = async (response) => {
    setDownloading(true);
    // Decode JWT to get user info
    const user = parseJwt(response.credential);
    // user.name, user.email, user.picture
    try {
      // Send to Google Sheet via SheetDB/NoCodeAPI
      await fetch(SHEET_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: [
            {
              name: user.name,
              email: user.email,
              picture: user.picture,
              timestamp: new Date().toISOString(),
            },
          ],
        }),
      });
      // Start download
      const link = document.createElement('a');
      link.href = RESUME_URL;
      link.download = 'Sanjay_Kumar_Dasari_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      alert('Failed to save info. Please try again.');
    }
    setDownloading(false);
  };

  // Helper to decode JWT
  function parseJwt(token) {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return {};
    }
  }

  return (
    <div className="contact-section">
      <div className="resume-bubble-container">
        <div
          className={`resume-bubble${bubbleActive ? ' active' : ''}${bubbleExpanded ? ' expanded' : ''}`}
          onClick={handleGoogleSignIn}
          title="Download Resume"
        >
          {bubbleExpanded && (
            <span className="bubble-text">Resume <FaDownload/></span>
          )}
          {!bubbleExpanded && (
            <FaDownload className="bubble-download-icon"/>
          )}
        </div>
      </div>
      <div className="contact-container">
        <p className="intro-text">Let’s Connect, Collaborate, and Code — crafting better avenir!</p>
        <div className="contact-icons">
          <a className="cta" id="insta" href="https://www.instagram.com/sanjaykumardasari/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a className="cta" id="mail" href="mailto:dsanjaykumar121@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
          <a className="cta" id="wapp" href="https://api.whatsapp.com/send?phone=918500434390&text=Hi%20There!" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a className="cta" id="lin" href="https://www.linkedin.com/in/sanjay-kumar-dasari-b920b7193/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a className="cta" id="tele" href="https://t.me/sanjay2110" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
        </div>
        <div className="resume-info">
          <p style={{marginTop: '2rem', color: '#b3b3b3'}}>For official considerations, my resume is available. Click the chat bubble at top right to download.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
