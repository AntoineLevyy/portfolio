import React, { useState } from 'react';
import AIVideos from './AIVideos';
import Topics from './Topics';

function Interests() {
  const [activeSubSection, setActiveSubSection] = useState('slop');

  return (
    <div className="interests-container">
      <nav className="sub-navigation">
        <button 
          className={`sub-nav-button ${activeSubSection === 'slop' ? 'active' : ''}`}
          onClick={() => setActiveSubSection('slop')}
        >
          Slop
        </button>
        <button 
          className={`sub-nav-button ${activeSubSection === 'topics' ? 'active' : ''}`}
          onClick={() => setActiveSubSection('topics')}
        >
          Topics
        </button>
      </nav>

      <div className="sub-content">
        {activeSubSection === 'slop' && <AIVideos />}
        {activeSubSection === 'topics' && <Topics />}
      </div>
    </div>
  );
}

export default Interests;
