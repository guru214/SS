import React from 'react';
import './DevOps.css';

const DevOps = () => {
  return (
    <div>
      <div className="hero-banner">
        <h2>DevOps</h2>
      </div>
      <div className="content-section">
        <p>Learn the principles and practices of DevOps, including CI/CD, automation, and collaboration. DevOps enables faster and more efficient software delivery with a culture of collaboration between development and operations teams.</p>
        
        <div className="course-features">
          <div className="feature-card">
            <h4>Continuous Integration</h4>
            <p>Integrate code changes frequently, enhancing collaboration and error detection.</p>
          </div>
          <div className="feature-card">
            <h4>Automation</h4>
            <p>Automate testing and deployment processes for faster and consistent delivery.</p>
          </div>
          <div className="feature-card">
            <h4>Monitoring</h4>
            <p>Monitor performance and reliability, gaining insights for further improvements.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevOps;
