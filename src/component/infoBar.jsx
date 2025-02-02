// infoBar.jsx
import React from 'react';
import { FaFacebook, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaBriefcase, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for routing
import './infoBar.css'; // Import the external CSS file

const InfoBar = () => {
  return (
    <div className="info-bar">
      <div className="content">
        {/* Left Side */}
        <div className="left-side">
          {/* Socials Menu */}
          <ul className="socials-menu">
            <li>
              <FaFacebook className='icons' />
            </li>
            <li>
              <FaMapMarkerAlt className='icons' />
            </li>
            <li>
              <FaEnvelope className='attached-icons' />
              <span>info@csitanpurwanchal.com</span>
            </li>
            <li>
              <FaPhoneAlt className='attached-icons' />
              <span>+977-9817959559</span>
            </li>
            <li>
              <FaBriefcase className='attached-icons' />
              <span>Careers</span>
            </li>
            <li>
              <FaDownload className='attached-icons' />
              <span>Downloads</span>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="right-side">
          {/* Use Link to render buttons that navigate to routes */}
          <Link to="/login" className="underline-text">
            Login
          </Link>
          <Link to="/adminpanel" className="underline-text">
            Admin Portal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;