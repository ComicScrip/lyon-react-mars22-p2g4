import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import lyonTouristic from './ressources/lyon_touristic.json';
import Main from './components/Main';

// Get geolocalisation (logitude, latitude)
const currentPosition = { lat: 45.746156, lon: 4.827308 };
let geolocationActived = true;
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    currentPosition.lat = position.coords.latitude;
    currentPosition.lon = position.coords.longitude;
  });
} else geolocationActived = false;

function App() {
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
