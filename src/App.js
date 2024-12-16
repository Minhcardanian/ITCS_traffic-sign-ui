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
  const [file, setFile] = useState(null);          // URL for preview
  const [selectedFile, setSelectedFile] = useState(null); // Actual file object
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  const handleUpload = (uploadedFile) => {
    if (!uploadedFile) {
      alert('No file uploaded. Please try again.');
      return;
    }
    console.log('File uploaded:', uploadedFile);
    const fileURL = URL.createObjectURL(uploadedFile);
    setFile(fileURL);
    setSelectedFile(uploadedFile);
    setResult(null);
  };

  const handleSampleSelect = (sampleFile) => {
    if (!sampleFile) {
      alert('No sample file received. Please try again.');
      return;
    }
    console.log('Sample file selected:', sampleFile);
    const fileURL = URL.createObjectURL(sampleFile);
    setFile(fileURL);
    setSelectedFile(sampleFile);
    setResult(null);
  };

  const handleSend = () => {
    if (!selectedFile && !file) {
      alert('Please upload or select an image first.');
      return;
    }

    // We now handle both uploaded files and sample files the same way,
    // since `handleSampleSelect()` provides a File object.
    if (!selectedFile) {
      alert('No file selected. Please try again.');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('image', selectedFile); // 'image' must match the backend key

    fetch('http://127.0.0.1:5000/classify', {
      method: 'POST',
      body: formData
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log('Response from backend:', data);
        if (data.error) {
          alert('Error from server: ' + data.error);
          setResult(null);
        } else {
          // Set result as an object to match Result.js expectations
          setResult({
            label: `Predicted class: ${data.pred_class}`,
            SemanticImage: data.sem_image_url,
            IlluImage: data.illu_image_url,
          });
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error communicating with the server. Please try again.');
        setLoading(false);
        setResult(null);
      });
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
              className="dropdown-toggle"
              onClick={() => document.body.classList.toggle('night-mode')}
            >
              Night Mode
            </button>
          </div>
        )}
      </div>
      <Header />

      <div className="main-layout">
        {/* Upload Section */}
        <div className="upload-section" data-title="Upload">
          <UploadArea onUpload={handleUpload} />
          {file && <Preview file={file} />} {/* Preview displayed here */}
          <SampleImages onSelectSample={handleSampleSelect} />
          <button className="send-button" onClick={handleSend}>
            Send
          </button>
        </div>

        {/* Result Section */}
        <div className="result-section" data-title="Result">
          {loading ? (
            <Loader />
          ) : (
            <Result result={result} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
