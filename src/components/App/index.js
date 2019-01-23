/**
 * Npm import
 */
import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
/**
 * Local import
 */

import HeaderLogo from 'src/components/HeaderLogo';
import MainNav from 'src/components/MainNav';
import Home from 'src/components/Home';
import InscriptionForm from 'src/components/InscriptionForm';
import LoginParents from 'src/components/LoginParents';
import LoginNanny from 'src/components/LoginNanny';
import MyDay from 'src/components/MyDay';
import Informations from 'src/components/Informations';
import ParentsNav from 'src/components/ParentsSpace/ParentsNav';
import ParentsSpaceDayType from 'src/components/ParentsSpace/ParentsSpaceDayType';
import ParentsSpaceInfo from 'src/components/ParentsSpace/ParentsSpaceInfo';
import ParentsSpaceContacts from 'src/components/ParentsSpace/ParentsSpaceContacts';
import LegalMentions from 'src/components/LegalMentions';
import Contact from 'src/components/Contact';
import NotFound from 'src/components/NotFound';
import Footer from 'src/components/Footer';

import './app.scss';

/**
 * Code
 */
const App = () => (
  <div>
    <HeaderLogo />
    <MainNav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/inscription" component={InscriptionForm} />
      <Route exact path="/login-parents" component={LoginParents} />
      <Route exact path="/login-nanny" component={LoginNanny} />
      <Route exact path="/my-day/journal" component={MyDay} />
      <Route exact path="/my-day/infos" component={Informations} />
      <Route exact path="/espace-parents" component={ParentsNav} />
      <Route exact path="/espace-parents/journee-type" component={ParentsSpaceDayType} />
      <Route exact path="/espace-parents/infos" component={ParentsSpaceInfo} />
      <Route exact path="/espace-parents/contacts" component={ParentsSpaceContacts} />
      <Route exact path="/mentions-legales" component={LegalMentions} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/not-found" component={NotFound} />
    </Switch>

    <Footer />
  </div>

);

/**
 * Export
 */
export default App;
