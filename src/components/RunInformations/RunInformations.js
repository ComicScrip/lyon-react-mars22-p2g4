import React, { useState, useEffect } from 'react';
import Timer from './Timer/Timer';
import ControlButtons from './ControlButtons/ControlButtons';
import './RunInformations.css';

export default function RunInformations() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

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
  });

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
    window.location.href = '/recaprace';
  };

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
          <div className="text-xl">0 km/h</div>
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
