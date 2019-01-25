import React from 'react';
import { NavLink } from 'react-router-dom';

// Local imports
import './style.scss';

const HeaderLogo = ({getAllDatas}) => (
  <NavLink exact to="/">
    <div id="headerLogo">
      <h2 onClick={getAllDatas}> <span className="headerLogoB">B</span>aby <span className="headerLogoB">B</span>ook</h2>
    </div>
  </NavLink>
);

export default HeaderLogo;
