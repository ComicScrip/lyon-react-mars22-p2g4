import React from 'react';
import informationsRace from '../components/InformationsRace';
import './Summary.css';
import SummaryRaceInfos from '../components/SummaryRaceInfos';

export default function Summary() {
  return (
    <div className="RecapRaceMainContainer">
      <div className="RecapRaceContainer">
        <SummaryRaceInfos
          title={informationsRace.title}
          distance={informationsRace.distance}
          time={informationsRace.time}
          calorie={informationsRace.calorie}
        />
      </div>
    </div>
  );
}
