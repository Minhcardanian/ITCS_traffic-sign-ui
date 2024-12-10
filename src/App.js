import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import UploadArea from './components/UploadArea';
import Preview from './components/Preview';
import Result from './components/Result';
import SampleImages from './components/SampleImages';
import Loader from './components/Loader';
import BackgroundMap from './components/BackgroundMap';
import './App.css';
import './components/ClickEffect.css';

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const handleUpload = (uploadedFile) => {
    if (!uploadedFile) {
      alert('No file uploaded. Please try again.');
      return;
    }
    console.log('File uploaded:', uploadedFile);
    setFile(URL.createObjectURL(uploadedFile));
    setResult('');
  };

  const handleSampleSelect = (src) => {
    if (!src) {
      alert('No sample selected. Please try again.');
      return;
    }
    console.log('Sample image selected:', src);
    setFile(src);
    setResult('');
  };

  const handleSend = () => {
    if (!file) {
      alert('Please upload or select an image first.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setResult('The sign to examine is: Crossroad Warning Sign');
    }, 2000);
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
            <button
              className="night-mode-toggle"
              onClick={() => document.body.classList.toggle('night-mode')}
            >
              Night Mode
            </button>
          </div>
        )}
      </div>
      <Header />

      <div className="main-layout">
        <div className="upload-section">
          <h3 className="section-title">Upload</h3>
          <UploadArea onUpload={handleUpload} />
          {file && <Preview file={file} />}
          <SampleImages onSelectSample={handleSampleSelect} />
          <button className="send-button" onClick={handleSend}>
            Send
          </button>
        </div>
        <div className="result-section">
          <h3 className="section-title">Result</h3>
          {loading ? <Loader /> : file && <Preview file={file} />}
          {result && <Result result={result} />}
        </div>
      </div>
    </div>
  );
}

export default App;
