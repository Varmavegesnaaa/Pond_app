import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"; // Import the CSS file

const App = () => {
  const navigate = useNavigate();

  const handleSiteDetailsClick = () => {
    navigate("/site-details");
  };

  const handleTankDetailsClick = () => {
    navigate("/tank-details");
  };

  const handleMaterialDetailsClick = () => {
    navigate("/material-details");
  };

  const handleSeedDetailsClick = () => {
    navigate("/seed-details");
  };

  const handleFeedStockClick = () => {
    navigate("/feed-stock");
  };

  const handleDailyFeedClick = () => {
    navigate("/daily-feed");
  };

  const handleSeedGrowthClick = () => {
    navigate("/seed-growth");
  };

  const handleDiseasesMedicinesClick = () => {
    navigate("/diseases-medicines");
  };

  const handleElectricityClick = () => {
    navigate("/electricity");
  };

  const handleManPowerClick = () => {
    navigate("/man-power");
  };

  const handleOtherSourcesClick = () => {
    navigate("/other-sources");
  };

  const handleHarvestingClick = () => {
    navigate("/harvesting");
  };

  const handleBalanceSheetClick = () => {
    navigate("/balance-sheet");
  };

  return (
    <>
      <div className="button-container">
        <button onClick={handleSiteDetailsClick}>Site Details</button>
        <button onClick={handleTankDetailsClick}>Tank Details</button>
        <button onClick={handleOtherSourcesClick}>Other Sources</button>
        <button onClick={handleElectricityClick}>Electricity</button>
        <button onClick={handleMaterialDetailsClick}>Material Details</button>
        <button onClick={handleManPowerClick}>Man Power</button>
        <button onClick={handleSeedDetailsClick}>Seed Details</button>
        <button onClick={handleFeedStockClick}>Feed Stock</button>
        <button onClick={handleDailyFeedClick}>Daily Feed</button>
        <button onClick={handleSeedGrowthClick}>Seed Growth</button>
        <button onClick={handleDiseasesMedicinesClick}>Diseases and Medicines</button>
        <button onClick={handleHarvestingClick}>Harvesting</button>
        <button onClick={handleBalanceSheetClick}>Balance Sheet</button>
      </div>
    </>
  );
};

export default App;
