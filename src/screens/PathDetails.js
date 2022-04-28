import React from 'react';
import { Link } from 'react-router-dom';
import DisplayMap from '../components/DisplayMap';
import './PathDetails.css';
import Photos from '../components/Photos';

export default function PathDetails({ path, position }) {
  return (
    <div className="backgroundElement p-5">
      <div className="pathCard flex flex-col items-center justify-center  p-5 rounded-xl border-2 bg-white bg-opacity-80">
        <div className="pathTitle text-xl">Lyon, tour de la presqu'ile </div>

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
          <DisplayMap path={path} position={position} />
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
          <label className="m-2 flex flex-row items-center" htmlFor="datetime">
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
          <Link to="/liveview">Let's Go !</Link>
        </div>
      </div>
    </div>
  );
}
