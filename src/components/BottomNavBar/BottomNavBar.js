import React from 'react';
import './BottomNavBar.css';

const BottomNavBar = () => {
  return (
    <nav className="bottom-navbar">
      <div className="navbar-logo">META STACK OVERFLOW</div>
      <div className="navbar-links">
        <div className="navbar-section">
          <a>Questions</a>
          <a>Help</a>
        </div>
        <div className="navbar-section">
          <a>PRODUCTS</a>
          <a>Teams</a>
          <a>Advertising</a>
          <a>Collectives</a>
          <a>Talent</a>
        </div>
        <div className="navbar-section">
          <a>COMPANY</a>
          <a>About</a>
          <a>Press</a>
          <a>Work Here</a>
          <a>Legal</a>
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
          <a>Contact Us</a>
          <a>Cookie Settings</a>
          <a>Cookie Policy</a>
        </div>
        <div className="navbar-section">
          <a>STACK EXCHANGE NETWORK</a>
          <a>Technology</a>
          <a>Culture & recreation</a>
          <a>Life & arts</a>
          <a>Science</a>
          <a>Professional</a>
          <a>Business</a>
          <a>API</a>
          <a>Data</a>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavBar;
