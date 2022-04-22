import React from 'react';
import style from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className={style.boxes}>
      <div className={style.container}>
        <h1 className={style.title}>Bienvenue sur Pic'N'Move !</h1>
        <p className={style.text}>
          Votre activité sportive selon votre niveau. <br /> Avec des photos et
          la météo pour vous aider.
        </p>
      </div>
      <Link to="/road">
        <button type="submit">LET'S GO !</button>
      </Link>
    </div>
  );
}
