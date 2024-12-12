// src/components/SampleImages.js
import React from 'react';
import './SampleImages.css';

function SampleImages({ onSelectSample }) {
  const sampleImages = [
    '/Sample1.jpg',
    '/Sample2.jpg',
    '/Sample3.jpg',
    '/Sample4.jpg',
    '/Sample5.jpg',
    '/Sample6.jpg',
  ];

  return (
    <div className="sample-images">
      <h3>Sample Images</h3>
      <div className="images-grid">
        {sampleImages.map((src, index) => (
          <div key={index} className="sample-image-container">
            <img
              src={src}
              alt={`Sample ${index + 1}`}
              onClick={() => onSelectSample(src)}
              className="sample-image"
            />
            <p className="sample-label">{`Sample ${index + 1}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SampleImages;
