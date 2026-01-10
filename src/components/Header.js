import React from 'react';

function Header({ activeSection, setActiveSection, theme, toggleTheme }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1 className="special-name-gradient">Antoine Lévy</h1>
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
          </div>
        </div>
        <nav className="header-navigation">
          <button 
            className={`nav-button ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => setActiveSection('about')}
          >
            About
          </button>
          <button 
            className={`nav-button ${activeSection === 'work' ? 'active' : ''}`}
            onClick={() => setActiveSection('work')}
          >
            Work
          </button>
          <button 
            className={`nav-button ${activeSection === 'interests' ? 'active' : ''}`}
            onClick={() => setActiveSection('interests')}
          >
            Interests
          </button>
          <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
