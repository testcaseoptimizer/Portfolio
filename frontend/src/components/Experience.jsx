import React from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle } from 'lucide-react';

const Experience = ({ data }) => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experience</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="experience-timeline">
          {data.map((exp) => (
            <div key={exp.id} className="experience-card">
              <div className="card-icon">
                <Briefcase size={24} />
              </div>
              
              <div className="card-content">
                <div className="card-header">
                  <h3 className="card-title">{exp.position}</h3>
                  <p className="card-company">{exp.company}</p>
                </div>
                
                <div className="card-details">
                  <div className="detail-item">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="detail-item">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <div className="achievements-list">
                  {exp.achievements.map((achievement, index) => (
                    <div key={index} className="achievement-item">
                      <CheckCircle size={16} />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;