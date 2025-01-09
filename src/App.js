import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Projects from './components/Projects';
import Blog from './components/Blog';
import MyChatbot from './components/Chatbot';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="container">
        {activeSection === 'about' && <About />}
        {activeSection === 'work' && <Work />}
        {activeSection === 'projects' && <Projects />}
        {activeSection === 'blog' && <Blog />}
      </div>
      <MyChatbot />
    </div>
  );
}

export default App;
