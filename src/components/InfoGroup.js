import React, { useState } from "react";
import "./InfoGroup.css";

const InfoGroup = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleNightModeToggle = () => {
    document.body.classList.toggle("night-mode");
  };

  return (
    <div className="info-group">
      <button className="question-mark" onClick={toggleExpand}>
        ?
      </button>
      {isExpanded && (
        <div className="info-buttons">
          <button
            className="dropdown-toggle"
            onClick={() => window.open("https://github.com/Minhcardanian/ITCS_traffic-sign-ui", "_blank")}
          >
            About This Project
          </button>
          <button className="night-mode-toggle" onClick={handleNightModeToggle}>
            Toggle Night Mode
          </button>
        </div>
      )}
    </div>
  );
};

export default InfoGroup;
