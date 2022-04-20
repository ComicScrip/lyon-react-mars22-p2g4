import './App.css';
import Meteo from './components/CurrentMeteo';
import MeteoForecast from './components/MeteoForecast+1';
import MeteoForecastIcon from './components/MeteoForecastIcon+1';
import MeteoTemp from './components/MeteoTemp';
import CurrentMeteoIcon from './components/CurrentMeteoIcon';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <>
      <Header />
      <Main />
      <div>
        <h1>Weather App</h1>
        <Meteo /> <CurrentMeteoIcon />
        <MeteoTemp />
      </div>
      <div>
        <h2>Prévisions Météo</h2>
        J+1
        <MeteoForecast dayNumber={1} />
        <MeteoForecastIcon dayNumberIcon={1} />
        J+2
        <MeteoForecast dayNumber={2} />
        <MeteoForecastIcon dayNumberIcon={2} />
        J+3
        <MeteoForecast dayNumber={3} />
        <MeteoForecastIcon dayNumberIcon={3} />
        J+4
        <MeteoForecast dayNumber={4} />
        <MeteoForecastIcon dayNumberIcon={4} />
        J+5
        <MeteoForecast dayNumber={5} />
        <MeteoForecastIcon dayNumberIcon={5} />
        J+6
        <MeteoForecast dayNumber={6} />
        <MeteoForecastIcon dayNumberIcon={6} />
        J+7
        <MeteoForecast dayNumber={7} />
        <MeteoForecastIcon dayNumberIcon={7} />
      </div>
      <Footer />
    </>
  );
}

export default App;
