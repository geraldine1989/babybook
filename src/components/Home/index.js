/**
 * Npm import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon, Button } from 'semantic-ui-react';

/**
 * Local import
 */
import Example from 'src/containers/Example';
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
    <NavLink exact to="/login-parents">
      <Button content="Connexion Parents" />
    </NavLink>
    <NavLink exact to="/login-nanny">
      <Button content="Connexion Nanny" />
    </NavLink>
    <NavLink exact to="/inscription">
      <Button content="Inscription" />
    </NavLink>
  </div>
);

/**
 * Export
 */
export default Home;
