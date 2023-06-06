import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Info from './Component/Info/Info.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Home from './Component/Home/Home.jsx';
import Navbar from './Component/Navbar/Navbar.jsx';
import Project from './Component/Project/Project.jsx';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Info />} />
          <Route path="/project" element={<Project />} /> 
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </Router>
    </div>
  );
};

export default App;

