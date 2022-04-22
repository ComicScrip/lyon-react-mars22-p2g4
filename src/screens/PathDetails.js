import React from 'react';
import DisplayMap from '../components/DisplayMap';

const handleLetsGo = () => {
  window.location.href = '/liveview';
};

export default function PathDetails({ path, position }) {
  return (
    <div className="flex-auto flex-col items-center justify-center m-5  p-5 rounded-xl border-2 bg-white bg-opacity-80">
      <div className="text-xl">Titre du parcours </div>

      <div className="flex flex-row items-center justify-around m-2">
        <div>
          <div>12 km</div>
          <div className="text-xs">Distance</div>
        </div>
        <div>
          <div>100 m</div>
          <div className="text-xs">Dénivelé</div>
        </div>
        <div>
          <div>10 </div>
          <div className="text-xs">Photos à découvrir</div>
        </div>
      </div>

      <DisplayMap path={path} position={position} className="m-2" />
      <div className="text-justify m-2 p-2">
        Lorem ipsum dolor sit amet. Et quia fugit in sint inventore rem nihil
        quo odit atque et nesciunt architecto non minus quam qui nesciunt dicta?
        Ea necessitatibus iusto et eaque sunt 33 neque quae est sunt fugit.
      </div>

      <div className="flex flex-row justify-center m-2">
        <label className="m-2 text-l" htmlFor="datetime">
          Départ
          <input
            className="m-2"
            id="datetime"
            type="datetime-local"
            value="2022-04-22T19:30"
            min="2022-04-22T19:30"
            max="2022-04-30T19:30"
          />
        </label>
      </div>
      <div className="flex flex-row justify-around items-center m-2 p-5">
        <img
          src="https://cdn-icons-png.flaticon.com/512/66/66275.png"
          alt="meteo icon"
          className="w-10 h-10"
        />
        <span className="text-2xl">12 °C</span>
      </div>

      <button
        type="button"
        className="text-black rounded-md bg-[#F71735] hover:bg-red-900 h-10 w-60"
        onClick={handleLetsGo}
      >
        Let's GO !
      </button>
    </div>
  );
}
