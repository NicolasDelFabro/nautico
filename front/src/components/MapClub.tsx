"use client";

import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

const icon = L.icon({
  iconUrl: "/marker-icon.png",
  iconRetinaUrl: "/marker-icon-2x.png",
  shadowUrl: "/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapClub = () => {
  const position: [number, number] = [-33.903754,  -60.575980];

  return (
    <MapContainer
      center={position}
      zoom={15}
      className="w-full h-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <Marker position={position} icon={icon}>
        <Popup>
          Club Náutico Pergamino
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapClub;