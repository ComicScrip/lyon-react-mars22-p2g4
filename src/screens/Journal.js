/* eslint-disable arrow-body-style */
import React from 'react';
import './Journal.css';
import finishedPaths from '../components/FinishedPaths';
import JournalCard from '../components/JournalCard';

export default function Paths() {
  const [title, setTitle] = React.useState('');

  const [foundPaths, setFoundPaths] = React.useState(finishedPaths);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = finishedPaths.filter((finishedPath) => {
        return finishedPath.title
          .toLowerCase()
          .startsWith(keyword.toLowerCase());
      });
      setFoundPaths(results);
    } else {
      setFoundPaths(finishedPaths);
    }

    setTitle(keyword);
  };

  return (
    <div className="journalMainContainer">
      <div className="searchBarContainer">
        <div>
          <h1>Journal</h1>
        </div>
        <input
          type="search"
          value={title}
          onChange={filter}
          className="searchBar"
          placeholder="Rechercher..."
        />
      </div>
      <div className="journalContainer">
        {foundPaths && foundPaths.length > 0 ? (
          foundPaths.map((path) => (
            <JournalCard
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
