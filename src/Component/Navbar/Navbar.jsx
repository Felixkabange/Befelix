import React, { useState } from 'react';
import './Navbar.css';
import Fellynew from '../../Assets/fellynew_logo.jpeg'; 
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setShowNav(!showNav);
  }

  const handleLogoClick = () => {
    window.location.href = "/"; // or use history.push('/') if using Router
  }

  return (
    <div className="navbar-container">
      <div className="navbar-logo" onClick={handleLogoClick} style={{cursor: 'pointer'}}>
        <img src={Fellynew} alt="Fellynew logo" />
      </div>
      <div className={`navbar-links ${showNav ? 'active' : ''}`}>
        <Link to="/" onClick={toggleNav} className={location.pathname === '/' ? 'active' : ''} id="Home">Home</Link>
        <Link to="/contact" onClick={toggleNav} className={location.pathname === '/contact' ? 'active' : ''} id="Contact">Contact</Link>
        <Link to="/project" onClick={toggleNav} className={location.pathname === '/project' ? 'active' : ''} id="Project">Project</Link>
        <Link to="/about" onClick={toggleNav} className={location.pathname === '/about' ? 'active' : ''} id="Info">Info</Link>
      </div>
      <div className={`burger ${showNav ? 'active' : ''}`} onClick={toggleNav}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  )
}

export default Navbar;

