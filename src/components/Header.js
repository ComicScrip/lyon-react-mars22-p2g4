import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        <Link to="/journal">Journal</Link>
        <Link to="/road">Parcours</Link>
        <Link to="/liveview">Parcours</Link>
      </nav>
    </header>
  );
}
