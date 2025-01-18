import React, { useEffect, useState } from "react";
import "./NoticeList.css";

const NoticeList = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [searchQuery, setSearchQuery] = useState(""); // Search state
  const [sortOrder, setSortOrder] = useState("newest"); // Sort state

  useEffect(() => {
    // Simulating a delay to mock fetching data
    setLoading(true);
    setTimeout(() => {
      try {
        // Replace with your local data
        const localNotices = [
          {
            id: 1,
            title: "Notice 1",
            description: "This is the first notice.",
            date: "2025-01-01",
          },
          {
            id: 2,
            title: "Notice 2",
            description: "This is the second notice.",
            date: "2025-01-10",
          },
          {
            id: 3,
            title: "Notice 3",
            description: "This is the third notice.",
            date: "2024-12-25",
          },
        ];
        setNotices(localNotices);
      } catch (error) {
        console.error("Error loading notices:", error);
        setError("Failed to load notices. Please try again later.");
      } finally {
        setLoading(false);
      }
    }, 1000); // Simulated delay of 1 second
  }, []);

  // Filtered notices based on the search query
  const filteredNotices = notices.filter(
    (notice) =>
      notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort notices based on the selected order
  const sortedNotices = [...filteredNotices].sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });

  return (
    <div className="notice-list">
      <div className="controls">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search notices..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        {searchQuery && (
          <button onClick={() => setSearchQuery("")} className="clear-btn">
            Clear
          </button>
        )}

        {/* Sort Dropdown */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="sort-select"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>

        {/* Add Notice Button */}
        {/* <button className="add-btn">Add Notice</button> */}
      </div>

      {loading ? (
        <p>Loading notices...</p> // Display loading message
      ) : error ? (
        <p className="error-message">{error}</p> // Display error message
      ) : sortedNotices.length > 0 ? (
        <div className="notice-grid">
          {sortedNotices.map((notice) => (
            <div key={notice.id} className="notice-item">
              <h3 className="notice-title">{notice.title}</h3>
              <p className="notice-description">{notice.description}</p>
              <p className="notice-date">
                Uploaded on: {new Date(notice.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No notices available at the moment.</p> // Display fallback message
      )}
    </div>
  );
};

export default NoticeList;
