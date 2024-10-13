import React from 'react';

function Projects() {
  const projects = [
    { title: "The A.Idvisor", description: "Building start-up founder's favorite assistant", link: "https://theaidvisor.com" },
    { title: "Rate My Ideas", description: "Validate your ideas", link: "https://ratemyideas.com" },
    { title: "The A.I Hire", description: "Directory of verticalised A.I for start-ups", link: "https://theaihire.com/" },
    { title: "Tools for IndieHackers", description: "Directory of tools for IndieHackers at every stage", link: "https://toolsforindiehackers.com/" }]
    

  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">Visit</a>
        </div>
      ))}
    </div>
  );
}

export default Projects;
