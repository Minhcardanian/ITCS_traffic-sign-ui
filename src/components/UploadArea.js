// src/components/UploadArea.js
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './UploadArea.css';

function UploadArea({ onUpload }) {
  const [errorMessage, setErrorMessage] = useState('');

  const onDrop = useCallback(
    (acceptedFiles) => {
      setErrorMessage(''); // Clear previous errors

      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];

        // Validate file type (e.g., only images)
        if (!file.type.startsWith('image/')) {
          setErrorMessage('Please upload a valid image file (e.g., JPG, PNG).');
          return;
        }

        onUpload(file); // Pass file to parent component
      } else {
        setErrorMessage('No files were uploaded. Please try again.');
      }
    },
    [onUpload]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*', // Restrict file types to images
    maxFiles: 1,       // Allow only one file to be uploaded at a time
  });

  return (
    <div className="upload-area-container">
      <div {...getRootProps()} className="upload-area">
        <input {...getInputProps()} />
        <div className="upload-prompt">
          <p>Drag and drop an image here</p>
          <p>or click to upload</p>
        </div>
      </div>
      {errorMessage && <p className="upload-error">{errorMessage}</p>}
    </div>
  );
}

export default UploadArea;
