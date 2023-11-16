import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import PixiOverlay from "react-leaflet-pixi-overlay";

const MapWithMarkers = () => {
  const markers = [
    {
      id: "randomStringOrNumber",
      iconColor: "red",
      position: [-37.814, 144.96332],
      popup: "Quack",
      onClick: () => alert("marker clicked"),
      tooltip: "Hey!",
    },
    {
      id: "2",
      iconColor: "blue",
      position: [-37.814, 144.96332],
      popup: "Quack!",
      popupOpen: true, // if popup has to be open by default
      onClick: () => alert("marker clicked"),
      tooltip: "Nice!",
    },
  ];
  const addresses = [
    { lat: 37.7749, lng: -122.4194 },
    // Add more addresses as needed
  ];

  const pixiContainer = (utils) => {
    const { canvas, bounds, project, unproject } = utils;

    // Clear canvas on each render
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Add your PixiJS rendering logic here
    addresses.forEach(({ lat, lng }) => {
      const point = project([lat, lng]);
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.arc(point.x, point.y, 5, 0, 2 * Math.PI);
      ctx.fill();
    });
  };

  return (
    <MapContainer
      zoom={18} // initial zoom required
      preferCanvas
      maxZoom={20} // required
      minZoom={3} // required
      center={[-37.814, 144.96332]}
      // Other map props...
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <PixiOverlay markers={markers} />
    </MapContainer>
  );
};

export default MapWithMarkers;
