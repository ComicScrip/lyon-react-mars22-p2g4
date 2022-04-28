import React, { useState, useEffect } from 'react';
import Timer from './Timer/Timer';
import ControlButtons from './ControlButtons/ControlButtons';
import './RunInformations.css';
import L from 'leaflet';

export default function RunInformations({ currentPath }) {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  let speed = `${0}kmh`;

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

  if (currentPath.length >= 2) {
    const from = L.latLng(currentPath.at(-2));
    const to = L.latLng(currentPath.at(-1));
    const distance = from.distanceTo(to).toFixed(0) / 1000;
    speed = `${distance * 720}kmh`;
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
          <div className="text-xl">0 Cal</div>
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
