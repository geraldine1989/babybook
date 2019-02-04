/**
 * Npm import
 */
import React from 'react';
import { Icon } from 'semantic-ui-react';
import { NavLink, Switch, Route } from 'react-router-dom';
/**
 * Local import
 */
import LegalMentions from 'src/components/LegalMentions';
import Contact from 'src/components/Contact';
import './style.scss';


/**
 * Code
 */
const Footer = () => (
  <div id="footer">
    <NavLink exact to="mentions-legales">
      <div className="footer-elements a-elements">Mentions Légales</div>
    </NavLink>
    <NavLink exact to="contact">
      <div className="footer-elements a-elements">Contact</div>
    </NavLink>
    <div className="footer-elements"> <Icon name="copyright outline" /> BabyBook </div>
  </div>
);

/**
 * Export
 */
export default Footer;
