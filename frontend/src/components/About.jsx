import React from 'react';

const About = ({ data }) => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm a passionate AI Engineer currently pursuing my Master's in Artificial Intelligence at Boston University. 
              With extensive experience in software testing and a background in engineering, I bridge the gap between 
              theoretical knowledge and practical implementation.
            </p>
            <p className="about-description">
              My journey focuses on building intelligent systems and ensuring software quality through rigorous testing methodologies, always driven by curiosity and 
              a desire to solve complex problems through innovative AI and technology solutions.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <h3 className="highlight-title">5</h3>
                <p className="highlight-desc">Projects Completed</p>
              </div>
              <div className="highlight-item">
                <h3 className="highlight-title">3</h3>
                <p className="highlight-desc">Internships</p>
              </div>
              <div className="highlight-item">
                <h3 className="highlight-title">8.56</h3>
                <p className="highlight-desc">CGPA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;