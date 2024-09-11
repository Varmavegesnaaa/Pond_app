import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const FeedListComponent = () => {
  const [feeds, setFeeds] = useState([]);  // Initialized as an empty array
  const [groupedFeeds, setGroupedFeeds] = useState({});

  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/feed-stock'); // Navigate to the home page
  };

  // Fetch data from the backend API
  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        const response = await fetch('https://pond-app-backend.vercel.app/feeds');
        const data = await response.json();

        // Log data to verify its structure
        console.log('API Response:', data);

        // Ensure data is an array before setting it in the state
        if (Array.isArray(data)) {
          setFeeds(data);

          // Group feeds by name and sum their counts
          const grouped = data.reduce((acc, feed) => {
            if (acc[feed.feed_name]) {
              acc[feed.feed_name] += feed.feed_count;
            } else {
              acc[feed.feed_name] = feed.feed_count;
            }
            return acc;
          }, {});
          
          setGroupedFeeds(grouped);
        } else {
          console.error('Error: Data is not an array');
        }
      } catch (error) {
        console.error('Error fetching feed data:', error);
      }
    };

    fetchFeeds();
  }, []);

  return (
    <div>
        <div className="back-arrow" onClick={handleBackClick}>
        &#8592; {/* Unicode for left arrow */}
      </div>

      <h2>Total Feed Count by Name</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Feed Name</th>
            <th>Total Count</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(groupedFeeds).length > 0 ? (
            Object.keys(groupedFeeds).map((feed_name, index) => (
              <tr key={index}>
                <td>{feed_name}</td>
                <td>{groupedFeeds[feed_name]}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No data available</td>
            </tr>
          )}
        </tbody>
      </table>

      <h2>All Feed Records</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Feed Name</th>
            <th>Feed Count</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {feeds.length > 0 ? (
            feeds.map((feed, index) => (
              <tr key={index}>
                <td>{feed.feed_name}</td>
                <td>{feed.feed_count}</td>
                <td>{feed.message}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No feeds available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

// uygcug

export default FeedListComponent;
