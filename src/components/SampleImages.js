// src/components/SampleImages.js
import React from 'react';
import './SampleImages.css';

function SampleImages({ onSelectSample }) {
  const sampleImages = [
    '/images/sample1.jpg',
    '/images/sample2.jpg',
    '/images/sample3.jpg'
  ];

  return (
    <div className="sample-images">
      <h3>Sample Images</h3>
      <div className="images">
        {sampleImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Sample ${index + 1}`}
            onClick={() => onSelectSample(src)}
          />
        ))}
      </div>
    </div>
  );
}

export default SampleImages;
