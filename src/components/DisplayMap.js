import React from 'react';
import { MapContainer as LeafletMap, TileLayer, GeoJSON } from 'react-leaflet';

const getCenter = (xyTab) => {
  let center = [xyTab[0][1], xyTab[0][0]];
  for (let i = 0; i < xyTab.length - 1; i += 1) {
    center = [center[0] + xyTab[i][1], center[1] + xyTab[i][0]];
  }
  const centerPoint = [center[0] / xyTab.length, center[1] / xyTab.length];
  return centerPoint;
};

export default function DisplayMap({ path }) {
  return (
    <div className="map m-1 p-1 flex justify-center items-center">
      <LeafletMap
        center={getCenter(path.trace.features[0].geometry.coordinates)}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={path.trace} pathOptions={{ color: 'red' }} />
      </LeafletMap>
    </div>
  );
}
