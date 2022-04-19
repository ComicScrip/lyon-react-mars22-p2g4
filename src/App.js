/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-indent */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import './App.css';
import Meteo from './components/CurrentMeteo';
import MeteoForecast from './components/MeteoForecast+1';
import MeteoForecastIcon from './components/MeteoForecastIcon+1';
import MeteoTemp from './components/MeteoTemp';
import CurrentMeteoIcon from './components/CurrentMeteoIcon';
import MeteoForecast2Icon from './components/MeteoForecastIcon+2';
import MeteoForecast2 from './components/MeteoForecast+2';
import MeteoForecast3Icon from './components/MeteoForecastIcon+3';
import MeteoForecast3 from './components/MeteoForecast+3';
import MeteoForecast4Icon from './components/MeteoForecastIcon+4';
import MeteoForecast4 from './components/MeteoForecast+4';
import MeteoForecast5Icon from './components/MeteoForecastIcon+5';
import MeteoForecast5 from './components/MeteoForecast+5';
import MeteoForecast6Icon from './components/MeteoForecastIcon+6';
import MeteoForecast6 from './components/MeteoForecast+6';
import MeteoForecast7Icon from './components/MeteoForecastIcon+7';
import MeteoForecast7 from './components/MeteoForecast+7';

function App() {
  return (
    <>
      <div>
        <h1>Weather App</h1>
        <Meteo /> <CurrentMeteoIcon />
        <MeteoTemp />
      </div>
      <div>
        <h2>Météo Demain</h2>
        <MeteoForecast />
        <MeteoForecastIcon />
      </div>
      <div>
        <h2>Météo Après-Demain</h2>
        <MeteoForecast2 />
        <MeteoForecast2Icon />
      </div>
      <div>
        <h2>Météo J+3</h2>
        <MeteoForecast3 />
        <MeteoForecast3Icon />
      </div>
      <div>
        <h2>Météo J+4</h2>
        <MeteoForecast4 />
        <MeteoForecast4Icon />
      </div>
      <div>
        <h2>Météo J+5</h2>
        <MeteoForecast5 />
        <MeteoForecast5Icon />
      </div>
      <div>
        <h2>Météo J+6</h2>
        <MeteoForecast6 />
        <MeteoForecast6Icon />
      </div>
      <div>
        <h2>Météo J+7</h2>
        <MeteoForecast7 />
        <MeteoForecast7Icon />
      </div>
    </>
  );
}

export default App;
