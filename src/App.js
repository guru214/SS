import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import DevOps from './pages/DevOps';
import AWS from './pages/AWS';
import Azure from './pages/Azure';




import HomePage from './components/Home';

const App = () => {
  const [user, setUser] = useState(null);
 

 

  return (
   
      <Router>
        <Navigation user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />         
          <Route path="/" element={<HomePage />} />
          <Route path="/category/Devops" element={<DevOps />} />
        <Route path="/category/AWS" element={<AWS />} />
        <Route path="/category/Azure" element={<Azure />} />
        </Routes>
        <Footer /> 
      </Router>
  
  );
};

export default App;
