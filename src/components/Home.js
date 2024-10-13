import React from 'react';
import HeroSection from './HeroSection';
import FeaturedCategories from './FeaturedCategories';
import PopularProducts from './PopularProducts';
import Footer from './Footer';
import './Homepage.css'; // Custom CSS for styling

const Home = ({ products }) => {
  return (
    <div>
      {/* Hero Section for banners or promotional slides */}
      <HeroSection />

      {/* Featured Categories */}
      <FeaturedCategories />

      {/* Popular Products */}
      <PopularProducts products={products} />


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
