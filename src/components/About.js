import React from 'react';
import profilePic from '../assets/images/profile.jpg';

const projects = [
  {
    title: 'Adsperform',
    url: 'https://www.adsperform.com/',
    description: 'Performance marketing platform that automates creative testing. Built at Entrepreneurs First, raised £250K.',
  },
  {
    title: 'Couple Therapy',
    url: 'https://coupletherapy-six.vercel.app/',
    description: 'AI-guided conversations that help couples communicate better. Built as a side project.',
  },
  {
    title: 'Agent Store',
    url: 'https://agentstore-eight.vercel.app/',
    description: 'Discover and deploy AI agents for business workflows. Curated marketplace.',
  },
  {
    title: 'XEOLint',
    url: 'https://xeolint.com/',
    description: 'Linting tool that catches visibility issues for AEO and SEO before they hurt rankings.',
  },
];

function About() {
  return (
    <div className="about-modern">
      <div className="profile-section">
        <img src={profilePic} alt="Antoine Levy" className="profile-image" />
        <p className="profile-title">
          Founding GTM at{' '}
          <a href="https://www.neonblue.ai/" target="_blank" rel="noopener noreferrer">
            Neon Blue
          </a>
        </p>
        <p className="profile-location">San Francisco</p>
      </div>

      <div className="bio-section">
        <p>
          Previously founded{' '}
          <a href="https://www.adsperform.com/" target="_blank" rel="noopener noreferrer">
            Adsperform
          </a>{' '}
          at Entrepreneurs First.
        </p>
      </div>

      <div className="projects-section">
        <h2 className="section-label">Projects</h2>
        <div className="projects-row">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="project-arrow">&#8599;</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
