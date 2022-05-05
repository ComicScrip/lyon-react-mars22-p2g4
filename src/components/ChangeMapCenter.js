import { useMap } from 'react-leaflet';

function ChangeMapCenter({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export default ChangeMapCenter;
