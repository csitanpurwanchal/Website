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
              <li onClick={toggleMobileMenu}>
                <NavLink to="/" exact activeClassName="active">
                  HOME
                </NavLink>
              </li>
              <li onClick={toggleMobileMenu}>NOTICES</li>

              <li onClick={toggleMobileMenu}>
                <NavLink to="/about" activeClassName="active">
                  ABOUT
                </NavLink>
              </li>

              <li>OUR EVENTS</li>
              <li onClick={toggleMobileMenu}>
                <NavLink to="/getinvolved" activeClassName="active">
                  GET INVOLVED
                </NavLink>
              </li>
              <li onClick={toggleMobileMenu}>
                <NavLink to="/contact" activeClassName="active">
                  <div className="navbarButton">CONTACT US</div>
                </NavLink>
              </li>
            </ul>
          </nav>

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
