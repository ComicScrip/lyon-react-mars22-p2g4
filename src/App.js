import './App.css';
import lyonTouristic from './ressources/lyon_touristic.json';
import PathDetails from './screens/PathDetails';

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
    <div className="App">
      <PathDetails path={lyonTouristic} position={currentPosition} />
      {!geolocationActived && (
        <p> Erreur, la géolocalisation n'est pas activée</p>
      )}
    </div>
  );
}

export default App;
