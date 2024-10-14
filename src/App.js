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
import CartProvider from './components/Cartcontext';
import CategoryPage from './components/CategoryPage';
import products from './components/products';  // Import the product list
import HomePage from './components/Home';

const cartItems = [];

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <CartProvider>
      <Router>
        <Navigation user={user} setUser={setUser} />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Category Listing */}
          <Route path="/categories" element={<Category />} />

          {/* Product List */}
          <Route path="/products" element={<ProductList products={products} />} />

          {/* Product Detail with Route Param */}
          <Route path="/products/:id" element={<ProductDetail products={products} />} />

          {/* Cart */}
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />

          {/* Checkout */}
          <Route path="/checkout" element={<Checkout />} />

          {/* Authentication */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Profile & Settings */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/change-password" element={<ChangePassword />} />

          {/* Category Page with Dynamic Route - Display products by category */}
          <Route path="/category/:category" element={<CategoryPage products={products} />} />

          {/* Home Page (Duplicate, can be removed if redundant) */}
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
