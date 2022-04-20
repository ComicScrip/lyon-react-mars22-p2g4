import './App.css';
import Meteo from './components/CurrentMeteo';
import MeteoForecast from './components/MeteoForecast+1';
import MeteoForecastIcon from './components/MeteoForecastIcon+1';
import MeteoTemp from './components/MeteoTemp';
import CurrentMeteoIcon from './components/CurrentMeteoIcon';

function App() {
  return (
    <>
      <div>
        <h1>Weather App</h1>
        <Meteo /> <CurrentMeteoIcon />
        <MeteoTemp />
      </div>
      <div>
        <h2>Prévisions Météo</h2>
        <MeteoForecast dayNumber={1} />
        J+1
        <MeteoForecastIcon dayNumberIcon={1} />
        <MeteoForecast dayNumber={2} />
        J+2
        <MeteoForecastIcon dayNumberIcon={2} />
        <MeteoForecast dayNumber={3} />
        J+3
        <MeteoForecastIcon dayNumberIcon={3} />
        <MeteoForecast dayNumber={4} />
        J+4
        <MeteoForecastIcon dayNumberIcon={4} />
        <MeteoForecast dayNumber={5} />
        J+5
        <MeteoForecastIcon dayNumberIcon={5} />
        <MeteoForecast dayNumber={6} />
        J+6
        <MeteoForecastIcon dayNumberIcon={6} />
        <MeteoForecast dayNumber={7} />
        J+7
        <MeteoForecastIcon dayNumberIcon={7} />
      </div>
    </>
  );
}

export default App;
