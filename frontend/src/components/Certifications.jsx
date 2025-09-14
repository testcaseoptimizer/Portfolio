import React from 'react';
import { Award, Calendar } from 'lucide-react';

const Certifications = ({ data }) => {
  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="certifications-grid">
          {data.map((cert) => (
            <div key={cert.id} className="certification-card">
              <div className="card-icon">
                <Award size={24} />
              </div>
              
              <div className="card-content">
                <h3 className="card-title">{cert.title}</h3>
                <p className="card-issuer">{cert.issuer}</p>
                
                <div className="card-details">
                  <div className="detail-item">
                    <Calendar size={16} />
                    <span>{cert.year}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;