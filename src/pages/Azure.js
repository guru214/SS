import React from 'react';
import './DevOps.css';

const Azure = () => {
  return (
    <div>
      <div className="hero-banner">
        <h2>Azure</h2>
      </div>
      <div className="content-section">
        <p>Dive into Microsoft Azure, a cloud platform offering a range of solutions for building, deploying, and managing applications. Azure supports hybrid and multi-cloud environments, providing flexibility for enterprise-level scalability.</p>
        
        <div className="course-features">
          <div className="feature-card">
            <h4>App Services</h4>
            <p>Develop and deploy scalable web and mobile applications with Azure App Services for rapid development.</p>
          </div>
          <div className="feature-card">
            <h4>Database Management</h4>
            <p>Utilize fully managed databases like Azure SQL and Cosmos DB for reliable, high-performance data solutions.</p>
          </div>
          <div className="feature-card">
            <h4>AI and Analytics</h4>
            <p>Implement AI solutions with Azure Cognitive Services and gain insights with Azure Synapse Analytics.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Azure;
