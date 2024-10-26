import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';



import HomePage from './components/Home';

const App = () => {
  const [user, setUser] = useState(null);
 

 

  return (
   
      <Router>
        <Navigation user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
         
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
  
  );
};

export default App;
