import React, { useState, useEffect } from 'react';
import './App.css';
import About from './components/About';

function App() {
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
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <h1 className="special-name-gradient">Antoine Levy</h1>
            <div className="contact-icons">
              <a href="mailto:antoine.levy@example.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
              <a href="https://linkedin.com/in/antoinelevyy" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/antoinelevyy" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://x.com/AntoineLevy27" target="_blank" rel="noopener noreferrer" aria-label="X">
                <i className="fab fa-x-twitter"></i>
              </a>
            </div>
          </div>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
          </button>
        </div>
      </header>
      <main className="main-content">
        <About />
      </main>
    </div>
  );
}

export default App;
