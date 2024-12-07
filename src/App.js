// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import UploadArea from './components/UploadArea';
import Preview from './components/Preview';
import Result from './components/Result';
import SampleImages from './components/SampleImages';
import Footer from './components/Footer';
import './App.css';

function App() {
  // State management for file and result
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');

  // Handle file upload
  const handleUpload = (uploadedFile) => {
    console.log('File uploaded:', uploadedFile);
    setFile(uploadedFile);

    // Simulate a result after processing (API call can replace this)
    setTimeout(() => setResult('Crossroad Warning Sign'), 2000);
  };

  // Handle sample image selection
  const handleSampleSelect = (src) => {
    console.log('Sample image selected:', src);
    setFile(src);
    setResult('Example result for selected sample');
  };

  return (
    <div className="app">
      {/* Header Section */}
      <Header />

      {/* Upload Area */}
      <UploadArea onUpload={handleUpload} />

      {/* Sample Images for Testing */}
      <SampleImages onSelectSample={handleSampleSelect} />

      {/* Preview Uploaded File */}
      {file && <Preview file={file} />}

      {/* Display Classification Result */}
      {result && <Result result={result} />}

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
