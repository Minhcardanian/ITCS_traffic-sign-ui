import React, { useState } from "react";
import "./DropdownInfo.css";

const DropdownInfo = () => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => setShowInfo(!showInfo);

  return (
    <div className={`info-group ${showInfo ? "show" : ""}`}>
      <button className="question-mark" onClick={toggleInfo}>
        ?
      </button>
      {showInfo && (
        <div className="info-buttons">
          <button className="dropdown-toggle">About This Project</button>
          <button className="night-mode-toggle">Night Mode</button>
        </div>
      )}
    </div>
  );
};

export default DropdownInfo;
