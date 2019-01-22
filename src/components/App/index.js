/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import MyDay from 'src/components/MyDay';
import Footer from 'src/components/Footer';
import 'semantic-ui-css/semantic.min.css';
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="app">
    <MyDay />
    <Footer />
  </div>
);

/**
 * Export
 */
export default App;
