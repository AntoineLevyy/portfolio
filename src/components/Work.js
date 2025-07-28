import React from 'react';

const workData = [
  {
    period: '2025 - Present',
    title: 'Founder',
    company: 'Startup',
    description: 'Building innovative products and companies. Currently working on my own startup after being incubated at Entrepreneur First in Paris.'
  },
  {
    period: '2021 - 2024',
    title: 'Digital Media Product Manager',
    company: 'Publicis Media, London',
    description: 'Built Digital Media products and solutions. Led product development and strategy for major media campaigns.'
  },
  {
    period: '2018 - 2021',
    title: 'Professional Football',
    company: 'Various Clubs',
    description: 'Played professional football, developing discipline, teamwork, and leadership skills that translate to business.'
  }
];

function Work() {
  return (
    <div className="work-modern">
      <div className="work-content">
        <h2 className="work-title">Professional Experience</h2>
        <div className="timeline-modern">
          {workData.map((item, index) => (
            <div key={index} className="timeline-item-modern">
              <div className="timeline-marker"></div>
              <div className="timeline-content-modern">
                <div className="timeline-period">{item.period}</div>
                <h3 className="timeline-job-title">{item.title}</h3>
                <div className="timeline-company">{item.company}</div>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;