import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from './Cartcontext'; // Import the custom useCart hook
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap'; // Import React Bootstrap components

const CategoryPage = ({ products }) => {
  const { category } = useParams();
  const { addToCart } = useCart(); // Destructure addToCart from the context
  const [visibleCount, setVisibleCount] = useState(6); // Initially show 6 products
  const [cartMessage, setCartMessage] = useState(""); // State for the "added to cart" message
  const navigate = useNavigate(); // Navigate to the cart

  const normalizedCategory = category.replace(/-/g, ' ').trim().toLowerCase();

  // Filter products based on category
  const filteredProducts = products.filter(
    (product) => product.category.trim().toLowerCase() === normalizedCategory
  );

  // Load more products
  const loadMoreProducts = () => {
    setVisibleCount(visibleCount + 6); // Increase visible count by 6
  };

  // Handle Add to Cart
  const handleAddToCart = (product) => {
    addToCart(product); // Add product to cart
    setCartMessage(`${product.name} added to cart!`); // Set success message
    setTimeout(() => setCartMessage(''), 3000); // Clear the message after 3 seconds
    navigate('/cart'); // Redirect to cart page
  };

  return (
    <Container className="category-page">
      <h2 className="text-center my-4">
        {category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ')} Products
      </h2>

      {/* Display Cart Message */}
      {cartMessage && (
        <Alert variant="success" className="text-center">
          {cartMessage}
        </Alert>
      )}

      {/* Product grid */}
      <Row>
        {filteredProducts.length > 0 ? (
          filteredProducts.slice(0, visibleCount).map((product) => (
            <Col key={product.id} md={4} sm={6} xs={12} className="mb-4">
              <Card>
                <Card.Img variant="top" src={product.image} alt={product.name} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text className="text-muted">{product.price}</Card.Text>

                  {/* Add to Cart button */}
                  <Button
                    variant="primary"
                    onClick={() => handleAddToCart(product)}  // Use handleAddToCart to show message
                    className="w-100"
                  >
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </Row>

      {filteredProducts.length > visibleCount && (
        <div className="text-center mt-4">
          <Button variant="outline-primary" onClick={loadMoreProducts}>
            Load More
          </Button>
        </div>
      )}
    </Container>
  );
};

export default CategoryPage;
