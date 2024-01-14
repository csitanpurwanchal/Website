import React from "react";
import "./noticesbar.css"; // Import the external CSS file

const noticesData = [
  { id: 1, heading: "Important Notice 1" },
  { id: 2, heading: "Important Notice 2" },
  { id: 3, heading: "Important Notice 3" },
  { id: 4, heading: "Important Notice 1" },
  { id: 5, heading: "Important Notice 2" },
  { id: 6, heading: "Important Notice 3" },
  { id: 7, heading: "Important Notice 1" },
  { id: 8, heading: "Important Notice 2" },
  { id: 9, heading: "Important Notice 3" },
  { id: 10, heading: "Important Notice 1" },
  { id: 11, heading: "Important Notice 2" },
  { id: 12, heading: "Important Notice 3" },
  // Add more notices as needed
];

const NoticesBar = () => {
  return (
    <div className="notices-bar">
      <div className="content">
        {/* Notices Button */}
        <button className="notices-button">NOTICES</button>

        {/* Horizontal Auto-Scrolling List */}
        <div className="scrolling-list">
          <ul>
            {noticesData.map((notice) => (
              <li key={notice.id}>{notice.heading}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NoticesBar;
