import React from 'react';
import './Home.css';
import profilePic from '../assets/linedp1.png'; // Place your image in src/assets/profile.png

const Home = () => (
  <div className="home-container">
    <img src={profilePic} alt="Sanjay Kumar Dasari" className="profile-pic" />
    <div className="home-text">
      <h1>Sanjay Kumar Dasari</h1>
      <h2>Software Developer</h2>
      <p className="tagline">"Crafting Tomorrow, One Line of Code at a Time."</p>
      <p className="greeting">👋 Hi there! I’m glad you’re here!</p>
    </div>
  </div>
);

export default Home;
