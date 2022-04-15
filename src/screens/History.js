import React from 'react';
import SearchHistory from '../components/SearchHistory';
import PropsHistory from '../components/propsHistory';
import '../History.css';
import finishedRaces from '../components/finishedRaces';

export default function History() {
  return (
    <div className="History">
      <div className="searchHistoryContainer">
        <SearchHistory />
      </div>
      <div className="containerHistoryElement">
        {finishedRaces.map((finishedRace) => (
          <PropsHistory
            title={finishedRace.title}
            imageOfCourse={finishedRace.imageOfCourse}
            distance={finishedRace.distance}
            time={finishedRace.time}
          />
        ))}
      </div>
    </div>
  );
}