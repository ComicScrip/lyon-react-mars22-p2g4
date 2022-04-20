import React, { useEffect, useState } from 'react';
import DisplayMapLive from '../components/DisplayMapLive';
import RunInformations from '../components/RunInformations/RunInformations';

export default function Liveview({ path, position }) {
  const [currentPath, setCurrentPath] = useState([]);

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setCurrentPath([...currentPath, [position.lat, position.lon]]);
      console.log(currentPath);
    }, 200);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="flex-auto flex-col items-center justify-center m-5">
      <div>Titre du parcours </div>

      <DisplayMapLive
        path={path}
        currentPath={currentPath}
        position={position}
        zoom={16}
      />

      <RunInformations />
    </div>
  );
}
