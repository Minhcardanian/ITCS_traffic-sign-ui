// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Traffic Sign Classification.{" "}
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
          Learn More
        </a>
      </p>
    </footer>
  );
};

export default Footer;
