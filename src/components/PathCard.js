/* eslint-disable object-curly-newline */
import React from 'react';
import './PathCard.css';
import { Link } from 'react-router-dom';

export default function PathCard({ title, pathMap, distance, time }) {
  return (
    <Link to="/pathdetails" className="cardHistoryContainer">
      <img src={pathMap} className="pathMap" alt={`map of ${title}`} />
      <div className="pathCardInfo">
        <h1 className="namePath">{title}</h1>

        <p className="distancePath">
          Distance : <br />
          {distance}
        </p>
        <p className="timePath">
          Temps : <br />
          {time}
        </p>
      </div>
    </Link>
  );
}
