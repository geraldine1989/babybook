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
const Error = () => (
  <div id="error">
    <h2>Oups... Il semblerait que cette page n'existe pas...</h2>
    <button className="back-button"> Retour</button>

  </div>
);

/**
 * Export
 */
export default Error;
