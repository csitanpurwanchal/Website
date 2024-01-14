// Import necessary React icons and components

import React, { useState } from "react";
import { LiaAngleDownSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaMoon } from "react-icons/fa";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isServicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleServicesMenu = () => {
    setServicesMenuOpen(!isServicesMenuOpen);
  };

  const closeServicesMenu = () => {
    setServicesMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`navbar ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
      <div className="content">
        <div>
          {/* Your logo goes here */}
          <img src="path/to/your/logo.png" alt="Logo" className="logo" />
        </div>

        <div className="menu">
          {/* Navigation menu items */}
          <nav className={`menu-wrapper ${isMobileMenuOpen ? "mobile" : ""}`}>
            <ul className="menu-list">
              <li>
                <NavLink to="/" exact activeClassName="active">
                  HOME
                </NavLink>
              </li>
              <li>NOTICES</li>
              <li
                onMouseEnter={toggleServicesMenu}
                onMouseLeave={closeServicesMenu}
                onClick={toggleServicesMenu}
                className="services-dropdown"
              >
                SERVICES
                <LiaAngleDownSolid size={12} className="dropdown-icon" />
                <div
                  className={`dropdown-menu ${
                    isServicesMenuOpen ? "open" : ""
                  }`}
                >
                  <ul>
                    <li>Service 1</li>
                    <li>Service 2</li>
                    <li>Service 3</li>
                  </ul>
                </div>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active">
                  ABOUT
                </NavLink>
              </li>
              <li>CONTACT</li>
              <li>OUR EVENTS</li>
            </ul>
          </nav>

          {/* Dark mode toggle button */}
          <div className="dark-mode-toggle" onClick={toggleDarkMode}>
            <FaMoon className="moon-icon" />
          </div>

          {/* Hamburger icon for small screens */}
          <div className="hamburger-menu" onClick={toggleMobileMenu}>
            <RxHamburgerMenu size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
