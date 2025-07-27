
import React from 'react';
import './Projects.css';
import Carousel from './Carousel';
import { projects } from './projectsData';

const Projects = () => (
  <div className="projects-section">
    <Carousel interval={3500} idleInterval={30000}>
      {projects.map((proj, idx) => (
        <div className="project-card" key={idx}>
          <div className="image-section">
            <img src={proj.image} alt={proj.title} />
          </div>
          <div className="content-section">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);

export default Projects;
