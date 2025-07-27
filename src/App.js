
import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  const [currentTab, setCurrentTab] = useState('home');

  let content;
  switch (currentTab) {
    case 'home':
      content = <Home />;
      break;
    case 'projects':
      content = <Projects />;
      break;
    case 'skills':
      content = <Skills />;
      break;
    case 'education':
      content = <Education />;
      break;
    case 'contact':
      content = <Contact />;
      break;
    default:
      content = <Home />;
  }

  return (
    <div className="App">
      <Navigation currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main style={{ padding: '2rem 0', minHeight: '80vh' }}>
        {content}
      </main>
    </div>
  );
}

export default App;
