import React from 'react';
import { Code, Wrench, Cpu, Star } from 'lucide-react';

const Skills = ({ data }) => {
  const skillSections = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: data.languages,
      color: 'var(--brand-primary)'
    },
    {
      title: 'Frameworks & Libraries',
      icon: <Wrench size={24} />,
      skills: data.frameworks,
      color: 'var(--secondary-olive)'
    },
    {
      title: 'Tools & Technologies',
      icon: <Cpu size={24} />,
      skills: data.tools,
      color: 'var(--secondary-yellow)'
    },
    {
      title: 'Specialties',
      icon: <Star size={24} />,
      skills: data.specialties,
      color: 'var(--brand-primary)'
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="skills-grid">
          {skillSections.map((section, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <div className="category-icon" style={{ color: section.color }}>
                  {section.icon}
                </div>
                <h3 className="category-title">{section.title}</h3>
              </div>
              
              <div className="skills-list">
                {section.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-name">{skill}</span>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${Math.floor(Math.random() * 30) + 70}%`,
                          backgroundColor: section.color 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;