import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import UploadArea from './components/UploadArea';
import Preview from './components/Preview';
import Result from './components/Result';
import SampleImages from './components/SampleImages';
import Footer from './components/Footer';
import Loader from './components/Loader';
import BackgroundMap from './components/BackgroundMap';
import './App.css';
import './components/ClickEffect.css';

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false); // State to toggle the dropdown info

  const handleUpload = (uploadedFile) => {
    if (!uploadedFile) {
      alert('No file uploaded. Please try again.');
      return;
    }
    console.log('File uploaded:', uploadedFile);
    setFile(URL.createObjectURL(uploadedFile)); // Convert file to a URL for display
    setResult(''); // Clear result on new upload
  };

  const handleSampleSelect = (src) => {
    if (!src) {
      alert('No sample selected. Please try again.');
      return;
    }
    console.log('Sample image selected:', src);
    setFile(src); // Use the provided image URL directly
    setResult(''); // Clear result on new sample selection
  };

  const handleSend = () => {
    if (!file) {
      alert('Please upload or select an image first.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResult('The sign to examine is: Crossroad Warning Sign'); // Simulated result
    }, 2000); // Simulated processing time
  };

  const toggleInfoGroup = () => {
    setIsInfoOpen(!isInfoOpen);
  };

  useEffect(() => {
    const handleClick = (e) => {
      const uploadArea = document.querySelector('.upload-area');
      if (uploadArea && uploadArea.contains(e.target)) return;

      const effect = document.createElement('div');
      effect.className = 'click-effect';
      effect.style.left = `${e.pageX - 10}px`;
      effect.style.top = `${e.pageY - 10}px`;
      document.body.appendChild(effect);

      setTimeout(() => effect.remove(), 400);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="app">
      <BackgroundMap />
      <div className="info-group">
        <button className="question-mark" onClick={toggleInfoGroup}>
          ?
        </button>
        {isInfoOpen && (
          <div className="info-buttons">
            <button className="dropdown-toggle">About This Project</button>
            <button className="night-mode-toggle" onClick={() => document.body.classList.toggle('night-mode')}>
              Night Mode
            </button>
          </div>
        )}
      </div>
      <Header />

      {/* Split layout for Upload and Result Sections */}
      <div className="main-layout">
        <div className="upload-section">
          <h3 className="section-title">Upload</h3>
          <UploadArea onUpload={handleUpload} />
          {file && <Preview file={file} />} {/* Show preview in the upload section */}
          <SampleImages onSelectSample={handleSampleSelect} />
          <button className="send-button" onClick={handleSend}>
            Send
          </button>
        </div>
        <div className="result-section">
          <h3 className="section-title">Result</h3>
          {loading ? <Loader /> : file && <Preview file={file} />} {/* Show the same preview in the result section */}
          {result && <Result result={result} />}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
