import { Link } from 'react-router-dom';

const accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

export default function JournalCard({
  id,
  title,
  distance,
  startLat,
  startLon,
  date,
}) {
  const formatDate = new Date(date);

  return (
    <Link
      to={`/pathdetails/${id}`}
      id="pathCard"
      className="w-[90%] h-[100px] bg-white/80 border-solid border-2 flex items-center justify-between m-2 p-2 rounded-xl md:flex-col md:w-[30vw] md:h-[40vh] md:max-w-[300px] md:max-h-[400px]"
    >
      <img
        src={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/static/${startLon},${startLat},13,0/400x400?before_layer=airport-label&access_token=${accessToken}`}
        alt={`parcours : ${title}`}
        id="pathMap"
        className="m-1 p-1 h-[100%] w-[30%] md:w-[80%] md:h-[60%] rounded-xl relative left-0"
      />

      <div id="pathCardInfo" className="flex-col p-2 text-sm">
        <h2
          id="pathName"
          className="flex items-center justify-center m-2 text-center col-start-1 col-end-3 row-start-1 font-['Permanent Marker'] md:text-lg"
        >
          {title}
        </h2>
        <div
          id="pathDistance"
          className="hidden md:flex items-center justify-center text-center "
        >
          {distance} km
          <br />
          Distance
        </div>
        <div
          id="pathDate"
          className="flex items-center justify-center text-center text-xs"
        >
          {`Effectué le : ${formatDate.getDate()} / ${formatDate.getMonth()} /
          ${formatDate.getFullYear()}`}{' '}
          <br />
        </div>
      </div>
    </Link>
  );
}
