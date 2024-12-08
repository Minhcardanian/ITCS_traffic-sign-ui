// src/components/Result.js
import React from 'react';
import './Result.css';

function Result({ result }) {
  if (!result) return (
    <div className="result">
      <h2>Result</h2>
      <p>No result available. Please upload and process an image.</p>
    </div>
  );

  return (
    <div className="result">
      <h2>Result</h2>
      <p>{result}</p>
    </div>
  );
}

export default Result;
