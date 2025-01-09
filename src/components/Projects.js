import React from 'react';

function Projects() {
  const projects = [
    { title: "HomeOfFounders", description: "Building an OS for early stage founders. Solving one problem at a time.", link: "https://homeoffounders.com" },
    { title: "The A.I Hire", description: "Directory of verticalised A.I for start-ups", link: "https://theaihire.com/" },
    { title: "Tools for IndieHackers", description: "Directory of tools for IndieHackers at every stage", link: "https://toolsforindiehackers.com/" }
  ];

  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-title-link">
            <h3>{project.title}</h3>
          </a>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Projects;
