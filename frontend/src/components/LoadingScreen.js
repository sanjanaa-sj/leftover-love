import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');

  useEffect(() => {
    const loadingSteps = [
      { progress: 20, text: 'Loading ingredients...' },
      { progress: 40, text: 'Fetching recipes...' },
      { progress: 60, text: 'Preparing kitchen...' },
      { progress: 80, text: 'Almost ready...' },
      { progress: 100, text: 'Welcome to Leftover Love!' }
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < loadingSteps.length) {
        setProgress(loadingSteps[currentStep].progress);
        setLoadingText(loadingSteps[currentStep].text);
        currentStep++;
      } else {
        clearInterval(interval);
        // Wait a bit before completing
        setTimeout(() => {
          onLoadingComplete();
        }, 500);
      }
    }, 600); // Each step takes 600ms

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="loading-screen">
      <div className="loading-container">
        {/* Animated Background */}
        
        

        {/* Main Logo/Title */}
        <div className="logo-container">
          <h1 className="logo-text">Leftover Love</h1>
          <p className="logo-subtitle">Turn leftovers into delicious meals</p>
        </div>

        {/* Circular Loader */}
        <div className="circular-loader">
          <div className="loader-ring">
            <div className="loader-inner"></div>
          </div>
          <div className="loader-pulse"></div>
        </div>

        {/* Loading Text */}
        <div className="loading-text-container">
          <p className="loading-text">{loadingText}</p>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="progress-percentage">{progress}%</span>
        </div>

        {/* Floating Food Icons */}
        <div className="floating-icons">
          <span className="floating-icon" style={{ left: '10%', animationDelay: '0s' }}>🥕</span>
          <span className="floating-icon" style={{ left: '20%', animationDelay: '0.5s' }}>🍅</span>
          <span className="floating-icon" style={{ left: '80%', animationDelay: '1s' }}>🥖</span>
          <span className="floating-icon" style={{ left: '90%', animationDelay: '1.5s' }}>🧅</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;