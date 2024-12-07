// src/components/Preview.js
import React from 'react';
import './Preview.css';

function Preview({ file }) {
  if (!file) return null;

  return (
    <div className="preview">
      <img src={URL.createObjectURL(file)} alt="Uploaded Preview" />
    </div>
  );
}

export default Preview;
