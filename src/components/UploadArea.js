// src/components/UploadArea.js
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './UploadArea.css';

function UploadArea({ onUpload }) {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      onUpload(acceptedFiles[0]); // Pass file to parent component
    }
  }, [onUpload]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="upload-area">
      <input {...getInputProps()} />
      <p>Drag and drop an image here, or click to upload</p>
    </div>
  );
}

export default UploadArea;
