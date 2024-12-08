// src/components/Preview.js
import React from 'react';
import './Preview.css';

function Preview({ file }) {
  if (!file) return null;

  // Handle both URLs and File objects
  const fileURL = file instanceof File ? URL.createObjectURL(file) : file;

  return (
    <div className="preview">
      <h3>Preview</h3>
      <img src={fileURL} alt="Uploaded Preview" />
    </div>
  );
}

export default Preview;
