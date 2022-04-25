/* eslint-disable arrow-body-style */
import React from 'react';
import './Paths.css';
import predefinedPaths from '../components/PredefinedPaths';
import PathCard from '../components/PathCard';

export default function Paths() {
  const [title, setTitle] = React.useState('');

  const [foundPaths, setFoundPaths] = React.useState(predefinedPaths);

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
              title={path.title}
              pathMap={path.pathMap}
              distance={path.distance}
              time={path.time}
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
