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
const MainNAV = ({ activeMenu, handleItemMenu,handleLogout }) => {
  
  return (
  <div id="parents-nav" className="right menu">
    <Menu tabular >
      <Menu.Item name="Espace Parents" active={activeMenu === 'Espace Parents'} onClick={handleItemMenu} />
      <Menu.Item name="Journal" active={activeMenu === 'Journal'} onClick={handleItemMenu} />
      <Menu.Item name="Infos" active={activeMenu === 'Infos'} onClick={handleItemMenu} />
      <Menu.Item name="Se déconnecter" onClick={handleLogout} />
    </Menu>
  </div>
)};

/**
 * Export
 */
export default MainNAV;
