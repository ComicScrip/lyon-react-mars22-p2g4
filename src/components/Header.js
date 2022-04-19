import React from 'react';
import './Header.css';

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar_logo">Logo</div>
      <ul className="navbar_links">
        <li className="navbar_items">
          <a href="/" className="navbar_link">
            Accueil
          </a>
        </li>

        <li className="navbar_items">
          <a href="/" className="navbar_link">
            Créer un parcours
          </a>
        </li>

        <li className="navbar_items">
          <a href="/" className="navbar_link">
            Partir courir
          </a>
        </li>

        <li className="navbar_items">
          <a href="/" className="navbar_link">
            Mon historique
          </a>
        </li>

        <li className="navbar_items">
          <a href="/" className="navbar_link">
            Contact
          </a>
        </li>
      </ul>
      <button type="button" className="navbar_burger">
        <span className="burger_bar" />
      </button>
    </nav>
  );
}

export default Header;
