import { Link, useParams } from 'react-router-dom';
import React from 'react';
import './ControlButtons.css';

export default function ControlButtons({
  handleStart,
  handleReset,
  handlePauseResume,
  active,
  isPaused,
}) {
  const { id } = useParams();

  const StartButton = (
    <div className="btn btn-one btn-start" onClick={handleStart}>
      Start
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      <div className="btn btn-one" onClick={handlePauseResume}>
        {isPaused ? 'Resume' : 'Pause'}
      </div>
      <Link to={`/summary/${id}`}>
        <div className="btn btn-two" onClick={handleReset}>
          Stop
        </div>
      </Link>
    </div>
  );

  return (
    <div className="Control-Buttons">
      <div>{active ? ActiveButtons : StartButton}</div>
    </div>
  );
}
