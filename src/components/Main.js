import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../screens/About';
import Home from '../screens/Home';
import Journal from '../screens/Journal';
import Road from '../screens/Road';
import LiveView from '../screens/LiveView';
import Summary from '../screens/Summary';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/road" element={<Road />} />
        <Route path="/liveview" element={<LiveView />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </main>
  );
}
