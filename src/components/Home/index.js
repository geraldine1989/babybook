/**
 * Npm import
 */
import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { Menu, Icon, Button } from 'semantic-ui-react';

/**
 * Local import
 */
import './style.scss';
import InscriptionForm from '../InscriptionForm';
import LoginParents from '../LoginParents';
import LoginNanny from '../LoginNanny';
/**
 * Code
 */
const Home = ({ handleGetEmails }) => (
  <div id="home">
    <h2>
      Le journal de bébé pour le suivre pas à pas chaque jour.
    </h2>
    <div id="nav">
      <NavLink exact to="/login-parents" className="homeLink">
        <Button color="teal" content="Connexion Parents" className="homeButton" onClick={handleGetEmails} />
      </NavLink>
      <NavLink exact to="/login-nanny" className="homeLink">
        <Button color="teal" content="Connexion Nanny" className="homeButton" onClick={handleGetEmails} />
      </NavLink>
      <NavLink exact to="/inscription" className="homeLink">
        <Button color="teal" content="Inscription" className="homeButton" onClick={handleGetEmails} />
      </NavLink>
    </div>
    <div id="complements">
      <p>
        Parents, organisez une journée type pour faciliter les nounous et babysitters.
      </p>
      <p>
        Parents et nounous, indiquez vos notes personnelles pour la journée.
      </p>
      <p>
        Ayez accès rapidement aux informations de santé de bébé
      </p>
      <p>
        Nounous et babysitters, simplifiez-vous la vie en rapportant la journée de bébé d'un simple clic.
      </p>
    </div>
  </div>
);

/**
 * Export
 */
export default Home;
