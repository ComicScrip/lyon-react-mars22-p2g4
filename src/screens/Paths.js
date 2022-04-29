/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import './Paths.css';
import predefinedPaths from '../components/PredefinedPaths';
import PathCard from '../components/PathCard';

export default function Paths({ paths }) {
  const [title, setTitle] = React.useState('');
  const [foundPaths, setFoundPaths] = useState(paths);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = predefinedPaths.filter((predefinedPath) => {
        return predefinedPath.title
          .toLowerCase()
          .startsWith(keyword.toLowerCase());
      });
      setFoundPaths(results);
    } else {
      setFoundPaths(predefinedPaths);
    }

    setTitle(keyword);
  };

  return (
    <div className="historyMainContainer">
      <div className="searchBarContainer">
        <div>
          <h1>Choix du parcours</h1>
        </div>
        <input
          type="search"
          value={title}
          onChange={filter}
          className="searchBar"
          placeholder="Rechercher..."
        />
      </div>
      <div className="historyContainer">
        {foundPaths && foundPaths.length > 0 ? (
          foundPaths.map((path) => (
            <PathCard
              key={path.id}
              id={path.id}
              title={path.name}
              pathMap={path.trace}
              distance={path.length}
              elevation={path.elevation}
              startingLat={path.start_lat}
              startingLon={path.start_lon}
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
  );
}
