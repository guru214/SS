import React, { useState } from 'react';
import { useCart } from './Cartcontext'; // Import your Cart context
import { Link, useNavigate } from 'react-router-dom';
import './Cart.css';  // Import CSS for styling

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart(); // Get cartItems, remove and update methods from context
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    // Redirect to the checkout page
    navigate('/checkout');
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>{item.price} USD</p>
                  <div className="cart-quantity-controls">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
                <div className="cart-item-total">
                  <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Cart Summary</h3>
            <p>Total Price: ${calculateTotal()}</p>
            <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
            <Link to="/category" className="continue-shopping-link">Continue Shopping</Link>
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <h3>Your cart is empty!</h3>
          <Link to="/" className="continue-shopping-link">Start Shopping</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
