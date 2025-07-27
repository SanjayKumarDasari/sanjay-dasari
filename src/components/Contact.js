import React from 'react';
import './Contact.css';
import { FaInstagram, FaEnvelope, FaWhatsapp, FaLinkedin, FaTelegram } from 'react-icons/fa';

const Contact = () => (
  <div className="contact-section">
    <div className="contact-container">
      <p className="intro-text">Let’s Connect, Collaborate, and Code — crafting better avenir!</p>
      <div className="contact-icons">
        <a className="cta" id="insta" href="https://www.instagram.com/sanjaykumardasari/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a className="cta" id="mail" href="mailto:dsanjaykumar121@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
        <a className="cta" id="wapp" href="https://api.whatsapp.com/send?phone=918500434390&text=Hi%20There!" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
        <a className="cta" id="lin" href="https://www.linkedin.com/in/sanjay-kumar-dasari-b920b7193/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a className="cta" id="tele" href="https://t.me/sanjay2110" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
      </div>
    </div>
  </div>
);

export default Contact;
