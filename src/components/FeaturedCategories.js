
import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'; 

const featuredCategories = [
  { name: 'DevOps', image: 'https://raygun.com/blog/images/best-devops-tools/feature-23.jpg', categoryPath: 'DevOps' },
  { name: 'AWS', image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_aws.jpg', categoryPath: 'AWS' },
  { name: 'Azure', image: 'https://www.singlemindconsulting.com/wp-content/uploads/2020/08/building-highly-scalable-apps-with-microsoft-azure-1024x601.jpg', categoryPath: 'Azure' },
];

const Home = () => {
  return (
    <div className="home">
      <h2>COURSES</h2>
      <div className="featured-categories">
        {featuredCategories.map((category) => (
          <Link to={`/category/${category.categoryPath}`} key={category.name} className="category-link">
            <div className="category-card">
              <img src={category.image} alt={category.name} />
              <h3>{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
