import React from 'react';
import { Users, MapPin, Calendar } from 'lucide-react';

const Responsibilities = ({ data }) => {
  return (
    <section id="responsibilities" className="responsibilities-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Leadership & Responsibilities</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="responsibilities-grid">
          {data.map((resp) => (
            <div key={resp.id} className="responsibility-card">
              <div className="card-icon">
                <Users size={24} />
              </div>
              
              <div className="card-content">
                <h3 className="card-title">{resp.position}</h3>
                <p className="card-organization">{resp.organization}</p>
                
                <div className="card-details">
                  <div className="detail-item">
                    <Calendar size={16} />
                    <span>{resp.duration}</span>
                  </div>
                  <div className="detail-item">
                    <MapPin size={16} />
                    <span>{resp.location}</span>
                  </div>
                </div>
                
                <p className="responsibility-description">{resp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Responsibilities;