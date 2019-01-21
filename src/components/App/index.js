/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import Informations from 'src/components/Informations';
import HeaderLogo from 'src/components/HeaderLogo';

import './app.scss';

/**
 * Code
 */
const App = () => (
  <div>
    <HeaderLogo />
    <Informations />
  </div>
  
);

/**
 * Export
 */
export default App;
