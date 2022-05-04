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
    <Link to={`/pathdetails/${id}`}>
      <div className="pathCardContainer">
        <img
          src={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/static/${startLon},${startLat},13,0/400x400?before_layer=airport-label&access_token=${accessToken}`}
          alt={`parcours : ${title}`}
          className="pathMap"
        />
        <div className="pathCardInfo">
          <h2 className="pathName">{title}</h2>
          <div className="pathDistance">
            Distance : <br />
            {distance} km
          </div>
          <div className="pathElevation">
            Dénivelé : <br />
            {elevation} m
          </div>
        </div>
      </div>
    </Link>
  );
}
