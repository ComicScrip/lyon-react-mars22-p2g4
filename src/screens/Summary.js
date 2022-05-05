import React, { useEffect } from 'react';
import informationsRace from '../components/InformationsRace';
import './Summary.css';
import SummaryRaceInfos from '../components/SummaryRaceInfos';
import Photos from '../components/Photos';
import useLocalStorage from 'use-local-storage';

export default function Summary() {
  const [journalPaths, setJournalPaths] = useLocalStorage('journalPaths', []);
  const realTrace = JSON.parse(localStorage.getItem('currentTrace'));
  const path = JSON.parse(localStorage.getItem('currentPath'));
  const date = new Date();

  useEffect(() => {
    const newDonePath = { path, realTrace, date };
    setJournalPaths([...journalPaths, newDonePath]);
  }, []);

  return (
    <div className="RecapRaceMainContainer">
      {realTrace.length > 20 ? (
        <div className="pathPics">{<Photos path={realTrace} />}</div>
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
