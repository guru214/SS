import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../components/Cartcontext'; // Import CartContext

const ProductList = ({ products }) => {
  const { addToCart } = useContext(CartContext); // Destructure addToCart from CartContext

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4" key={product.id}>
          <div className="card mb-4">
            <img src={product.image} className="card-img-top" alt={product.name} style={{ height: '200px' }} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.price}</p>
              <Link to={`/products/${product.id}`} className="btn btn-primary mb-2">View Details</Link>
              <button className="btn btn-success" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
