import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './Cartcontext'; // Import the custom useCart hook
import './CategoryPage.css';  // Importing CSS for styling

const CategoryPage = ({ products }) => {
  const { category } = useParams();
  const { addToCart } = useCart(); // Destructure addToCart from the context
  const [visibleCount, setVisibleCount] = useState(6); // Initially show 6 products

  const normalizedCategory = category.replace(/-/g, ' ').trim().toLowerCase();

  // Filter products based on category
  const filteredProducts = products.filter(
    (product) => product.category.trim().toLowerCase() === normalizedCategory
  );

  // Load more products
  const loadMoreProducts = () => {
    setVisibleCount(visibleCount + 6); // Increase visible count by 6
  };

  return (
    <div className="category-page">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ')} Products</h2>
      
      {/* Product grid */}
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.slice(0, visibleCount).map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h4 className="product-name">{product.name}</h4>
              <p className="product-description">{product.description}</p>
              <p className="product-price">{product.price}</p>

              {/* Add to Cart button */}
              <button 
                className="add-to-cart-btn" 
                onClick={() => addToCart(product)}  // Use addToCart from context
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>

      {filteredProducts.length > visibleCount && (
        <button onClick={loadMoreProducts} className="load-more-btn">Load More</button>
      )}
    </div>
  );
};

export default CategoryPage;
