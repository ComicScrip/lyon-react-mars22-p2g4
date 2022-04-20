import React from 'react';
import {
  MapContainer as LeafletMap,
  TileLayer,
  GeoJSON,
  Marker,
  Polyline,
} from 'react-leaflet';

// eslint-disable-next-line object-curly-newline
export default function DisplayMapLive({ path, currentPath, position, zoom }) {
  return (
    <div className="map m-1 p-1 flex justify-center items-center">
      <LeafletMap center={position} zoom={zoom} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={path} />
        <Polyline positions={currentPath} pathOptions={{ color: 'red' }} />
        <Marker position={position} />
      </LeafletMap>
    </div>
  );
}
