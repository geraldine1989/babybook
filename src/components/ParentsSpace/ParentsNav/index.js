<<<<<<< HEAD
import React from 'react';
import { Menu } from 'semantic-ui-react';
=======
import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';
>>>>>>> 792436bbc55a60bb5bad9c9edf452dad443e8052
import { NavLink, Link } from 'react-router-dom';
/**
 * Local import
 */
import './style.scss';


<<<<<<< HEAD
const ParentsNav = ({ handleGetContacts, getChild }) => {
=======
const ParentsNav = ({ handleGetContacts }) => {
>>>>>>> 792436bbc55a60bb5bad9c9edf452dad443e8052
  return (
    <div id="parentsNav">
      <h2>Espace parents</h2>
      <Menu secondary className="second-menu">
        <Menu.Item
          as={NavLink}
          to="/espace-parents/journee-type"
          className="second-menu-item"
<<<<<<< HEAD
          name="Modifier journée type"
          // active={activeItem === 'Modifier journée type'}
=======
          name='Modifier journée type'
          //active={activeItem === 'Modifier journée type'}
>>>>>>> 792436bbc55a60bb5bad9c9edf452dad443e8052
          // onClick={this.handleItemClick}
          activeclassename="active"
        />
        <Menu.Item
          as={NavLink}
          to="/espace-parents/infos"
          className="second-menu-item"
<<<<<<< HEAD
          name="Modifier les infos"
          // active={activeItem === 'Modifier les infos'}
=======
          name='Modifier les infos'
          //active={activeItem === 'Modifier les infos'}
>>>>>>> 792436bbc55a60bb5bad9c9edf452dad443e8052
          // onClick={this.handleItemClick}
          activeclassename="active"
        />
        <Menu.Item
          as={Link}
          to="/espace-parents/contacts"
          className="second-menu-item"
<<<<<<< HEAD
          name="Gestion contacts"
          // active={activeItem === 'Gestion contacts'}
=======
          name='Gestion contacts'
          //active={activeItem === 'Gestion contacts'}
>>>>>>> 792436bbc55a60bb5bad9c9edf452dad443e8052
          onClick={handleGetContacts}
          activeclassename="active"
        />
      </Menu>
    </div>
  );
};

export default ParentsNav;
