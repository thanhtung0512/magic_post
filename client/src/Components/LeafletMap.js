import React, { Component, useMemo, Fragment } from "react";
import { MapContainer, TileLayer, Circle, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import PixiOverlay from "react-leaflet-pixi-overlay";

const markers = [
  {
    id: "2",
    iconColor: "blue",
    position: [21.038251509565974, 105.78267832984561],
    popup: "Quack!",
    popupOpen: true, // if popup has to be open by default
    //onClick: () => alert("marker clicked"),
    tooltip: "Nice!",
    draggable: true,
  },
];
const LeafletMap = () => {
  // Set initial map center and radius

  const mapStyle = {
    height: "550px",
    width: "1120px",
    border: "4px solid teal",
    borderRadius: "10px",
    position: "relative",
  };
  const center = [21.038251509565974, 105.78267832984561];
  const radius = 1000;
  const zoom = 13;

  
  return (
    <div style={mapStyle}>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Circle
          center={center}
          pathOptions={{ color: "teal" }}
          radius={radius}
        />
        <PixiOverlay markers={markers} />
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
