import React from 'react';
import './DevOps.css';

const AWS = () => {
  return (
    <div>
      <div className="hero-banner">
        <h2>AWS</h2>
      </div>
      <div className="content-section">
        <p>Explore Amazon Web Services (AWS), a comprehensive cloud platform offering infrastructure, software, and computing power. AWS enables scalable solutions that help businesses innovate quickly and securely in the cloud.</p>
        
        <div className="course-features">
          <div className="feature-card">
            <h4>Compute Services</h4>
            <p>Use scalable compute capacity with services like EC2, Lambda, and Elastic Beanstalk for flexible deployment.</p>
          </div>
          <div className="feature-card">
            <h4>Storage Solutions</h4>
            <p>Secure data storage with options like S3, EFS, and Glacier, enabling efficient data management and retrieval.</p>
          </div>
          <div className="feature-card">
            <h4>Machine Learning</h4>
            <p>Leverage AWS ML services, such as SageMaker, to build, train, and deploy machine learning models at scale.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AWS;
