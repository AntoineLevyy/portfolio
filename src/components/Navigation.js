import React from 'react';

function Navigation({ activeSection, setActiveSection }) {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li className={activeSection === 'about' ? 'active' : ''}>
          <button onClick={() => setActiveSection('about')}>About</button>
        </li>
        <li className={activeSection === 'work' ? 'active' : ''}>
          <button onClick={() => setActiveSection('work')}>Work</button>
        </li>
        <li className={activeSection === 'projects' ? 'active' : ''}>
          <button onClick={() => setActiveSection('projects')}>Projects</button>
        </li>
        <li className={activeSection === 'blog' ? 'active' : ''}>
          <button onClick={() => setActiveSection('blog')}>Blogs</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
