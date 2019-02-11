/**
 * Npm import
 */
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
const App = ({ loggedNanny, loggedParent, signed }) => {
// ****************** vv DEV vv ************************
// return (
//   <div>
//       <HeaderLogo />
//       <MainNav />
//       { signed && <Redirect to="/login-parents" /> }
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/inscription" component={InscriptionForm} />
//         <Route exact path="/login-parents" component={LoginParents} />
//         <Route exact path="/login-nanny" component={LoginNanny} />
//         <Route exact path="/my-day/journal" component={MyDay} />
//         <Route exact path="/my-day/infos" component={Informations} />
//         <Route exact path="/espace-parents/journee-type" component={ParentsSpaceDayType} />
//         <Route exact path="/espace-parents/infos" component={ParentsSpaceInfo} />
//         <Route exact path="/espace-parents/contacts" component={ParentsSpaceContacts} />
//         <Route exact path="/mentions-legales" component={LegalMentions} />
//         <Route exact path="/contact" component={Contact} />
//         <Route component={NotFound} />
//       </Switch>
//       <Footer />
//     </div>
//   );
// }
// ****************** ^^ DEV ^^ ************************
// ****************** vv PROD vv ************************
  return (
    <div>
      <HeaderLogo />
      { (loggedNanny || loggedParent) && <MainNav /> }
      { signed && <Redirect to="/login-parents" /> }
      { !signed && (loggedNanny || loggedParent) && <Redirect to="/my-day/journal" /> }
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/inscription" component={InscriptionForm} />
        <Route exact path="/login-parents" component={LoginParents} />
        <Route exact path="/login-nanny" component={LoginNanny} />
        {(loggedNanny || loggedParent) && <Route exact path="/my-day/journal" component={MyDay} />}
        {(loggedNanny || loggedParent) && <Route exact path="/my-day/infos" component={Informations} />}
        {loggedParent && <Route exact path="/espace-parents/journee-type" component={ParentsSpaceDayType} />}
        {loggedParent && <Route exact path="/espace-parents/infos" component={ParentsSpaceInfo} />}
        {loggedParent && <Route exact path="/espace-parents/contacts" component={ParentsSpaceContacts} />}
        <Route exact path="/mentions-legales" component={LegalMentions} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}
// ****************** ^^ PROD ^^ ************************

/**
 * Export
 */
export default App;
