// Content.js
import React from "react";

const Content = ({ headings, handleRef, handleHighlight }) => {
  return (
    <div className="content">
      {headings.map((heading, index) => (
        <div
          key={index}
          ref={(ref) => handleRef(ref, index)}
          onMouseEnter={() => handleHighlight(index)}
        >
          <h2>{heading}</h2>
          <p>Your content goes here...</p>
        </div>
      ))}
    </div>
  );
};

export default Content;
