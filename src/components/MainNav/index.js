import React from 'react';
import { Accordion, Menu, Icon, Dropdown } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

// Local import
import './style.scss';

const MainNav = ({ loggedParent, loggedNanny, handleLogoutParent, handleLogoutNanny, handleGetInfos, handleGetDay }) => {
  return (
    <div id="mainMenu">
      <div id="mainNav">
        <Dropdown item text="menu" simple className="accordionTitle">
          <Dropdown.Menu className="accordionContent">
          {/* <Dropdown.Item >
            <NavLink exact to="/espace-parents/journee-type" onClick={handleGetDay}>
            Espace Parents
            </NavLink>
          </Dropdown.Item> */}
          { loggedParent && <Dropdown.Item >
            <NavLink exact to="/espace-parents/journee-type" >
              Espace Parents
            </NavLink>
          </Dropdown.Item> }
          <Dropdown.Item>
            <NavLink exact to="/my-day/journal" onLoadStart={handleGetDay} onClick={handleGetDay}>
              Journal
            </NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink exact to="/my-day/infos" onClick={handleGetInfos}>
              Infos
            </NavLink>
          </Dropdown.Item>
          { loggedParent && <Dropdown.Item>
            <NavLink exact to="/" onClick={handleLogoutParent}>
              Se déconnecter
            </NavLink>
          </Dropdown.Item>}
          { loggedNanny && <Dropdown.Item>
            <NavLink exact to="/" onClick={handleLogoutNanny}>
              Se déconnecter
            </NavLink>
          </Dropdown.Item>}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  )
}

export default MainNav;
