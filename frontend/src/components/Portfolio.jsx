import React, { useState, useEffect } from 'react';
import { portfolioData } from '../mock';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Responsibilities from './Responsibilities';
import Certifications from './Certifications';
import Footer from './Footer';

const Portfolio = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with mock data
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 100));
        setData(portfolioData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Loading Portfolio...</p>
      </div>
    );
  }

  if (!data) {
    return <div className="error-screen">Failed to load portfolio data</div>;
  }

  return (
    <div className="portfolio">
      <Header data={data.personal} />
      <Hero data={data.personal} />
      <About data={data.personal} />
      <Education data={data.education} />
      <Experience data={data.experience} />
      <Projects data={data.projects} />
      <Skills data={data.skills} />
      <Responsibilities data={data.responsibilities} />
      <Certifications data={data.certifications} />
      <Footer data={data.personal} />
    </div>
  );
};

export default Portfolio;