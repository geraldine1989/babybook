/**
 * Npm import
 */
import React from 'react';

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
  <div id="container">
    <LegalMentions />
    <Contact />
  </div>
);

/**
 * Export
 */
export default Footer;
