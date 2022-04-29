/* eslint-disable object-curly-newline */
import './PathCard.css';
import { Link } from 'react-router-dom';
import DisplayMap from './DisplayMap';

export default function PathCard({
  id,
  title,
  pathMap,
  distance,
  elevation,
  startingLat,
  startingLon,
}) {
  return (
    <Link to={`/pathdetails/${id}`} className="cardHistoryContainer">
      <div className="pathCardInfo">
        <DisplayMap
          className="pathMap"
          path={pathMap}
          position={[startingLat, startingLon]}
        />
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
