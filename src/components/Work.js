import React, { useState } from 'react';

const timelineData = [
  {
    year: '2018-2021',
    title: 'Professional Football',
    description: 'Description of the job and achievements.'
  },
  {
    year: '2021-2024',
    title: 'Publicis Media, London',
    description: 'Description of the job and achievements.'
  },
  {
    year: '2025',
    title: 'Entrepreneurship',
    description: 'Description of the job and achievements.'
  }
];

function Work() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = idx => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="clean-timeline-wrapper">
      <div className="clean-timeline">
        <div className="clean-timeline-line" />
        {timelineData.map((item, idx) => (
          <div className="clean-timeline-point" key={item.year} style={{ left: `${(idx) * (100/(timelineData.length-1))}%` }}>
            <button className="clean-timeline-dot" onClick={() => handleToggle(idx)} aria-label={item.title} />
            <div className="clean-timeline-title" onClick={() => handleToggle(idx)}>{item.title}</div>
            {openIndex === idx && (
              <div className="clean-timeline-details">{item.description}</div>
            )}
          </div>
        ))}
        <div className="clean-timeline-arrow" />
      </div>
    </div>
  );
}

export default Work;