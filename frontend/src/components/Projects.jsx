import React, { useState } from 'react';
import { Code, Calendar, Tag } from 'lucide-react';

const Projects = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', ...new Set(data.map(project => project.category))];
  
  const filteredProjects = selectedCategory === 'All' 
    ? data 
    : data.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="projects-filter">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="card-header">
                <div className="card-icon">
                  <Code size={24} />
                </div>
                <div className="project-category">
                  <Tag size={14} />
                  <span>{project.category}</span>
                </div>
              </div>
              
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <div className="project-duration">
                  <Calendar size={16} />
                  <span>{project.duration}</span>
                </div>
                <p className="project-description">{project.description}</p>
                
                <div className="tech-stack">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
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

export default Projects;