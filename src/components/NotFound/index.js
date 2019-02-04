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
    <h2>Ou que vous n'y avez pas accès...</h2>
    <NavLink exact to="/">
      <button className="back-button"> Retour</button>
    </NavLink>
  </div>
);

/**
 * Export
 */
export default NotFound;
