/**
 * Npm import
 */
import React from 'react';
import { Form, Button } from 'semantic-ui-react';

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
        <Button type="submit">Se connecter</Button>
      </Form>
    </div>
  
  </div>
);

/**
 * Export
 */
export default LoginParents;

