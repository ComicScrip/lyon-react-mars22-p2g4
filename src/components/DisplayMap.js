import React from 'react';
import {
  MapContainer as LeafletMap,
  Marker,
  Popup,
  TileLayer,
  GeoJSON,
} from 'react-leaflet';

import test from '../ressources/test.json';

// Get geolocalisation (logitude, latitude)
const currentPosition = { lat: 45.746156, lon: 4.827308 };
let geolocationActived = true;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    currentPosition.lat = position.coords.latitude;
    currentPosition.lon = position.coords.longitude;
  });
} else geolocationActived = false;

export default function DisplayMap() {
  return (
    <div className="map">
      <LeafletMap center={currentPosition} zoom={10} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={currentPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>

        <GeoJSON key="1" data={test} />
      </LeafletMap>
      {!geolocationActived && (
        <p> Erreur, la géolocalisation n'est pas activée</p>
      )}
    </div>
  );
}
