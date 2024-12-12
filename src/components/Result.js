// src/components/Result.js
import React from 'react';
import './Result.css';

function Result({ result, processedImages }) {
  return (
    <div className="result">
      <h2>Result</h2>
      {(!processedImages || processedImages.length === 0) && (
        <div className="result-placeholder">
          <p>Result will be displayed here</p>
        </div>
      )}
      {processedImages && processedImages.length > 0 && (
        <div className="processed-images">
          {processedImages.map((image, index) => (
            <img key={index} src={image} alt={`Processed ${index + 1}`} />
          ))}
        </div>
      )}
      {result && <p>{result}</p>}
    </div>
  );
}

export default Result;
