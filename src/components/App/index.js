/**
 * Npm import
 */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
/**
 * Local import
 */

import HeaderLogo from 'src/components/HeaderLogo';
import MainNav from 'src/containers/MainNav';
import Home from 'src/containers/Home';
import InscriptionForm from 'src/containers/InscriptionForm';
import LoginParents from 'src/containers/LoginParents';
import LoginNanny from 'src/containers/LoginNanny';
import MyDay from 'src/containers/MyDay';
import Informations from 'src/containers/Informations';
import ParentsSpaceDayType from 'src/containers/ParentsSpaceDayType';
import ParentsSpaceInfo from 'src/containers/ParentsSpaceInfo';
import ParentsSpaceContacts from 'src/containers/ParentsSpaceContacts';
import LegalMentions from 'src/components/LegalMentions';
import Contact from 'src/components/Contact';
import NotFound from 'src/components/NotFound';
import Footer from 'src/components/Footer';

import './app.scss';

/**
 * Code
 */
const App = ({ logged }) => {

  return (
    <div>
      <HeaderLogo />
      {/* { logged && <MainNav /> } */}
      <MainNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/inscription" component={InscriptionForm} />
        <Route exact path="/login-parents" component={LoginParents} />
        <Route exact path="/login-nanny" component={LoginNanny} />
        <Route exact path="/my-day/journal" component={MyDay} />
        <Route exact path="/my-day/infos" component={Informations} />
        <Route exact path="/espace-parents/journee-type" component={ParentsSpaceDayType} />
        <Route exact path="/espace-parents/infos" component={ParentsSpaceInfo} />
        <Route exact path="/espace-parents/contacts" component={ParentsSpaceContacts} />
        {/* {logged && parent && <Route exact path="/espace-parents/contacts" component={ParentsSpaceContacts} />} */}
        <Route exact path="/mentions-legales" component={LegalMentions} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );

}

/**
 * Export
 */
export default App;
