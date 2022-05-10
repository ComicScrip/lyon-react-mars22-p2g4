/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-return-assign */
import React, { useEffect, useState } from 'react';
import './Paths.css';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import PathCard from '../components/PathCard';

function toObject(searchParams) {
  const res = {};
  searchParams.forEach((value, key) => (res[key] = value));
  return res;
}

export default function Paths() {
  const [foundPaths, setFoundPaths] = useState([]);
  const [loadingError, setLoadingError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/paths?${searchParams}`)
      .then((response) => response.data)
      .then((pathsTab) => setFoundPaths(pathsTab))
      .catch(() => {
        setLoadingError("Impossible de charger les parcours depuis l'API");
      })
      .finally(() => setIsLoading(false));
  }, [searchParams]);

  return (
    <div className="pathsMainContainer">
      {!isLoading && (
        <div>
          <div className="searchSelectContainer">
            <div className="searchSelect">
              <h2>Distance maximum</h2>
              <select
                className="select"
                value={searchParams.get('length') || ''}
                onChange={(e) =>
                  setSearchParams({
                    ...toObject(searchParams),
                    length: e.target.value,
                  })
                }
              >
                <option key={''} value={''}>
                  All
                </option>
                {[4, 8, 12, 21].map((length) => (
                  <option key={length} value={length}>
                    {length}
                  </option>
                ))}
              </select>
            </div>
            <div className="searchSelect">
              <h2>Difficulté</h2>
              <select
                className="select"
                value={searchParams.get('difficulty') || ''}
                onChange={(e) =>
                  setSearchParams({
                    ...toObject(searchParams),
                    difficulty: e.target.value,
                  })
                }
              >
                <option key={''} value={''}>
                  All
                </option>
                {[1, 2, 3, 4, 5].map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty}
                  </option>
                ))}
              </select>
            </div>
            <div className="searchSelect">
              <h2>Localisation</h2>
              <select
                className="select"
                value={searchParams.get('city_location') || ''}
                onChange={(e) =>
                  setSearchParams({
                    ...toObject(searchParams),
                    city_location: e.target.value,
                  })
                }
              >
                <option key={''} value={''}>
                  All
                </option>
                {['Lyon'].map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="pathsListContainer">
            {foundPaths && foundPaths.length > 0 ? (
              foundPaths.map((path) => (
                <PathCard
                  key={path.id}
                  id={path.id}
                  title={path.name}
                  pathMap={path.trace}
                  distance={path.length}
                  elevation={path.elevation}
                  startLat={path.start_lat}
                  startLon={path.start_lon}
                />
              ))
            ) : (
              <div className="alertFilter">
                <h1>
                  {loadingError ? { loadingError } : ''}
                  {isLoading
                    ? 'Chargement en cours...'
                    : 'Nous sommes désolés, mais aucun parcours ne correspond à votre recherche'}
                </h1>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
