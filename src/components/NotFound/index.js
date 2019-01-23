/**
 * Npm import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */
import './style.scss';

/**
 * Code
 */
const NotFound = () => (
  <div id="error">
    <h2>Oups... Il semblerait que cette page n'existe pas...</h2>
    <NavLink exact to="/home">
      <button className="back-button"> Retour</button>
    </NavLink>
  </div>
);

/**
 * Export
 */
export default NotFound;
