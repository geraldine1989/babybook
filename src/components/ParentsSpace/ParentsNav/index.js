/**
 * Npm import
 */
import React from 'react';
import { Menu } from 'semantic-ui-react';

/**
 * Local import
 */
import './style.scss';

/**
 * Code
 */
const ParentsNav = ({ activeMenu, handleItemMenu,handleLogout }) => {(
  <div id="parents-nav">
    <Menu tabular>
      <Menu.Item name="Espace Parents" active={activeMenu === 'Espace Parents'} onClick={handleItemMenu} />
      <Menu.Item name="Journal" active={activeMenu === 'Journal'} onClick={handleItemMenu} />
      <Menu.Item name="infos" active={activeMenu === 'infos'} onClick={handleItemMenu} />
      <Menu.Item name="Se déconnecter" onClick={handleLogout} />
    </Menu>
  </div>
)};

/**
 * Export
 */
export default ParentsNav;
