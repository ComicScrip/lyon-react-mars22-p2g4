/* eslint-disable consistent-return */
import React, { useState } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import CurrentMeteoIcon from './CurrentMeteoIcon';
import MeteoTemp from './MeteoTemp';

const getActiveLinkStyle = ({ isActive }) => {
  if (isActive) return { color: 'white' };
};
function Header() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  return (
    <nav className="all">
      <nav className={`navbar ${showLinks ? 'show-nav' : 'hide-nav'}`}>
        <div className="navbar_logo">
          <div className="container">
            <img className="logo" alt="" src="shoe.svg" />
            <h1>PIC 'N' MOVE</h1>
            <div className="meteoDesktop" />
            <CurrentMeteoIcon />
            <MeteoTemp />
          </div>
        </div>

        <ul className="navbar_links">
          <li className="navbar_items">
            <NavLink style={getActiveLinkStyle} to="/" className="navbar_link">
              Accueil
            </NavLink>
          </li>
          <li className="navbar_items">
            <NavLink
              style={getActiveLinkStyle}
              to="/road"
              className="navbar_link"
            >
              Parcours
            </NavLink>
          </li>

          <li className="navbar_items">
            <NavLink
              style={getActiveLinkStyle}
              to="/journal"
              className="navbar_link"
            >
              Journal
            </NavLink>
          </li>

          <li className="navbar_items">
            <NavLink
              style={getActiveLinkStyle}
              to="/about"
              className="navbar_link"
            >
              À propos
            </NavLink>
          </li>
          <div className="meteoBurger">
            <CurrentMeteoIcon />
            Lyon, <MeteoTemp />
          </div>
          <a href="https://www.facebook.com/runinmarrakech/">
            <img className="rezo" alt="" src="rezo.jpg" />
          </a>
        </ul>
        <button
          type="button"
          className="navbar_burger"
          onClick={handleShowLinks}
        >
          <span className="burger_bar" />
        </button>
      </nav>
    </nav>
  );
}

export default Header;
