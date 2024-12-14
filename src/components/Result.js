// src/components/Result.js
import React from 'react';
import './Result.css';

function Result({ result }) {
  return (
    <div className="result">
      <h2>Result</h2>
      {result ? (
        <div className="result-details">
          <p className="result-label">{result.label}</p>
          <div className="result-images">
            <div className="result-image-wrapper">
              <img
                src={result.SemanticImage}
                alt="Semantic Context"
                className="result-image"
              />
              <p>Semantic Image</p>
            </div>
            <div className="result-image-wrapper">
              <img
                src={result.IlluImage}
                alt="Illustration"
                className="result-image"
              />
              <p>Illustration Image</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="result-placeholder">
          <p>Result will be displayed here</p>
        </div>
      )}
    </div>
  );
}

export default Result;
