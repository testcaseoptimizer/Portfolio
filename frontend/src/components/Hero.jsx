import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = ({ data }) => {
  const handleDownloadResume = () => {
    // Generate and download comprehensive resume
    const resumeContent = `
SIDDHANTH KALYANARAMAN
AI Engineer
Phone: +19346428076 | Email: siddhanthkalyanaraman@gmail.com
LinkedIn: https://www.linkedin.com/in/siddhanth-kalyanaraman-a47bb326a/
GitHub: https://github.com/testcaseoptimizer

EDUCATION
• Boston University - Master's in Artificial Intelligence (Graduating 2027)
• BITS Pilani Hyderabad (India) - B.E. Chemical Engineering & Minor in Computational Intelligence (Graduated 2025) - CGPA: 8.56

INTERNSHIP EXPERIENCE

Product Engineer Intern - Mbb Labs Private Ltd., Bengaluru (India) | Jul 2024 - Dec 2024
• Developed 80+ JUnit testing programs to improve Spring Boot application accuracy (80-90%)
• Designed a UI page using inbuilt company software to enhance bank customer service, significantly improving user experience
• Built a Spring Boot application for improved customer service efficiency and user satisfaction

IT Intern - Qualitykiosk Technologies, Navi Mumbai (India) | Apr 2023 - Jun 2023
• Evaluated application performance using testing services, analyzing metrics and improving understanding
• Configured Apache Tomcat server, improving application performance
• Developed 40+ JSP and Servlet classes in Eclipse IDE and implemented MySQL database changes for improved backend operations

Chemical Intern - Apcotex Industries, Tajola (India) | May 2024 - Jun 2024
• Applied chemical engineering concepts in a latex and rubber manufacturing plant, enhancing understanding of industrial processes
• Analyzed the use of valves, reactors, distillation towers, storage tanks, and P&ID diagrams to improve operational knowledge
• Gained experience in unit operations and polymerization reactions, contributing to overall process efficiency

PROJECTS

Test Case Optimizer | Apr 2023 - Jun 2023
• Automated web application testing for improved performance and accuracy using Selenium WebDriver and Github Copilot
• Tools/Technologies: Tomcat 9 server, MySQL Database, Eclipse, JSP, Servlet

Economic Trend Analysis | Oct 2023
• Classified customer economic stability using machine learning models (Naive Bayes, Artificial Neural Networks, k-Nearest Neighbor)
• Compared model performances to determine optimal classification approach

Chatbot with Machine Learning | Sep 2023
• Created a chatbot using a Sequential model in TensorFlow with JSON script
• Tested chatbot performance and optimized responses

Social Media Platform | Apr 2024
• Developed a backend platform (similar to X) using Spring Boot, Java, and Postman API
• Implemented core social media functionalities

Machine Learning in Graphene Exfoliation Process | Feb 2024 - Apr 2024
• Used machine learning (k-Nearest Neighbors, Random Forest Regression, Artificial Neural Networks with SHAP values) to optimize graphene production, balancing rate and quality
• Applied advanced ML techniques for materials science optimization

POSITIONS OF RESPONSIBILITY

Design Head - Association of Chemical Engineers (ACE), BITS Hyderabad | Aug 2023 - May 2024
• Designed event posters and handled event planning
• Led design initiatives for various departmental events and activities

Conference Host - NOVEL MATERIALS & TECHNOLOGIES FOR ENERGY AND ENVIRONMENTAL APPLICATIONS (NMTEEA) CONFERENCE, BITS Hyderabad | Mar 2024
• Compered a conference session for academic and industry professionals
• Facilitated discussions on cutting-edge materials research

TECHNICAL SKILLS
Languages: MATLAB, SQL (Beginner), Python, Java, C++, Machine Learning
Frameworks: JUnit, TensorFlow (Beginner), Spring Boot
Developer Tools: Visual Studio Code, Eclipse IDE, Google Colaboratory, MySQL, Apache Tomcat
Specialties: Software Testing, Test Automation, Artificial Intelligence, Machine Learning, Backend Development

CERTIFICATIONS
• Selenium WebDriver in Java - Udemy
• Deep Learning - Udemy
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
    
    console.log('Comprehensive resume downloaded successfully!');
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