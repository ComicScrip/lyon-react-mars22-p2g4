/* eslint-disable consistent-return */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import DisplayMapLive from '../components/DisplayMapLive';
import RunInformations from '../components/RunInformations/RunInformations';
import L from 'leaflet';

export default function Liveview({ path, position }) {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [currentPath, setCurrentPath] = useState([]);
  const [distancePath, setDistancePath] = useState([]);
  let distance = 0;

  useEffect(() => {
    if (isActive && isPaused === false) {
      let interval = null;

      interval = setInterval(() => {
        setCurrentPath([...currentPath, [position.lat, position.lon]]);

        if (currentPath.length >= 2) {
          const from = L.latLng(currentPath.at(-2));
          const to = L.latLng(currentPath.at(-1));
          distance = from.distanceTo(to).toFixed(0) / 1000;
        }

        setDistancePath([...distancePath, distance]);
      }, 1000);

      console.log(distancePath);

      return () => {
        clearInterval(interval);
      };
    }
  });

  return (
    <div className="flex-auto flex-col items-center justify-center m-5 bg-white bg-opacity-80 rounded-xl">
      <DisplayMapLive
        path={path}
        currentPath={currentPath}
        position={position}
        zoom={20}
      />

      <RunInformations
        distancePath={distancePath}
        isActive={isActive}
        setIsActive={setIsActive}
        isPaused={isPaused}
        setIsPaused={setIsPaused}
      />
    </div>
  );
}
