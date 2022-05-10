import React, { useEffect } from 'react';
import styles from './Summary.module.css';
import SummaryRaceInfos from '../components/SummaryRaceInfos';
import Photos from '../components/Photos';
import useLocalStorage from 'use-local-storage';
import SummaryButtons from '../components/SummaryButtons';

export default function Summary() {
  const [journalPaths, setJournalPaths] = useLocalStorage('journalPaths', []);
  const realTrace = JSON.parse(localStorage.getItem('currentTrace'));
  const path = JSON.parse(localStorage.getItem('currentPath'));
  const time = JSON.parse(localStorage.getItem('time'));
  const calorie = JSON.parse(localStorage.getItem('calorie'));
  const distance = JSON.parse(localStorage.getItem('distance'));
  const photosList = JSON.parse(localStorage.getItem('photosList')) || 0;

  const date = new Date();

  useEffect(() => {
    if (realTrace.length > 0) {
      const newDonePath = {
        path,
        realTrace,
        date,
        time,
        calorie,
        distance,
        photosList,
      };
      setJournalPaths([...journalPaths, newDonePath]);
    }
  }, []);

  return (
    <div className={styles.RecapRaceMainContainer}>
      <div className={styles.RecapRaceContainer}>
        <h1 className={styles.nameRace}>{path.name}</h1>
        <p className={styles.p}>Jolie parcours ! Voici quelques souvenirs : </p>
        <Photos className={styles.pathPics} path={realTrace} />

        <SummaryRaceInfos
          className={styles.summaryInfos}
          distance={distance}
          time={time}
          calorie={calorie}
        />
      </div>
      <SummaryButtons className={styles.summaryButtons} />
    </div>
  );
}
