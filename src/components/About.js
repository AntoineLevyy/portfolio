import React, { useState } from 'react';
import profilePic from '../assets/images/profile.jpg';
import Work from './Work';

const timelineData = [
  {
    emoji: '⚽️',
    title: 'Football',
    description: 'Description of the job and achievements.'
  },
  {
    emoji: '💻',
    title: 'Product and Digital Media',
    description: 'Description of the job and achievements.'
  },
  {
    emoji: '🏙️',
    title: 'Founder',
    description: 'Description of the job and achievements.'
  }
];

function About() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const handleTimelineClick = idx => {
    setSelectedIdx(selectedIdx === idx ? null : idx);
  };

  return (
    <div className={`about-split-layout${selectedIdx !== null ? ' split-active' : ''}`}>
      <div className="about-main-split">
        <img src={profilePic} alt="Antoine Lévy" className="about-photo-centered" />
        <p className="about-bio-centered">
          I am passionately working my way around Tech. I have spent the first 3 years of my career building Digital Media products at Publicis in London.
          I am now working on my own startup after being incubated at Entrepreneur First in Paris. Looking to build products, companies and meet great people along the way.
        </p>
        <Work
          timelineData={timelineData}
          selectedIdx={selectedIdx}
          onTimelineClick={handleTimelineClick}
        />
      </div>
      {selectedIdx !== null && (
        <div className="about-description-panel">
          <h2 className="about-desc-title">{timelineData[selectedIdx].title}</h2>
          <div className="about-desc-content">{timelineData[selectedIdx].description}</div>
        </div>
      )}
    </div>
  );
}

export default About;