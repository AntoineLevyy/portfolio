import React from 'react';

function Work() {
  return (
    <div className="work">
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-year">2025</div>
          <div className="timeline-content">
            <h3>Entrepreneurship</h3>
            <p>Description of the job and achievements.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-year">2021-2024</div>
          <div className="timeline-content">
            <h3>Publicis Media, London</h3>
            <p>Description of the job and achievements.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-year">2018-2021</div>
          <div className="timeline-content">
            <h3>Professional Football</h3>
            <p>Description of the job and achievements.</p>
          </div>
        </div>
        {/* Add more timeline items for each year down to 2018 */}
      </div>
    </div>
  );
}

export default Work;