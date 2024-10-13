import React from 'react';
import { FaEnvelope, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <div className="contact-grid">
      <a href="mailto:antoine.levy27@gmail.com" className="contact-item">
        <FaEnvelope /> Email
      </a>
      <a href="https://www.linkedin.com/in/antoine-l%C3%A9vy-653106201/" target="_blank" rel="noopener noreferrer" className="contact-item">
        <FaLinkedin /> LinkedIn
      </a>
      <a href="https://x.com/AntoineLevy27" target="_blank" rel="noopener noreferrer" className="contact-item">
        <FaTwitter /> Twitter
      </a>
      <a href="https://github.com/AntoineLevyy" target="_blank" rel="noopener noreferrer" className="contact-item">
        <FaGithub /> GitHub
      </a>
    </div>
  );
}

export default Contact;
