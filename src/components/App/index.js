/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */


import Home from 'src/components/Home';
import HeaderLogo from 'src/components/HeaderLogo';
import MainNav from '../MainNav';
import InscriptionForm from '../InscriptionForm';
import LoginNanny from '../LoginNanny';
import LoginParents from '../LoginParents';


import './app.scss';


/**
 * Code
 */
const App = () => (
  <div>
    <HeaderLogo />

    <LoginNanny />
  </div>

);

/**
 * Export
 */
export default App;
