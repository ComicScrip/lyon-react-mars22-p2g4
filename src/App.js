import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { useEffect, useState } from 'react';
import axios from 'axios';

let lat = 0;
let lon = 0;

let geolocationActived = true;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((p) => {
    lat = p.coords.latitude;
    lon = p.coords.longitude;
  });
} else geolocationActived = false;

function App() {
  const [paths, setPaths] = useState([]);
  const [loadingError, setLoadingError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [currentPosition, setCurrentPosition] = useState({
    lat,
    lon,
  });

  navigator.geolocation.watchPosition((p) => {
    lat = p.coords.latitude;
    lon = p.coords.longitude;
    setCurrentPosition({ lat, lon });
  });

  useEffect(() => {
    axios
      .get(
        'https://lyon-react-mars22-p2g4-api.comicscrip.duckdns.org/api/paths'
      )
      .then((response) => response.data)
      .then((pathsTab) => setPaths(pathsTab))
      .catch(() => {
        setLoadingError("Impossible de charger les parcours depuis l'API");
      })
      .finally(() => setIsLoading(false));
  });

  return (
    <>
      <Header />
      <Main
        geolocationActived={geolocationActived}
        currentPosition={currentPosition}
        paths={paths}
      />
      {loadingError && <p>{loadingError}</p>}
      {isLoading && <p>Chargement en cours...</p>}

      <Footer />
    </>
  );
}

export default App;
