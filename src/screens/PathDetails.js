/* eslint-disable no-array-constructor */
/* eslint-disable jsx-a11y/label-has-associated-control */
import DisplayMap from '../components/DisplayMap';
import './PathDetails.css';
import Photos from '../components/Photos';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import MeteoForecastIcon from '../components/MeteoForecastIcon';

export default function PathDetails() {
  const [path, setPath] = useState();
  const [loadingError, setLoadingError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const theDate = new Date();
  const tabJour = new Array(
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
    'Samedi'
  );

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/paths/${id}`)
      .then((response) => response.data)
      .then((data) => setPath(data))
      .catch(() => {
        setLoadingError("Impossible de charger le parcours depuis l'API");
      })
      .finally(() => setIsLoading(false));
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
              <div className="text-xs">Dénivelé</div>
            </div>
            <div className="pathPicsNb m-2">
              <div>{path.difficulty} / 5</div>
              <div className="text-xs">Difficulté</div>
            </div>
          </div>
          <div className="pathMapContainer">
            <DisplayMap path={path} />
          </div>
          <div className="pathDescription text-justify m-2 p-2">
            {path.description}
          </div>
          <div className="pathPics">
            {<Photos path={path.trace.features[0].geometry.coordinates} />}
          </div>
          <div className="pathDate flex flex-row justify-center m-2">
            <label
              className="m-2 flex flex-row items-center"
              htmlFor="datetime"
            >
              Départ
            </label>
            <input
              className="m-2"
              name="datetime"
              id="datetime"
              type="datetime-local"
            />
          </div>
          <div className="meteo">
            <h2 className="title">Prévisions météo</h2>
            <div className="first">
              <p>
                Aujourd'hui <MeteoForecastIcon dayNumberIcon={0} />
              </p>
              <p>
                {tabJour[theDate.getDay() + 1]}{' '}
                <MeteoForecastIcon dayNumberIcon={1} />
              </p>
            </div>
            <div className="second">
              <p>
                {tabJour[theDate.getDay() + 2]}{' '}
                <MeteoForecastIcon dayNumberIcon={2} />
              </p>
              <p>
                {tabJour[theDate.getDay() + 3]}{' '}
                <MeteoForecastIcon dayNumberIcon={3} />
              </p>
            </div>
            <div className="third">
              <p>
                {tabJour[theDate.getDay() + 4]}
                <MeteoForecastIcon dayNumberIcon={4} />
              </p>
              <p>
                {tabJour[theDate.getDay() + 5]}
                <MeteoForecastIcon dayNumberIcon={5} />
              </p>
            </div>
            <div className="four">
              <p>
                {tabJour[theDate.getDay() + 6]}
                <MeteoForecastIcon dayNumberIcon={6} />
              </p>
              <p>
                {tabJour[theDate.getDay() + 7]}
                <MeteoForecastIcon dayNumberIcon={7} />
              </p>
            </div>
          </div>
          <div className="pathButton w-1/2 h-10 flex justify-center items-center text-black rounded-md bg-[#F71735] hover:bg-red-900 shadow-lg border-black">
            <Link to={`/liveview/${id}`}>Let's Go !</Link>
          </div>
        </div>
      )}
    </div>
  );
}
