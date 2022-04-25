/* eslint-disable object-curly-newline */
import React from 'react';
import '../screens/Paths.css';
import { Link } from 'react-router-dom';

export default function PathCard({ title, pathMap, distance, time }) {
  return (
    <Link to="/pathdetails" className="cardHistoryContainer">
      <h1 className="namePath">{title}</h1>
      <img
        src={pathMap}
        className="pathMap w-50 h-20"
        alt={`map of ${title}`}
      />
      <p className="distancePath">
        Distance : <br />
        {distance}
      </p>
      <p className="timePath">
        Temps : <br />
        {time}
      </p>
    </Link>
  );
}