import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';
/**
 * Local import
 */
import './style.scss';


const ParentsNav = ({ handleGetContacts }) => {
  return (
    <div id="parentsNav">
      <h2>Espace parents</h2>
      <Menu secondary className="second-menu">
        <Menu.Item
          as={NavLink}
          to="/espace-parents/journee-type"
          className="second-menu-item"
          name='Modifier journée type'
          //active={activeItem === 'Modifier journée type'}
          // onClick={this.handleItemClick}
          activeclassename="active"
        />
        <Menu.Item
          as={NavLink}
          to="/espace-parents/infos"
          className="second-menu-item"
          name='Modifier les infos'
          //active={activeItem === 'Modifier les infos'}
          // onClick={this.handleItemClick}
          activeclassename="active"
        />
        <Menu.Item
          as={Link}
          to="/espace-parents/contacts"
          className="second-menu-item"
          name='Gestion contacts'
          //active={activeItem === 'Gestion contacts'}
          onClick={handleGetContacts}
          activeclassename="active"
        />
      </Menu>
    </div>
  );
};

export default ParentsNav;
