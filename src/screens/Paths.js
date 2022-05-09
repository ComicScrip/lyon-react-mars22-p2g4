import React, { useEffect, useState } from 'react';
import './Paths.css';
import axios from 'axios';
import PathCard from '../components/PathCard';

export default function Paths() {
  const [keyword, setKeyword] = useState('');
  const [foundPaths, setFoundPaths] = useState([]);
  const [loadingError, setLoadingError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const filter = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/paths?name=${keyword}`)
      .then((response) => response.data)
      .then((pathsTab) => setFoundPaths(pathsTab))
      .catch(() => {
        setLoadingError("Impossible de charger les parcours depuis l'API");
      })
      .finally(() => setIsLoading(false));
  }, [keyword]);

  return (
    <div className="pathsMainContainer">
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
