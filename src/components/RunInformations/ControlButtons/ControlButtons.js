import { Link, useParams } from 'react-router-dom';
import React from 'react';
import './ControlButtons.css';
import { PlayArrow, Stop, Pause } from '@mui/icons-material';

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
      <PlayArrow fontSize="large" />
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      <div className="btn btn-one" onClick={handlePauseResume}>
        {isPaused ? 'Resume' : 'Pause'}
      </div>
      <Link to={`/summary/${id}`}>
        <div className="btn btn-two" onClick={handleReset}>
          <Stop fontSize="large" />
        </div>
      </Link>
      <div className="btn btn-one" onClick={handlePauseResume}>
        {isPaused ? <PlayArrow fontSize="large" /> : <Pause fontSize="large" />}
      </div>
    </div>
  );

  return (
    <div className="Control-Buttons">
      <div>{active ? ActiveButtons : StartButton}</div>
    </div>
  );
}
