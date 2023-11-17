import React, { Component, useMemo, Fragment } from "react";
import { MapContainer, TileLayer, Circle , Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PixiOverlay from "react-leaflet-pixi-overlay";
const LeafletMap = () => {
  // Set initial map center and radius
  const center = [21.038251509565974, 105.78267832984561];
  const radius = 5000; // in meters

  return (
    <MapContainer center={center} zoom={13} style={{ height: '450px', width: '70%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* <Circle
        center={center}
        pathOptions={{ color: 'teal' }}
        radius={radius}
      /> */}
    </MapContainer>
  );
};

export default LeafletMap;
