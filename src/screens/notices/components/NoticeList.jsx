// src/components/NoticeList/NoticeList.js
import React, { useEffect, useState } from 'react';
import './NoticeList.css';

const NoticeList = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch notices from the server
    const fetchNotices = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/notices'); // Replace with your server URL
        if (!response.ok) {
          throw new Error('Failed to fetch notices');
        }
        const data = await response.json();
        setNotices(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="notice-list">
      <ul className="notice-items">
        {notices.map((notice) => (
          <li key={notice.id} className="notice-item">
            <h3 className="notice-item-title">{notice.title}</h3>
            <p className="notice-item-description">{notice.description}</p>
            <p className="notice-item-date">{new Date(notice.date).toLocaleDateString()}</p>

            {notice.attachments.length > 0 && (
              <div className="notice-attachments">
                <h4>Attachments:</h4>
                <ul>
                  {notice.attachments.map((attachment, index) => (
                    <li key={index} className="attachment-item">
                      <a href="#" className="attachment-link">{attachment}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoticeList;
