import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const Education = ({ data }) => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="education-timeline">
          {data.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="card-icon">
                <GraduationCap size={24} />
              </div>
              
              <div className="card-content">
                <div className="card-header">
                  <h3 className="card-title">{edu.degree}</h3>
                  {edu.minor && <p className="card-subtitle">{edu.minor}</p>}
                  <p className="card-institution">{edu.institution}</p>
                </div>
                
                <div className="card-details">
                  <div className="detail-item">
                    <Calendar size={16} />
                    <span>{edu.duration}</span>
                    {edu.status && <span className="status-badge">{edu.status}</span>}
                  </div>
                  <div className="detail-item">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                  {edu.cgpa && (
                    <div className="detail-item">
                      <span className="cgpa-label">CGPA:</span>
                      <span className="cgpa-value">{edu.cgpa}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;