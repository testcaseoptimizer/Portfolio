import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = ({ data }) => {
  const handleDownloadResume = () => {
    // Mock download functionality
    console.log('Downloading resume...');
    alert('Resume download started!');
  };

  const handleContactMe = () => {
    // Scroll to contact section
    const footer = document.querySelector('footer');
    footer?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">{data.name}</h1>
            <h2 className="hero-subtitle">{data.title}</h2>
            <p className="hero-tagline">{data.tagline}</p>
            
            <div className="hero-actions">
              <button onClick={handleContactMe} className="btn-primary">
                Get In Touch
                <ArrowRight size={20} />
              </button>
              <button onClick={handleDownloadResume} className="btn-secondary">
                <Download size={20} />
                Download Resume
              </button>
            </div>
          </div>
          
          <div className="hero-image">
            <img src={data.image} alt={data.name} className="profile-image" />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;