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
import Footer from '../Footer';
import LegalMentions from '../LegalMentions';
import Contact from '../Contact';
import ParentsNav from '../ParentsSpace/ParentsNav';
import ParentsSpaceInfo from '../ParentsSpace/ParentsSpaceInfo';

import './app.scss';


/**
 * Code
 */
const App = () => (
  <div>
    <HeaderLogo />
    <MainNav/>
    <ParentsNav />
    <ParentsSpaceInfo/>
    <Footer/>

  </div>

);

/**
 * Export
 */
export default App;
