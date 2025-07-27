import React from 'react';
import './Education.css';
import { educations } from './educationData';

const Education = () => (
  <div className="education-container">
    {educations.map((ed, idx) => (
      <div className="education-card" key={idx}>
        <div className="image-section">
          <img src={ed.image} alt={ed.institution} />
        </div>
        <div className="content-section">
          <h3>{ed.title}</h3>
          <p>{ed.institution} <br/>
             {ed.year} </p>
          <div className="year-badge">{ed.grade}</div>
        </div>
      </div>
    ))}
  </div>
);

export default Education;
