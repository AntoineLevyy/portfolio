import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Work from './components/Work';
import Interests from './components/Interests';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

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
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="main-content">
        {activeSection === 'about' && <About />}
        {activeSection === 'work' && <Work />}
        {activeSection === 'interests' && <Interests />}
      </main>
    </div>
  );
}

export default App;
