/**
 * Npm import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon, Button } from 'semantic-ui-react';

/**
 * Local import
 */
import './style.scss';

/**
 * Code
 */
const Home = () => (
  <div id="home">
    <h1>Baby Book</h1>
    <p>
      Texte de présentation du site BabyBook.
    </p>
    <div id="nav">
      <NavLink exact to="/login-parents">
        <Button color="teal" content="Connexion Parents" />
      </NavLink>
      <NavLink exact to="/login-nanny">
        <Button color="teal" content="Connexion Nanny" />
      </NavLink>
      <NavLink exact to="/inscription">
        <Button color="teal" content="Inscription" />
      </NavLink>
    </div>
  </div>
);

/**
 * Export
 */
export default Home;
