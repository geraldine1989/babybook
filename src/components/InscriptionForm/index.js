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
import { NavLink } from 'react-router-dom';
/**
 * Code
 */
const InscriptionForm = () => (
  <div id="pageInscription">
    <h2 id="pagetitle">Inscription parents</h2>
    <div id="formInscription">
      <Form>
        <Form.Field>
          <input type="text" placeholder="Identifiant" value="" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Adresse email" value="" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Mot de passe" value="" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Confirmation mot de passe" value="" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Code accès" value="" />
        </Form.Field>
        <NavLink exact to="/login-parents">
          <Button type="submit">S'inscrire</Button>
        </NavLink>
      </Form>
    </div>
  </div>
);

/**
 * Export
 */
export default InscriptionForm;

