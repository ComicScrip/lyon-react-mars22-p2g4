import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import lyonTouristic from './ressources/lyon_touristic.json';
import Main from './components/Main';
import { useState } from 'react';

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
  const [currentPosition, setCurrentPosition] = useState({
    lat,
    lon,
  });

  navigator.geolocation.watchPosition((p) => {
    lat = p.coords.latitude;
    lon = p.coords.longitude;
    setCurrentPosition({ lat, lon });
  });

  return (
    <>
      <Header />
      <Main
        geolocationActived={geolocationActived}
        currentPosition={currentPosition}
        path={lyonTouristic}
      />

      <Footer />
    </>
  );
}

export default App;
