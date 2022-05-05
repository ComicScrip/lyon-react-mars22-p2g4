import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../screens/About';
import Home from '../screens/Home';
import Journal from '../screens/Journal';
import LiveView from '../screens/LiveView';
import Summary from '../screens/Summary';
import PathDetails from '../screens/PathDetails';
import Paths from '../screens/Paths';

export default function Main({ currentPosition, geolocationActived }) {
  useEffect(() => {}, [currentPosition]);

  return (
    <main>
      {!geolocationActived && (
        <p> Erreur, la géolocalisation n'est pas activée</p>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/pathdetails/:id" element={<PathDetails />} />
        <Route
          path="/liveview/:id"
          element={<LiveView position={currentPosition} />}
        />
        <Route path="/summary/:id" element={<Summary />} />
        <Route path="/paths" element={<Paths />} />
      </Routes>
    </main>
  );
}
