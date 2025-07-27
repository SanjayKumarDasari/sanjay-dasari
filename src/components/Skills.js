import React from 'react';
import './Skills.css';
import { skills } from './skillsData';
import { FaJava, FaPython, FaJsSquare, FaSeedling, FaAngular, FaReact, FaDatabase, FaGitAlt, FaTools, FaCode, FaPaintBrush } from 'react-icons/fa';

const iconMap = {
  FaJava: <FaJava />,
  FaPython: <FaPython />,
  FaJsSquare: <FaJsSquare />,
  FaSeedling: <FaSeedling />,
  FaAngular: <FaAngular />,
  FaReact: <FaReact />,
  FaDatabase: <FaDatabase />,
  FaGitAlt: <FaGitAlt />,
  FaTools: <FaTools />,
  FaCode: <FaCode />,
  FaPaintBrush: <FaPaintBrush />,
};

const Skills = () => (
  <div className="skills-section">
    {skills.map((cat) => (
      <div className="skills-category" key={cat.category}>
        <div className="skills-category-title">{cat.category}</div>
        <div className="skills-grid">
          {cat.items.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-icon">{iconMap[skill.icon]}</div>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Skills;
