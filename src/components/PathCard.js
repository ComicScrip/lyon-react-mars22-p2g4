/* eslint-disable object-curly-newline */
import './PathCard.css';
import { Link } from 'react-router-dom';

export default function PathCard({ id, title, distance, elevation }) {
  return (
    <Link to={`/pathdetails/${id}`} className="cardHistoryContainer">
      <div className="pathCardInfo">
        <h1 className="namePath">{title}</h1>
        <p className="distancePath">
          Distance : <br />
          {distance} km
        </p>
        <p className="elevationPath">
          Dénivelé : <br />
          {elevation} m
        </p>
      </div>
    </Link>
  );
}
