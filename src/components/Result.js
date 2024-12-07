// src/components/Result.js
import React from 'react';
import './Result.css';

function Result({ result }) {
  return (
    <div className="result">
      <h2>Classification Result</h2>
      <p>{result || "Upload an image to see the result"}</p>
    </div>
  );
}

export default Result;
