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


const products = [
  { id: '1', name: 'Laptop', price: '$1000', image: '/path/to/laptop.jpg', description: 'High-performance laptop', category: 'Electronics' },
  { id: '2', name: 'T-Shirt', price: '$20', image: '/path/to/tshirt.jpg', description: 'Comfortable cotton t-shirt', category: 'Fashion' },
  { id: '3', name: 'Sofa', price: '$500', image: '/path/to/sofa.jpg', description: 'Luxury sofa', category: 'Furniture' },
  { id: '4', name: 'Washing Machine', price: '$400', image: '/path/to/washing_machine.jpg', description: 'Efficient washing machine', category: 'Home Appliances' }
];

const cartItems = [];

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <CartProvider>
 <Router>
      <Navigation user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/products" element={<ProductList products={products} />} />
        <Route path="/products/:id" element={<ProductDetail products={products} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
    </Router>
    </CartProvider>
   
  );
};

export default App;
