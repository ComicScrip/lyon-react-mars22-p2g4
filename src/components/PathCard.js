/* eslint-disable object-curly-newline */
import './PathCard.css';
import { Link } from 'react-router-dom';

const accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default function PathCard({
  id,
  title,
  distance,
  elevation,
  startLat,
  startLon,
}) {
  return (
    <Link to={`/pathdetails/${id}`} className="cardContainer">
      <img
        src={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/static/${startLon},${startLat},13,0/400x400?before_layer=airport-label&access_token=${accessToken}`}
        alt={`parcours : ${title}`}
        className="pathMap"
      />
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
