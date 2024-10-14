import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = ({ products }) => {
  const { category } = useParams(); // Retrieve the category from the URL param
  const [visibleCount, setVisibleCount] = useState(6); // Initially show 6 products

  // Filter products based on category
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  );

  // Function to load more products
  const loadMoreProducts = () => {
    setVisibleCount(visibleCount + 6); // Increase visible count by 6
  };

  // Debugging: Log the filtered products
  console.log('Filtered Products:', filteredProducts);

  return (
    <div>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Products</h2>
      
      {/* Display filtered products */}
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.slice(0, visibleCount).map((product) => (
            <div key={product.id} className="product">
              {/* Ensure image URLs are correct */}
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          ))
        ) : (
          <p>No products available in this category.</p> // Fallback message if no products match the category
        )}
      </div>

      {/* Display Load More button only if there are more products to load */}
      {filteredProducts.length > visibleCount && (
        <button onClick={loadMoreProducts}>Load More</button>
      )}
    </div>
  );
};

export default CategoryPage;
