import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
// Import your stylesheet (create this file if not already present)

const TextButton = ({
  text = "Know More",
  onClick,
  color = "ce4444",
  fontSize = 20,
}) => {
  const buttonStyle = {
    display: "flex",
    alignItems: "center", // Vertical alignment
    color: `#${color}`,
    fontSize: fontSize,
    padding: "10px",
    cursor: "pointer", // Add pointer cursor
    transition: "background-color 0.3s, border-radius 0.3s",
    borderRadius: "5px", // Initial border-radius
  };

  const iconStyle = {
    marginLeft: "8px",
    marginTop: "3px", // Adjust the spacing between text and icon as needed
  };

  return (
    <>
      <div className="textButton" style={buttonStyle} onClick={onClick}>
        {text}
        <span style={iconStyle}>
          <IoArrowForwardCircleOutline size={20} />
        </span>
      </div>
    </>
  );
};

export default TextButton;
