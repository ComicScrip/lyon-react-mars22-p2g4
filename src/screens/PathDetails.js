/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'react-router-dom';
import DisplayMap from '../components/DisplayMap';
import './PathDetails.css';
import Photos from '../components/Photos';
import MeteoForecastIcon from '../components/MeteoForecastIcon';
import MeteoForecast from '../components/MeteoForecast';

export default function PathDetails({ path, position }) {
  return (
    <div className="backgroundElement p-5">
      <div className="pathCard flex flex-col items-center justify-center  p-5 rounded-xl border-2 bg-white bg-opacity-80">
        <div className="pathTitle text-xl">Titre du parcours </div>

        <div className="pathInfos flex flex-row items-center justify-around m-2 text-center">
          <div className="pathDistance m-2">
            <div>12 km</div>
            <div className="text-xs">Distance</div>
          </div>
          <div className="pathHeightDiff m-2">
            <div>100 m</div>
            <div className="text-xs">Dénivelé</div>
          </div>
          <div className="pathPicsNb m-2">
            <div>10 </div>
            <div className="text-xs">Photos à découvrir</div>
          </div>
        </div>
        <div className="pathMapContainer">
          <DisplayMap path={path} position={position} className="m-2" />
        </div>

        <div className="pathDescription text-justify m-2 p-2">
          Lorem ipsum dolor sit amet. Et quia fugit in sint inventore rem nihil
          quo odit atque et nesciunt architecto non minus quam qui nesciunt
          dicta? Ea necessitatibus iusto et eaque sunt 33 neque quae est sunt
          fugit.
        </div>

        <div className="pathPics">
          <Photos />
        </div>

        <div className="pathDate flex flex-row justify-center m-2">
          <label
            className="m-2 flex flex-row items-center"
            htmlFor="datetime"
          />
          Départ
          <input
            className="m-2"
            name="datetime"
            id="datetime"
            onChange={() => 'Cette fonctionne devra modifier la météo'}
            type="datetime-local"
          />
        </div>
        <div>
          <MeteoForecastIcon dayNumberIcon={1} />
          <MeteoForecast dayNumber={1} />
        </div>

        <div className="pathButton w-1/2 h-10 flex justify-center items-center text-black rounded-md bg-[#F71735] hover:bg-red-900 shadow-lg border-black">
          <Link to="/liveview">Let's Go !</Link>
        </div>
      </div>
    </div>
  );
}
