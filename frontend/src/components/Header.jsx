import React from 'react';
import { Phone, Mail, Linkedin, Github } from 'lucide-react';

const Header = ({ data }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-nav">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
          </div>
          
          <div className="header-contact">
            <a href={`tel:${data.phone}`} className="contact-link">
              <Phone size={16} />
              <span>{data.phone}</span>
            </a>
            <a href={`mailto:${data.email}`} className="contact-link">
              <Mail size={16} />
            </a>
            <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-link">
              <Linkedin size={16} />
            </a>
            <a href={`https://${data.github}`} target="_blank" rel="noopener noreferrer" className="contact-link">
              <Github size={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;