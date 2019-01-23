/**
 * Npm import
 */
import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */
//import Example from 'src/containers/Example';
import './style.scss';
import 'semantic-ui-css/semantic.min.css';
/**
 * Code
 */
const LoginParents = () => (
  <div id="pageLoginParents">
    
    <h2>Connexion parents</h2>
    <div id="formLoginParents">
      <Form>
        <Form.Field>
          <input type="text" placeholder="Addresse Email" value="" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Code accès" value="" />
        </Form.Field>
        <NavLink exact to="/espace-parents">
          <Button type="submit">Se connecter</Button>
        </NavLink>
      </Form>
    </div>
  
  </div>
);

/**
 * Export
 */
export default LoginParents;

