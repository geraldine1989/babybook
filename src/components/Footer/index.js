/**
 * Npm import
 */
import React from 'react';
import { Icon } from 'semantic-ui-react';
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
    
    <div className="footer-elements"> <a className="a-elements" href="#"> Mentions Légales </a> </div>
    <div className="footer-elements"> <a className="a-elements"  href="#"> Contacts </a> </div>
    <div className="footer-elements"> <Icon name='copyright outline'/> BabyBook </div>

  </div>
);

/**
 * Export
 */
export default Footer;
