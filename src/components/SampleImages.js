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

  const handleImageClick = async (src) => {
    try {
      const response = await fetch(src);
      if (!response.ok) {
        throw new Error('Network response was not ok when fetching sample image.');
      }

      const blob = await response.blob();
      // Create a File from the Blob. The name and type can be inferred or hard-coded.
      const file = new File([blob], `sample-${Date.now()}.jpg`, { type: blob.type });

      // Now pass this file object to onSelectSample
      onSelectSample(file);
    } catch (error) {
      console.error('Error fetching sample image:', error);
      alert('Failed to load sample image. Please try another one.');
    }
  };

  return (
    <div className="sample-images">
      <h3>Sample Images</h3>
      <div className="images-grid">
        {sampleImages.map((src, index) => (
          <div key={index} className="sample-image-container">
            <img
              src={src}
              alt={`Sample ${index + 1}`}
              onClick={() => handleImageClick(src)}
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
