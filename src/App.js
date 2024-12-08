// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import UploadArea from './components/UploadArea';
import Preview from './components/Preview';
import Result from './components/Result';
import SampleImages from './components/SampleImages';
import Footer from './components/Footer';
import BackgroundMap from './components/BackgroundMap';
import DropdownInfo from './components/DropdownInfo';
import NightModeToggle from './components/NightModeToggle';
import './App.css';
import './components/ClickEffect.css';

function App() {
  // State management for uploaded file and result
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');

  // Handle file upload
  const handleUpload = (uploadedFile) => {
    if (!uploadedFile) {
      console.error('No file uploaded.');
      return;
    }
    console.log('File uploaded:', uploadedFile);
    setFile(uploadedFile);

    // Simulate processing result (API integration can replace this)
    setTimeout(() => setResult('Crossroad Warning Sign'), 2000);
  };

  // Handle sample image selection
  const handleSampleSelect = (src) => {
    if (!src) {
      console.error('No sample selected.');
      return;
    }
    console.log('Sample image selected:', src);
    setFile(src);
    setResult('Example result for selected sample');
  };

  // Add click effect logic
  useEffect(() => {
    const handleClick = (e) => {
      const uploadArea = document.querySelector('.upload-area');
      if (uploadArea && uploadArea.contains(e.target)) {
        // Prevent click effect inside upload area
        return;
      }

      const effect = document.createElement('div');
      effect.className = 'click-effect';
      effect.style.left = `${e.pageX - 10}px`;
      effect.style.top = `${e.pageY - 10}px`;
      document.body.appendChild(effect);

      setTimeout(() => {
        effect.remove();
      }, 400);
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="app">
      {/* Map Background */}
      <BackgroundMap />

      {/* Dropdown Info */}
      <DropdownInfo />

      {/* Night Mode Toggle */}
      <NightModeToggle />

      {/* Main Content */}
      <div className="content">
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
    </div>
  );
}

export default App;