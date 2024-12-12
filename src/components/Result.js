// src/components/Result.js
import React from 'react';
import './Result.css';

function Result({ result, processedImages }) {
  if (!result || !processedImages || processedImages.length === 0) {
    return (
      <div className="result">
        <h2>Result</h2>
        <p>No result available. Please upload and process an image.</p>
      </div>
    );
  }

  return (
    <div className="result">
      <h2>Result</h2>
      <div className="processed-images">
        {processedImages.map((image, index) => (
          <img key={index} src={image} alt={`Processed ${index + 1}`} />
        ))}
      </div>
      <p>{result}</p>
    </div>
  );
}

export default Result;
