import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import DisplayMapLive from '../components/DisplayMapLive';
import RunInformations from '../components/RunInformations/RunInformations';

export default function Liveview({ position }) {
  const { id } = useParams();
  const [path, setPath] = useState();
  const [loadingError, setLoadingError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [currentPath, setCurrentPath] = useLocalStorage('currentPath', []);

  let interval = null;

  useEffect(() => {
    axios
      .get(
        `https://lyon-react-mars22-p2g4-api.comicscrip.duckdns.org/api/paths/${id}`
      )
      .then((response) => response.data)
      .then((data) => setPath(data.trace))
      .catch(() => {
        setLoadingError("Impossible de charger les parcours depuis l'API");
      })
      .finally(() => setIsLoading(false));

    interval = setInterval(() => {
      if (position.lat !== 0 && position.lon !== 0) {
        setCurrentPath([...currentPath, [position.lat, position.lon]]);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [currentPath]);

  return (
    path && (
      <div className="flex-auto flex-col items-center justify-center m-5 bg-white bg-opacity-80 rounded-xl">
        <DisplayMapLive
          path={path}
          currentPath={currentPath}
          position={position}
          zoom={20}
        />

        <RunInformations />
        {loadingError && <p>{loadingError}</p>}
        {isLoading && <p>Chargement en cours...</p>}
      </div>
    )
  );
}
