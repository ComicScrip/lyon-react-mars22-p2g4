import React from 'react';
import { MapContainer as LeafletMap, TileLayer, GeoJSON } from 'react-leaflet';

export default function DisplayMap({ path, position }) {
  return (
    <div className="map m-1 p-1 flex justify-center items-center">
      <LeafletMap center={position} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={path} />
      </LeafletMap>
    </div>
  );
}
