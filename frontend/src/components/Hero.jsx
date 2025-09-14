import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = ({ data }) => {
  const handleDownloadResume = () => {
    // Generate and download resume
    const resumeContent = `
SIDDHANTH KALYANARAMAN
AI Engineer
Phone: +19346428076 | Email: siddhanthkalyanaraman@gmail.com
LinkedIn: https://www.linkedin.com/in/siddhanth-kalyanaraman-a47bb326a/
GitHub: https://github.com/testcaseoptimizer

EDUCATION
• Boston University - Master's in Artificial Intelligence (2025-2027)
• BITS Pilani Hyderabad - B.E. Chemical Engineering, Minor in Computational Intelligence (2021-2025) - CGPA: 8.56

EXPERIENCE
• Product Engineer Intern - Mbb Labs Private Ltd. (Jul 2024 - Dec 2024)
  - Developed 80+ JUnit tests improving SpringBoot application accuracy (80-90%)
  - Designed UI page for enhanced customer service experience
  - Built SpringBoot application for improved service efficiency

• IT Intern - Qualitykiosk Technologies (Apr 2023 - Jun 2023)
  - Evaluated application performance using testing services
  - Configured Apache Tomcat server for optimal performance
  - Developed 40+ JSP and Servlet classes in Eclipse IDE
  - Improved MySQL database performance

• Chemical Intern - Apcotex Industries (May 2024 - Jun 2024)
  - Applied chemical engineering concepts in latex and rubber manufacturing
  - Analyzed unit operations and process optimization
  - Gained experience in polymerization reactions

PROJECTS
• Test Case Optimizer (Apr 2023 - Jun 2023)
  - Automated test case creation using Selenium WebDriver, GitHub Copilot
  
• Economic Trend Analysis (Oct 2023)
  - ML models comparison for customer economic stability classification
  
• Chatbot with Machine Learning (Sep 2023)
  - Intelligent chatbot using TensorFlow sequential model
  
• Social Media Platform (Apr 2024)
  - Backend platform development using SpringBoot, Java, Postman API
  
• Machine Learning in Graphene Exfoliation Process (Feb 2024 - Apr 2024)
  - ML optimization for graphene production using kNN, RFR, ANNs, SHAP values

TECHNICAL SKILLS
Languages: MATLAB, Python, Java, C++, SQL
Frameworks: JUnit, TensorFlow, SpringBoot
Tools: Visual Studio Code, Eclipse IDE, Google Colaboratory, MySQL, Apache Tomcat
Specialties: Machine Learning, Artificial Intelligence, Software Testing, Test Automation

LEADERSHIP & RESPONSIBILITIES
• Design Head - Association of Chemical Engineers (ACE), BITS Hyderabad (Aug 2023 - May 2024)
• Conference Host - NMTEEA Conference, BITS Hyderabad (Mar 2024)

CERTIFICATIONS
• Selenium WebDriver in Java - Udemy (2023)
• Deep Learning - Udemy (2023)
    `;
    
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Siddhanth_Kalyanaraman_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    console.log('Resume downloaded successfully!');
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