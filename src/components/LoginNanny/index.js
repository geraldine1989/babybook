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
const LoginNanny = () => (
  <div id="pageLoginNanny">
    <h2>Connexion nounou / baby-sitter</h2>
    <div id="formLoginNanny">
      <Form>
        <Form.Field>
          <input type="text" placeholder="Addresse Email" value="" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Code accès" value="" />
        </Form.Field>
        <NavLink exact to="/my-day/journal">
        <Button type="submit">Se connecter</Button>
        </NavLink>
      </Form>
    </div>
      </div>
);

/**
 * Export
 */
export default LoginNanny;

