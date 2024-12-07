// src/components/BackgroundMap.js
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./BackgroundMap.css";

const BackgroundMap = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]} // Default center position
      zoom={13} // Default zoom level
      scrollWheelZoom={false} // Disable scroll zoom for background effect
      className="background-map"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default BackgroundMap;
