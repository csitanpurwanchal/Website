// Button.js
import React from 'react';
import './button.css';

const Button = ({ text, onClick, color = 'CE4444', textColor = 'text-white' }) => {
  const buttonStyle = {
    backgroundColor: `#${color}`,
  };

  return (
    <button className={`button ${textColor}`} style={buttonStyle} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
