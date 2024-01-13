import React from 'react';
import './noticesBar.css'; // Import the external CSS file

const noticesData = [
  { id: 1, heading: 'Important Notice 1' },
  { id: 2, heading: 'Important Notice 2' },
  { id: 3, heading: 'Important Notice 3' },
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
