import React from 'react';
import './Result.css';

function Result({ result, processedImages }) {
  return (
    <div className="result">
      <h2>Result</h2>
      <div className="result-box">
        <div className="processed-images">
          {processedImages.map((image, index) => (
            <img key={index} src={image} alt={`Processed ${index + 1}`} />
          ))}
        </div>
        <p>{result || 'Result will be displayed here'}</p>
      </div>
    </div>
  );
}

export default Result;
