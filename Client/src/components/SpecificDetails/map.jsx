import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

const customIcon = new Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/447/447031.png',
  iconSize: [38, 38],
});

const MapComponent = ({ lat, long, zoom }) => {
  console.log(lat);
  console.log(long);
  if (lat === undefined || long === undefined) {
    // Handle the case where lat or long is undefined, e.g., show an error message
    return <p>Invalid coordinates</p>;
  }
  return (
    <MapContainer center={[lat, long]} zoom={zoom} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, long]} icon={customIcon}>
        <Popup>Your Marker Popup Content</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
