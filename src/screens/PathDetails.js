import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DisplayMap from '../components/DisplayMap';
import './PathDetails.css';
import Photos from '../components/Photos';
import axios from 'axios';

export default function PathDetails() {
  const [path, setPath] = useState();
  const [loadingError, setLoadingError] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/paths/${id}`)
      .then((response) => response.data)
      .then((data) => setPath(data))
      .catch(() => {
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
          <div className="pathPics w-50 h-50">
            {<Photos path={path.trace.features[0].geometry.coordinates} />}
          </div>
          <div className="pathDate flex flex-row justify-center m-2">
            <label
              className="m-2 flex flex-row items-center"
              htmlFor="datetime"
            >
              Départ
              <input
                className="m-2"
                id="datetime"
                onChange={() => 'Cette fonctionne devra modifier la météo'}
                type="datetime-local"
                value="2022-04-22T19:30"
                min="2022-04-22T19:30"
                max="2022-04-30T19:30"
              />
            </label>
          </div>
          <div className="pathMeteo flex flex-row justify-around items-center m-2 p-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/66/66275.png"
              alt="meteo icon"
              className=" w-10 h-10"
            />
            <span className="text-2xl">12 °C</span>
          </div>
          <div className="pathButton w-1/2 h-10 flex justify-center items-center text-black rounded-md bg-[#F71735] hover:bg-red-900 shadow-lg border-black">
            <Link to={`/liveview/${id}`}>Let's Go !</Link>
          </div>
        </div>
      )}
    </div>
  );
}
