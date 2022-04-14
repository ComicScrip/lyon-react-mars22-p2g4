import React from 'react';
import {
  MapContainer as LeafletMap,
  Marker,
  Popup,
  TileLayer,
} from 'react-leaflet';

const position = [51.505, -0.09];

export default function DisplayMap() {
  return (
    <div className="map">
      <LeafletMap center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </LeafletMap>
    </div>
  );
}
