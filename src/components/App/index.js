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
import Informations from '../Informations';
import ParentsSpaceDayType from 'src/components/ParentsSpace/ParentsSpaceDayType';
import ParentsSpaceInfo from 'src/components/ParentsSpace/ParentsSpaceInfo';


import './app.scss';


/**
 * Code
 */
const App = () => (
  <div>
    <HeaderLogo />
    <MainNav/>
    <ParentsSpaceDayType />
    <ParentsSpaceInfo />
    <LoginParents />
  </div>

);

/**
 * Export
 */
export default App;
