import React from 'react';
import hi from '../assets/images/hi.png';

function About() {
  return (
    <div className="about">
      <h1>Hey, I'm Antoine Lévy 👋</h1>
      <p>I am passionately working my way arount Tech. I have spent the first 3 years of my career building Digital Media products at Publicis in London.
        I am now working on my own startup after being incubated at Entrepeneur First in Paris. Looking to build products, companies and meet great people along the way.
      </p>
      <img src={hi} alt="Antoine Lévy" style={{ display: 'block', margin: '20px auto', maxWidth: '30%', height: 'auto' }} />
    </div>
  );
}

export default About;