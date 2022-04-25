import React, { useEffect, useState } from 'react';
import DisplayMapLive from '../components/DisplayMapLive';
import RunInformations from '../components/RunInformations/RunInformations';

export default function Liveview({ path, position }) {
  const [currentPath, setCurrentPath] = useState([]);

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setCurrentPath([...currentPath, [position.lat, position.lon]]);
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="flex-auto flex-col items-center justify-center m-5">
      <DisplayMapLive
        path={path}
        currentPath={currentPath}
        position={position}
        zoom={20}
      />

      <RunInformations />
    </div>
  );
}
