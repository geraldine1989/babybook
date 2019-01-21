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
  <div id="page">
    <div id="title">Baby Book</div>
    <h2 id="pagetitle">Connexion parents</h2>
    <div id="form">
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
    <div id="legalnotices">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
  </div>
);

/**
 * Export
 */
export default LoginParents;

