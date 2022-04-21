/* eslint-disable arrow-body-style */
import React from 'react';
import '../History.css';
import finishedRaces from '../components/FinishedRaces';
import PropsHistory from '../components/PropsHistory';

export default function History() {
  const [title, setTitle] = React.useState('');

  const [foundRaces, setFoundRaces] = React.useState(finishedRaces);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = finishedRaces.filter((finishedRace) => {
        return finishedRace.title
          .toLowerCase()
          .startsWith(keyword.toLowerCase());
      });
      setFoundRaces(results);
    } else {
      setFoundRaces(finishedRaces);
    }

    setTitle(keyword);
  };

  return (
    <div className="historyMainContainer">
      <div className="searchBarContainer">
        <input
          type="search"
          value={title}
          onChange={filter}
          className="searchBar"
          placeholder="Rechercher..."
        />
      </div>
      <div className="historyContainer">
        {foundRaces && foundRaces.length > 0 ? (
          foundRaces.map((race) => (
            <PropsHistory
              title={race.title}
              raceMap={race.raceMap}
              distance={race.distance}
              time={race.time}
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
