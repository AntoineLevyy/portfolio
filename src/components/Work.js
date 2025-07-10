import React from 'react';

function Work({ timelineData, selectedIdx, onTimelineClick }) {
  return (
    <div className="clean-timeline-wrapper">
      <div className="clean-timeline">
        <div className="clean-timeline-line" />
        {timelineData.map((item, idx) => (
          <div className="clean-timeline-point" key={item.title} style={{ left: `${(idx) * (100/(timelineData.length-1))}%` }}>
            <button
              className={`clean-timeline-emoji${selectedIdx === idx ? ' selected' : ''}`}
              onClick={() => onTimelineClick(idx)}
              aria-label={item.title}
            >
              <span role="img" aria-label={item.title} style={{ fontSize: '2.1rem', lineHeight: 1 }}>{item.emoji}</span>
            </button>
            <div
              className={`clean-timeline-title${selectedIdx === idx ? ' selected' : ''}`}
              onClick={() => onTimelineClick(idx)}
            >
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;