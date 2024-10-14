import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Category from './components/Category';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import EditProfile from './components/EditProfile';
import ChangePassword from './components/ChangePassword';
import { CartProvider } from './components/Cartcontext'; // Named import
import CategoryPage from './components/CategoryPage';
import products from './components/products'; 
import HomePage from './components/Home';

const App = () => {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([]); // State for cart items

  // Function to add product to cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]); // Add selected product to the cart
  };

  return (
    <CartProvider>
      <Router>
        <Navigation user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/products" element={<ProductList products={products} />} />
          <Route path="/products/:id" element={<ProductDetail products={products} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} /> {/* Pass cartItems to Cart */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/category/:category" element={<CategoryPage products={products} addToCart={addToCart} />} /> {/* Pass addToCart function */}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
