import { Link, useParams, useNavigate } from 'react-router-dom';
import DisplayMap from '../components/DisplayMap';
import './PathDetails.css';
import Photos from '../components/Photos';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MeteoForecastIcon from '../components/MeteoForecastIcon';

export default function PathDetails() {
  const [path, setPath] = useState();
  const [loadingError, setLoadingError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const theDate = new Date();
  const tabJour = [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
  ];

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/paths/${id}`)
      .then((response) => response.data)
      .then((data) => setPath(data))
      .catch((err) => {
        if (err.response.status === 404) {
          navigate('/NotFoundPage');
        }
        setLoadingError("Impossible de charger le parcours depuis l'API");
      })
      .finally(() => setIsLoading(false));

    return () => localStorage.setItem('currentTrace', []);
  }, []);

  return (
    <div className="backgroundElement p-5">
      {loadingError && <p>{loadingError}</p>}
      {isLoading && <p>Chargement en cours...</p>}
      {!isLoading && path && (
        <div className="pathCard flex flex-col items-center justify-center  p-5 rounded-xl border-2 bg-white bg-opacity-80">
          <div className="pathTitle text-xl">{path.name}</div>
          <div className="pathInfos flex flex-row items-center justify-around m-2 text-center">
            <div className="pathDistance m-2">
              <div>{path.length} km</div>
              <div className="text-xs">Distance</div>
            </div>
            <div className="pathHeightDiff m-2">
              <div>{path.elevation} m</div>
              <div className="text-xs">D??nivel??</div>
            </div>
            <div className="pathPicsNb m-2">
              <div>{path.difficulty} / 5</div>
              <div className="text-xs">Difficult??</div>
            </div>
          </div>
          <div className="pathMapContainer">
            <DisplayMap path={path} />
          </div>
          <div className="pathDescription text-justify m-2 p-2">
            {path.description}
          </div>
          <div className="pathPics h-50 w-50">
            {<Photos path={path.trace.features[0].geometry.coordinates} />}
          </div>

          <div className="meteo">
            <h2 className="title">Pr??visions m??t??o</h2>
            <div className="day">
              <div>
                Aujourd'hui <MeteoForecastIcon dayNumberIcon={0} />
              </div>
              <div>
                {tabJour[theDate.getDay() + 1]}{' '}
                <MeteoForecastIcon dayNumberIcon={1} />
              </div>
            </div>
            <div className="day">
              <div>
                {tabJour[theDate.getDay() + 2]}{' '}
                <MeteoForecastIcon dayNumberIcon={2} />
              </div>
              <div>
                {tabJour[theDate.getDay() + 3]}{' '}
                <MeteoForecastIcon dayNumberIcon={3} />
              </div>
            </div>
            <div className="day">
              <div>
                {tabJour[theDate.getDay() + 4]}
                <MeteoForecastIcon dayNumberIcon={4} />
              </div>
              <div>
                {tabJour[theDate.getDay() + 5]}
                <MeteoForecastIcon dayNumberIcon={5} />
              </div>
            </div>
            <div className="day">
              <div>
                {tabJour[theDate.getDay() + 6]}
                <MeteoForecastIcon dayNumberIcon={6} />
              </div>
              <div>
                {tabJour[theDate.getDay() + 7]}
                <MeteoForecastIcon dayNumberIcon={7} />
              </div>
            </div>
          </div>
          <div className="pathButton">
            <Link to={`/liveview/${id}`}>Let's Go !</Link>
          </div>
        </div>
      )}
    </div>
  );
}
