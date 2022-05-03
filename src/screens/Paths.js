/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import './Paths.css';
import PathCard from '../components/PathCard';
import axios from 'axios';

export default function Paths() {
  const [keyword, setKeyword] = useState('');
  const [foundPaths, setFoundPaths] = useState([]);
  const [loadingError, setLoadingError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const filter = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_PATHS_API_URL}/api/paths?name=${keyword}`)
      .then((response) => response.data)
      .then((pathsTab) => setFoundPaths(pathsTab))
      .catch(() => {
        setLoadingError("Impossible de charger les parcours depuis l'API");
      })
      .finally(() => setIsLoading(false));
  }, [foundPaths, keyword]);

  return (
    <div className="pathsMainContainer">
      {loadingError && <p>{loadingError}</p>}
      {isLoading && <p>Chargement en cours...</p>}
      {!isLoading && (
        <div>
          <div className="searchBarContainer">
            <div>
              <h1>Choix du parcours</h1>
            </div>
            <input
              type="search"
              value={keyword}
              onChange={filter}
              className="searchBar"
              placeholder="Rechercher..."
            />
          </div>
          <div className="pathsContainer">
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
                  Nous sommes désolés, mais aucun parcours ne correspond à votre
                  recherche
                </h1>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
