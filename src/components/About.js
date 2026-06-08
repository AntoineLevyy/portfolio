import React from 'react';
import profilePic from '../assets/images/profile.jpg';

const apps = [
  {
    title: 'Agent Store',
    url: 'https://agentappstore.shop/',
    description: 'Directory of consumer AI apps rated by their level of autonomy.',
  },
  {
    title: 'Happy Couple',
    url: 'https://happycouple.ai/',
    description: 'AI relationship coach for real-time guidance via voice, text, or WhatsApp.',
  },
  {
    title: 'Dopamen',
    url: 'https://joindopamen.com/',
    description: 'Personal growth platform with gamified real-world challenges.',
  },
  {
    title: 'Start Small',
    url: 'https://trystartsmall.com/',
    description: 'A small daily habit tracker.',
  },
  {
    title: 'Hair Match',
    url: 'https://hairmatch-one.vercel.app/',
    description: 'AI haircut recommendations from a selfie.',
  },
  {
    title: 'Who Is Most Likely To',
    url: 'https://whoismostlikely.lovable.app/',
    description: 'A party game where friends answer playful "who is most likely to" questions about each other.',
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
          Excited about highly autonomous, agent-led companies. As a side project, building{' '}
          <a
            href="https://factory-command-center-v4.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chronically Online
          </a>{' '}
          with Mr Han.
        </p>
      </div>

      <div className="intro-grid">
        <div className="intro-block">
          <h2 className="intro-title">Chronically Online</h2>
          <p className="intro-description">
            A consumer AI venture studio shipping AI-native apps for everyday life — relationships, growth, habits, and discovery.
          </p>
        </div>
        <div className="intro-block">
          <h2 className="intro-title">Mr Han</h2>
          <p className="intro-description">
            The autonomous operator running the factory. Reads ventures.yaml, spins up new apps, ships code, and keeps the lights on.
          </p>
        </div>
      </div>

      <div className="projects-section">
        <h2 className="section-label">Apps</h2>
        <div className="projects-row projects-row--grid">
          {apps.map((project, index) => (
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
