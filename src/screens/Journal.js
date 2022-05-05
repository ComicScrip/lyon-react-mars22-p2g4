/* eslint-disable arrow-body-style */
import React, { useEffect, useState } from 'react';
import './Journal.css';
import JournalCard from '../components/JournalCard';

export default function Journal() {
  const [keyword, setKeyword] = useState('');
  const [journalPaths, setjournalPaths] = useState(
    JSON.parse(localStorage.getItem('journalPaths'))
  );

  const filter = (e) => {
    const newKeyword = e.target.value;

    if (keyword !== '') {
      const results = journalPaths.filter((paths) => {
        return paths.path.title.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setjournalPaths(results);
    } else {
      setjournalPaths(journalPaths);
    }

    setKeyword(newKeyword);
  };

  useEffect(() => {
    setjournalPaths(journalPaths);
  }, [keyword]);

  return (
    <div className="pathsMainContainer">
      <div>
        <div className="searchBarContainer">
          <div>
            <h1>Journal de course</h1>
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
          {journalPaths.length > 0 ? (
            journalPaths.map((journal) => (
              <JournalCard
                key={`id:${journal.path.id} date:${journal.date}`}
                id={journal.path.id}
                title={journal.path.name}
                startLat={journal.realTrace[0][0]}
                startLon={journal.realTrace[0][1]}
                date={journal.date}
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
    </div>
  );
}
