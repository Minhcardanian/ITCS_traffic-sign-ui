import React from 'react';
import './Result.css';

function Result({ result }) {
  // Show placeholder if no result or incomplete data is present
  const isResultAvailable = result && result.label;

  // Clean up label to remove redundant phrases
  const cleanLabel = (label) => label.replace('The sign is: ', '');

  return (
    <div className="result">
      <h2>Result</h2>

      {isResultAvailable ? (
        // Display result details when valid result data exists
        <div className="result-details">
          <div className="result-images">
            {/* Semantic Image Section */}
            {result.SemanticImage && (
              <div className="result-image-wrapper">
                <img
                  src={result.SemanticImage}
                  alt="Semantic Context"
                  className="result-image"
                />
                <p>Semantic Image</p>
              </div>
            )}

            {/* Illustration Image Section */}
            {result.IlluImage && (
              <div className="result-image-wrapper">
                <img
                  src={result.IlluImage}
                  alt="Illustration"
                  className="result-image"
                />
                <p>Illustration Image</p>
              </div>
            )}
          </div>

          {/* Label Section: Cleaned label below the images */}
          <div className="result-label">
            <p>The sign is: {cleanLabel(result.label)}</p>
          </div>
        </div>
      ) : (
        // Placeholder when no valid result exists
        <div className="result-placeholder">
          <p>Result will be displayed here</p>
        </div>
      )}
    </div>
  );
}

export default Result;
