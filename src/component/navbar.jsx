import React, { useState } from 'react';
import { LiaAngleDownSolid } from "react-icons/lia";
import { FaMoon} from 'react-icons/fa'; // Import the moon and angle-down icons
import './navbar.css'; // Import the external CSS file

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleServicesMenu = () => {
    setServicesMenuOpen(!isServicesMenuOpen);
  };

  const closeServicesMenu = () => {
    setServicesMenuOpen(false);
  };

  return (
    <div className="navbar">
      <div className="content">
        <div>
          {/* Your logo goes here */}
          <img src="path/to/your/logo.png" alt="Logo" className="logo" />
        </div>

        <div className="menu">
          {/* Navigation menu items */}
          <nav>
            <ul className="menu-list">
              <li>HOME</li>
              <li>NOTICES</li>
              <li
                onMouseEnter={toggleServicesMenu}
                onMouseLeave={closeServicesMenu}
                onClick={toggleServicesMenu}
                className="services-dropdown"
              >
                SERVICES
                <LiaAngleDownSolid size={12} className="dropdown-icon" />
                <div className={`dropdown-menu ${isServicesMenuOpen ? 'open' : ''}`}>
                  <ul>
                    <li>Service 1</li>
                    <li>Service 2</li>
                    <li>Service 3</li>
                  </ul>
                </div>
              </li>
              <li>ABOUT</li>
              <li>CONTACT</li>
              <li>OUR EVENTS</li>
            </ul>
          </nav>

          {/* Dark mode toggle button */}
          <div className="dark-mode-toggle" onClick={toggleDarkMode}>
            <FaMoon className="moon-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
