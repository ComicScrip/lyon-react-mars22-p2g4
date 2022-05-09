/* eslint-disable consistent-return */
/* eslint-disable no-console */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import DisplayMapLive from '../components/DisplayMapLive';
import RunInformations from '../components/RunInformations/RunInformations';
import L from 'leaflet';

export default function Liveview({ position }) {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [currentPath, setCurrentPath] = useLocalStorage('currentPath', []);
  const [distancePath, setDistancePath] = useState([]);
  const { id } = useParams();
  const [path, setPath] = useState();
  const [loadingError, setLoadingError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  let distance = 0;

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/paths/${id}`)
      .then((response) => response.data)
      .then((data) => setPath(data.trace))
      .catch(() => {
        setLoadingError("Impossible de charger le parcours depuis l'API");
      })
      .finally(() => setIsLoading(false));

    if (isActive && isPaused === false) {
      let interval = null;

      interval = setInterval(() => {
        if (position.lat !== 0 && position.lon !== 0) {
          setCurrentPath([...currentPath, [position.lat, position.lon]]);
        }

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
  }, [position]);

  return (
    path && (
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
        {loadingError && <p>{loadingError}</p>}
        {isLoading && <p>Chargement en cours...</p>}
      </div>
    )
  );
}
