import React from 'react';
import profilePic from '../assets/images/profile.jpg';
import Work from './Work';

function About() {
  return (
    <div className="about-centered">
      <img src={profilePic} alt="Antoine Lévy" className="about-photo-centered" />
      <p className="about-bio-centered">
        I am passionately working my way around Tech. I have spent the first 3 years of my career building Digital Media products at Publicis in London.
        I am now working on my own startup after being incubated at Entrepreneur First in Paris. Looking to build products, companies and meet great people along the way.
      </p>
      <Work />
    </div>
  );
}

export default About;