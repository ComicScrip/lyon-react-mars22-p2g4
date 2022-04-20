import React from 'react';
import PropsInformationsRace from '../components/PropsInformationsRace';
import informationsRace from '../components/InformationsRace';
import '../RecapRace.css';

export default function RecapRace() {
  return (
    <div className="RecapRaceMainContainer">
      <div className="RecapRaceContainer">
        <PropsInformationsRace
          title={informationsRace.title}
          distance={informationsRace.distance}
          time={informationsRace.time}
          calorie={informationsRace.calorie}
        />
      </div>
    </div>
  );
}
