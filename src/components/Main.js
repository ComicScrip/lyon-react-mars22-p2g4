import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../screens/About';
import Home from '../screens/Home';
import Journal from '../screens/Journal';
import Road from '../screens/Road';
import LiveView from '../screens/LiveView';
import Summary from '../screens/Summary';

export default function Main({ currentPosition, path, geolocationActived }) {
  return (
    <main>
      {!geolocationActived && (
        <p> Erreur, la géolocalisation n'est pas activée</p>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/road" element={<Road />} />
        <Route
          path="/liveview"
          element={<LiveView path={path} position={currentPosition} />}
        />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </main>
  );
}
