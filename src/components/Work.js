import React from 'react';

const workData = [
  {
    period: 'Presently',
    title: 'Founder',
    company: 'Startup, San Francisco',
    description: 'Currently working on software for performance marketing. Failing and learning about customer discovery and development, product and company building, distribution and fundraising. Raised £250K.'
  },
  {
    period: '2021 - 2024',
    title: 'Digital Media Product Manager',
    company: 'Publicis Media, London',
    description: 'Built Digital Media products and solutions. Led product development and strategy for major media campaigns. Generated +$10M in revenue for the business.'
  },
  {
    period: '2018 - 2021',
    title: 'Professional Football',
    company: 'Spain, Australia, USA',
    description: 'Played professional football, developing discipline, teamwork, and leadership skills that translate to business.'
  }
];

function Work() {
  return (
    <div className="work-modern">
      <div className="work-content">
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