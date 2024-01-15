import React from "react";

const TextButton = ({
  width,
  text = "ABOUT US",
  onClick,
  color = "ce4444",
  fontSize = 20,
}) => {
  const buttonStyle = {
    width: width,
    display: "flex",
    alignItems: "center", // Vertical alignment
    justifyContent: "center", // Horizontal alignment
    textAlign: "center", // Center the text
    color: `#${color}`,
    fontSize: fontSize,
    padding: "10px",
    cursor: "pointer", // Add pointer cursor
    transition: "background-color 0.3s, border-radius 0.3s",
    borderRadius: "5px",
    border: `2px solid #${color}`,
    marginLeft: "10px", // Initial border-radius
  };

  return (
    <>
      <div className="textButton" style={buttonStyle} onClick={onClick}>
        {text}
      </div>
    </>
  );
};

export default TextButton;
