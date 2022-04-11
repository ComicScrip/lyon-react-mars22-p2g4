import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <nav className="navBar">
        <div className="logoMeteo">LogoMeteo</div>
        <div className="logoShoe">LogoShoe</div>
        <Link className="Navlink" to="/">
          Accueil
        </Link>
        <Link className="Navlink" to="/about">
          A propos
        </Link>
        <Link className="Navlink" to="/journal">
          Journal
        </Link>
        <Link className="Navlink" to="/road">
          Parcours
        </Link>
      </nav>
    </header>
  );
}
