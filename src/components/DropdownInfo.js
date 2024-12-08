import React, { useState } from "react";
import "./DropdownInfo.css";

const DropdownInfo = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown-info">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        About This Project
      </button>
      {open && (
        <div className="dropdown-content">
          <p>
            <strong>Repository:</strong>{" "}
            <a
              href="https://github.com/Minhcardanian/ITCS_traffic-sign-ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Link
            </a>
          </p>
          <p>
            <strong>Description:</strong> This application allows users to
            upload or select images to classify traffic signs using AI-powered
            tools, enhancing road safety and awareness.
          </p>
        </div>
      )}
    </div>
  );
};

export default DropdownInfo;
