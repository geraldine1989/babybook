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
    
    <h2>
      Le journal de bébé pour le suivre pas à pas chaque jours.
    </h2>
    <div id="nav">
      <NavLink exact to="/login-parents" className="homeLink">
        <Button color="teal" content="Connexion Parents" className="homeButton" />
      </NavLink>
      <NavLink exact to="/login-nanny" className="homeLink">
        <Button color="teal" content="Connexion Nanny" className="homeButton"/>
      </NavLink>
      <NavLink exact to="/inscription" className="homeLink">
        <Button color="teal" content="Inscription" className="homeButton" />
      </NavLink>
    </div>
    

    <div id="complements">
      <p>
        Parents, oragnisez une journée type pour faciliter les nounous et babysitters. 
      </p>
      <p> Parents et nounous indiquez vos notes personnelles pour la journée.</p>
      <p> Ayez accès rapidement aux informations de santé de bébé</p>
      <p> Nounous et babysitters, simplifiez-vous la vie en rapportant la journée de bébé d'un simple clic </p>
    </div>

  </div>
);

/**
 * Export
 */
export default Home;
