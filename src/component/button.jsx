// Button.js
import React from "react";
import "./button.css";

const CustomButton = ({
  width,
  text,
  onClick,
  color = "CE4444",
  textColor = "fff",
  fontSize = 20,
}) => {
  const buttonStyle = {
    backgroundColor: `#${color}`,
    color: `#${textColor}`,
    fontSize: fontSize,
    width: width,
  };

  return (
    <button
      className={`button ${textColor}`}
      style={buttonStyle}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CustomButton;
