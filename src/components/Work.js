import React from 'react';

const workData = [
  {
    period: 'Present',
    title: 'Founder',
    company: 'Startup, San Francisco',
    description: 'Building software for performance marketing. Raised £250K. Focused on customer discovery, product development, and fundraising.'
  },
  {
    period: '2021 — 2024',
    title: 'Digital Media Product Manager',
    company: 'Publicis Media, London',
    description: 'Led product development for major media campaigns. Generated +$10M in revenue through digital media solutions.'
  },
  {
    period: '2018 — 2021',
    title: 'Professional Football',
    company: 'Spain, Australia, USA',
    description: 'Developed discipline and leadership through professional sports across multiple continents.'
  }
];

function Work() {
  return (
    <div className="work-modern">
      <div className="timeline-modern">
        {workData.map((item, index) => (
          <div key={index} className="timeline-item-modern">
            <div className="timeline-marker"></div>
            <div className="timeline-period">{item.period}</div>
            <div className="timeline-content-modern">
              <h3 className="timeline-job-title">{item.title}</h3>
              <div className="timeline-company">{item.company}</div>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
