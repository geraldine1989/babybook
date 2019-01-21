/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */

import Informations from 'src/components/Informations';
import HeaderLogo from 'src/components/HeaderLogo';
import MyDay from 'src/components/MyDay';


import './app.scss';

/**
 * Code
 */
const App = () => (
  <div>
    <HeaderLogo />
    <MyDay />
    <Informations />
  </div>

);

/**
 * Export
 */
export default App;
