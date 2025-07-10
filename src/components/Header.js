import React from 'react';
import { FaEnvelope, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="name-container">
          <h1 className="special-name-gradient">Antoine Lévy</h1>
        </div>
        <div className="contact-icons special-contact-icons small-round-contact-icons">
          <a href="mailto:antoine.levy27@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/antoine-l%C3%A9vy-653106201/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://x.com/AntoineLevy27" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://github.com/AntoineLevyy" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
