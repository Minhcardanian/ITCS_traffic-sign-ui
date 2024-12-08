// src/components/Preview.js
import React from 'react';
import './Preview.css';

function Preview({ file }) {
  if (!file) return null;

  const fileURL = typeof file === 'string' ? file : URL.createObjectURL(file);

  return (
    <div className="preview">
      <h3>Preview</h3>
      <img src={fileURL} alt="Uploaded Preview" />
    </div>
  );
}

export default Preview;
