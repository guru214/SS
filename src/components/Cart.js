import React, { useContext } from 'react';
import { CartContext } from '../components/Cartcontext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext); // Get cartItems and removeFromCart

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul className="list-group">
          {cartItems.map((item) => (
            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
              <div>
                <h5>{item.name}</h5>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {item.price}</p>
              </div>
              <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
