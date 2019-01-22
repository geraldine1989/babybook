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


import './app.scss';


/**
 * Code
 */
const App = () => (
  <div>
    <HeaderLogo />
    
    <InscriptionForm />
  </div>

);

/**
 * Export
 */
export default App;
