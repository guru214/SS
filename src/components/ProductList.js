// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { CartContext } from '../components/Cartcontext'; // Import CartContext

// const ProductList = ({ products }) => {
//   const { addToCart } = useContext(CartContext); // Destructure addToCart from CartContext

//   return (
//     <div className="row">
//       {products.map((product) => (
//         <div className="col-md-4" key={product.id}>
//           <div className="card mb-4">
//             <img src={product.image} className="card-img-top" alt={product.name} style={{ height: '200px' }} />
//             <div className="card-body">
//               <h5 className="card-title">{product.name}</h5>
//               <p className="card-text">{product.price}</p>
//               <Link to={`/products/${product.id}`} className="btn btn-primary mb-2">View Details</Link>
//               <button className="btn btn-success" onClick={() => addToCart(product)}>Add to Cart</button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;
import React from 'react';
import products from './products';  // Import your product data

const ProductList = ({ category }) => {
  // Filter products by the selected category
  const filteredProducts = products.filter(product => product.category === category);

  return (
    <div className="product-list">
      <h2>{category}</h2>
      <div className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

