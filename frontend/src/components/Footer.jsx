import React from 'react';
import { Phone, Mail, Linkedin, Github, Heart } from 'lucide-react';

const Footer = ({ data }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-info">
              <h3 className="footer-name">{data.name}</h3>
              <p className="footer-title">{data.title}</p>
              <p className="footer-tagline">{data.tagline}</p>
            </div>
            
            <div className="footer-contact">
              <h4 className="contact-title">Get In Touch</h4>
              <div className="contact-links">
                <a href={`tel:${data.phone}`} className="footer-link">
                  <Phone size={18} />
                  <span>{data.phone}</span>
                </a>
                <a href={`mailto:${data.email}`} className="footer-link">
                  <Mail size={18} />
                  <span>{data.email}</span>
                </a>
                <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="footer-link">
                  <Linkedin size={18} />
                  <span>LinkedIn</span>
                </a>
                <a href={`https://${data.github}`} target="_blank" rel="noopener noreferrer" className="footer-link">
                  <Github size={18} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div className="footer-divider"></div>
            <div className="footer-copyright">
              <p>© 2024 {data.name}. Built with <Heart size={16} className="heart-icon" /> and lots of coffee.</p>
              <p>Transforming ideas into reality through code and creativity.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;