import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Feed_Stock_operations.css';


const FeedComponent = () => {
  const [feedData, setFeedData] = useState({
    feed_name: '',
    feed_count: null,
    message: '',
  });

  const navigate = useNavigate();

  const [responseMessage, setResponseMessage] = useState('');

  const handleBackClick = () => {
    navigate('/feed-stock'); // Navigate to the home page
  };

  const handleChange = (e) => {
    setFeedData({ ...feedData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/feed-stock/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedData),
      });

      const result = await response.json();

      if (response.ok) {
        setResponseMessage(result.message);
        setFeedData({ feed_name: '', feed_count: null, message: '' }); // Clear form after submission
      } else {
        setResponseMessage('Error submitting form!');
        console.error(result.error);
      }
    } catch (error) {
      setResponseMessage('Error submitting form!');
      console.error(error);
    }
  };

  return (
    <div>
      <div className="back-arrow" onClick={handleBackClick}>
        &#8592; {/* Unicode for left arrow */}
      </div>
      <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Feed Name:</label>
          <input
            type="text"
            name="feed_name"
            value={feedData.feed_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Feed Quantity:</label>
          <input
            type="text"
            name="feed_count"
            value={feedData.feed_count}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            name="message"
            value={feedData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default FeedComponent;