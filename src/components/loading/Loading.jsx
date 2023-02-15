import React from "react";
import "./loading.css";

const LoadingScreen = () => {
  return (
    <div className="loading-container">
      <div className="loading-text-container">
        <h1 className="loading-text">Loading</h1>
        <div className="loading-dots">
          <div className="dot dot1"></div>
          <div className="dot dot2"></div>
          <div className="dot dot3"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
