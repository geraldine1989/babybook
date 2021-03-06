/**
 * import : npm
 */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';




/**
 * import : local
 */
import store from 'src/store';
import App from 'src/containers/App';

/**
 * Render - Rendu d'un composant React dans le DOM
 */
const rootComponent = (
  
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

const target = document.getElementById('root');
// 1 - Le composant à rendre
// 2 - La cible dans le DOM
render(rootComponent, target);
