import React from 'react';
import { FaHome, FaProjectDiagram, FaTools, FaGraduationCap, FaEnvelope, FaReact } from 'react-icons/fa';
import './Navigation.css';

const tabs = [
  { name: 'Home', icon: <FaHome />, path: 'home' },
  { name: 'Projects', icon: <FaProjectDiagram />, path: 'projects' },
  { name: 'Skills', icon: <FaTools />, path: 'skills' },
  { name: 'Education', icon: <FaGraduationCap />, path: 'education' },
  { name: 'Experience', icon: <FaReact />, path: 'experience' },
  { name: 'Contact', icon: <FaEnvelope />, path: 'contact' },
];

const Navigation = ({ currentTab, setCurrentTab }) => (
  <nav className="navigation">
    {tabs.map(tab => (
      <button
        key={tab.name}
        className={currentTab === tab.path ? 'active' : ''}
        onClick={() => setCurrentTab(tab.path)}
        aria-label={tab.name}
      >
        {tab.icon}
        <span className="tab-label">{tab.name}</span>
      </button>
    ))}
  </nav>
);

export default Navigation;
