import React from 'react';
import profilePic from '../assets/images/profile.jpg';

function About() {
  return (
    <div className="about-modern">
      <div className="about-content">
        <div className="profile-section">
          <img src={profilePic} alt="Antoine Lévy" className="profile-image" />
          <h2 className="profile-name">Antoine Lévy</h2>
          <p className="profile-title">Full Stack Developer & Entrepreneur</p>
        </div>
        
        <div className="bio-section">
          <p>
            I am passionately working my way around Tech. I have spent the first 3 years of my career building Digital Media products at Publicis in London.
            I am now working on my own startup after being incubated at Entrepreneur First in Paris. Looking to build products, companies and meet great people along the way.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;