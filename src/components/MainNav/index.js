import React from 'react';
import { Accordion, Menu, Icon, Dropdown } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

// Local import
import './style.scss';

const MainNav = ({ parent, handleLogout, handleGetTasks, handleGetInfos }) => {
  return (
    <div id="mainMenu">
      <div id="mainNav">
        <Dropdown item text="menu" simple className="accordionTitle">
          <Dropdown.Menu className="accordionContent">
          {/* { parent && <Dropdown.Item >
            <NavLink exact to="/espace-parents/journee-type" >
              Espace Parents
            </NavLink>
          </Dropdown.Item> } */}
          <Dropdown.Item >
            <NavLink exact to="/espace-parents/journee-type" >
              Espace Parents
            </NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink exact to="/my-day/journal" onClick={handleGetTasks}>
              Journal
            </NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink exact to="/my-day/infos" onClick={handleGetInfos}>
              Infos
            </NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink exact to="/" onClick={handleLogout}>
              Se déconnecter
            </NavLink>
          </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}

export default MainNav;
