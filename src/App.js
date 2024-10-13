import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('projects');

  return (
    <div className="App">
      <Header />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="container">
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'contact' && <Contact />}
        {activeSection === 'blog' && <Blog />}
      </div>
    </div>
  );
}

export default App;
