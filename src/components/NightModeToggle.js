import React, { useState } from "react";
import "./NightModeToggle.css";

const NightModeToggle = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    document.body.classList.toggle("night-mode", !isNightMode);
  };

  return (
    <button className="night-mode-toggle" onClick={toggleNightMode}>
      {isNightMode ? "Light Mode" : "Night Mode"}
    </button>
  );
};

export default NightModeToggle;
