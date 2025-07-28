import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const mouseFollower = document.createElement('div');
    mouseFollower.className = 'mouse-follower';
    document.body.appendChild(mouseFollower);

    const handleMouseMove = (e) => {
      mouseFollower.style.left = e.clientX + 'px';
      mouseFollower.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (mouseFollower.parentNode) {
        mouseFollower.parentNode.removeChild(mouseFollower);
      }
    };
  }, []);

  return (
    <div className="App">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        {activeSection === 'about' && <About />}
        {activeSection === 'work' && <Work />}
      </main>
    </div>
  );
}

export default App;
