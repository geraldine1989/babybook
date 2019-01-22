/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import MyDay from 'src/components/MyDay';
import Footer from 'src/components/Footer';
import './app.scss';
import 'semantic-ui-css/semantic.min.css';

/**
 * Code
 */
const App = () => (
  <div id="container">
    <MyDay />
    <Footer />
  </div>
);

/**
 * Export
 */
export default App;
