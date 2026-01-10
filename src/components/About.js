import React from 'react';
import profilePic from '../assets/images/profile.jpg';

function About() {
  return (
    <div className="about-modern">
      <div className="profile-section">
        <img src={profilePic} alt="Antoine Lévy" className="profile-image" />
        <p className="profile-title">
          Currently building <a href="https://adsperform.com" target="_blank" rel="noopener noreferrer">adsperform</a>
        </p>
      </div>
      
      <div className="bio-section">
        <p>
          I am an early stage founder building software for performance marketing.
        </p>
      </div>
    </div>
  );
}

export default About;
