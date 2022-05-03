import React from 'react';
import informationsRace from '../components/InformationsRace';
import './Summary.css';
import SummaryRaceInfos from '../components/SummaryRaceInfos';
import Photos from '../components/Photos';

export default function Summary() {
  const donePath = JSON.parse(localStorage.getItem('currentPath'));
  return (
    <div className="RecapRaceMainContainer">
      {donePath !== [] ? (
        <div className="pathPics">{<Photos path={donePath} />}</div>
      ) : null}

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
