import React from "react";
import { useNavigate } from "react-router-dom";
import "./Feed_Stock.css"; // Import the CSS file

const Feed_Stock = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/'); // Navigate to the home page
  };

  const handleViewStock = () => {
    navigate("/feed-stock/view");
  };

  const handleAddStock = () => {
    navigate("/feed-stock/add");
  };

  const handleSubStock = () => {
    navigate("/feed-stock/subtract");
  };

  return (
    <>
    <div className="back-arrow" onClick={handleBackClick}>
        &#8592; {/* Unicode for left arrow */}
      </div>
      <div className="button-container">
        <button onClick={handleViewStock}>View Feed Stock</button>
        <button onClick={handleAddStock}>Add Stock</button>
        <button onClick={handleSubStock}>Subtract Stock</button>
        </div>
    </>
  )
};

export default Feed_Stock;