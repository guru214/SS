import React from 'react';
import { useCart } from './Cartcontext'; // Import the useCart hook

const Cart = () => {
  const { cartItems, removeFromCart } = useCart(); // Get cartItems and removeFromCart from context

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <h4>{item.name}</h4>
              <p>{item.price}</p>
              <p>Quantity: {item.quantity}</p>

              {/* Remove from cart button */}
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
