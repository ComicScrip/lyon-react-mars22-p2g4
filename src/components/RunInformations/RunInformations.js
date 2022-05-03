/* eslint-disable no-console */
/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';
import Timer from './Timer/Timer';
import ControlButtons from './ControlButtons/ControlButtons';
import './RunInformations.css';

export default function RunInformations({
  distancePath,
  isActive,
  setIsActive,
  isPaused,
  setIsPaused,
}) {
  const [time, setTime] = useState(0);
  let speed = `${0}kmh`;
  let calorie = `${0}kcal`;

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime(time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused, time]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };

  const lastDistance = distancePath.at(-1);
  speed = `${lastDistance * 720}kmh`;

  let distanceTotalPath = 0;
  for (let i = 0; i < distancePath.length; i++) {
    distanceTotalPath += distancePath[i];
    calorie = `${Math.round(distanceTotalPath * 77.8)}kcal`;
  }

  return (
    <div className="run-infos">
      <Timer time={time} />
      <div className="flex flex-row justify-between space-x-10 align-center">
        <div className="flex flex-col">
          <div className="text-xl">0 km</div>
          <div> Distance</div>
        </div>
        <div className="flex flex-col">
          <div className="text-xl">{calorie}</div>
          <div> Calorie</div>
        </div>
        <div className="flex flex-col">
          <div className="text-xl">{speed}</div>
          <div> Rythme</div>
        </div>
      </div>
      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
    </div>
  );
}
