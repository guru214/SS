// import React from 'react';
// import { Row, Col, Card } from 'react-bootstrap';
// import './Homepage.css'; 

// const FeaturedCategories = () => {
//   const categories = [
//     { name: 'Electronics', img: 'https://t3.ftcdn.net/jpg/01/70/80/52/360_F_170805293_mP8dwQvg7ip4tFRyXNs7xhIs470dBArn.jpg' },
//     { name: 'Fashion', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5FwUPSog5pIe73xCvhRy6bEDjTW1JkQa1Dw&s' },
//     { name: 'Furniture', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa92S_cBe7JDfbiwL9jhdOfSv_SjHlZG6f9w&s' },
//     { name: 'Home Appliances', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoZPc6i9Oh2TkVCCzdgVF-a2xFa-MpKaiUQ&s' }
//   ];

//   return (
//     <section className="featured-categories py-5">
//       <div className="container">
//         <h2 className="text-center mb-4">Featured Categories</h2>
//         <Row>
//           {categories.map((category, index) => (
//             <Col key={index} md={3} sm={6} className="mb-4">
//               <Card className="category-card shadow-sm">
//                 <Card.Img variant="top" src={category.img} />
//                 <Card.Body>
//                   <Card.Title className="text-center">{category.name}</Card.Title>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </div>
//     </section>
//   );
// };

// export default FeaturedCategories;
import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';  // Assuming you have CSS for layout and styling

const featuredCategories = [
  { name: 'Devops', image: 'https://raygun.com/blog/images/best-devops-tools/feature-23.jpg', categoryPath: 'electronics' },
  { name: 'AWS', image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_aws.jpg', categoryPath: 'fashion' },
  { name: 'Azure', image: 'https://www.singlemindconsulting.com/wp-content/uploads/2020/08/building-highly-scalable-apps-with-microsoft-azure-1024x601.jpg', categoryPath: 'furniture' },
  // { name: 'Home Appliances', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoZPc6i9Oh2TkVCCzdgVF-a2xFa-MpKaiUQ&s', categoryPath: 'home-appliances' }
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
