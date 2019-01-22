/**
 * Npm import
 */
import React from 'react';
import { Form } from 'semantic-ui-react';

/**
 * Local import
 */


/**
 * Code
 */
const Contact = () => (
  <div id="general-contact">
    <Form>
      <Form.Group widths="equal">
        <Form.Input fluid label="Prénom" placeholder="Prénom" />
        <Form.Input fluid label="Nom" placeholder="Nom" />
      </Form.Group>
      <Form.TextArea autoHeight label="Votre message" placeholder="Quelle est votre question ?" />
      <Form.Button color="teal">Envoyer</Form.Button>
    </Form>
  </div>
);

/**
 * Export
 */
export default Contact;
