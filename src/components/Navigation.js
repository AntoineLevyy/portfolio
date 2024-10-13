import React from 'react';

function Navigation({ activeSection, setActiveSection }) {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className={activeSection === 'projects' ? 'active' : ''}>
          <button onClick={() => setActiveSection('projects')}>Projects</button>
        </li>
        <li className={activeSection === 'contact' ? 'active' : ''}>
          <button onClick={() => setActiveSection('contact')}>Contact</button>
        </li>
        <li className={activeSection === 'blog' ? 'active' : ''}>
          <button onClick={() => setActiveSection('blog')}>Blog</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
