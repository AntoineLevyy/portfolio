import React, { useState } from 'react';

function ProjectCard({ title, description, link }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>
      <button className="expand-btn" onClick={() => setExpanded(!expanded)}>
        {expanded ? 'See Less' : 'See More'}
      </button>
      {expanded && (
        <div className="project-content">
          <p>{description} <a href={link} target="_blank" rel="noopener noreferrer">{link}</a></p>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
