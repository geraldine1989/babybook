/**
 * Npm import
 */
import React from 'react';
import { Input, Icon, Button, Table, } from 'semantic-ui-react';

/**
 * Local import
 */
import './style.scss';
import ParentsNav from 'src/components/ParentsSpace/ParentsNav';

/**
 * Code
 */
const ParentsSpaceContacts = ({ handleChangeNannyPassword, handleDeleteContact }) => {
  const parentsContacts = [
    {
      firstName: 'Toto',
      email: 'toto@gmail.com',
    },
    {
      firstName: 'Titi',
      email: 'titi@gmail.com',
    },
    {
      firstName: 'Tata',
      email: 'tata@gmail.com',
    },
  ];

  return (
    <div>
      <ParentsNav />
      <div id="contacts">
        <Button content="Modifier le code d'accès" onClick={handleChangeNannyPassword} />
        <h3>Gérer mes contacts</h3>
        <Table celled id="contact-table">
          <Table.Header className="table-header">
            <Table.Row>
              <Table.HeaderCell width="3">Nom</Table.HeaderCell>
              <Table.HeaderCell width="5">Adresse mail</Table.HeaderCell>
              <Table.HeaderCell className="delete-contact" width="2">Supprimer le contact</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            { parentsContacts.map(contact => (
              <Table.Row key={contact.email}>
                <Table.Cell>
                  { contact.firstName }
                </Table.Cell>
                <Table.Cell>
                  { contact.email }
                </Table.Cell>
                <Table.Cell className="delete-contact">
                  <Button icon>
                    <Icon name="delete" onClick={handleDeleteContact} />
                  </Button>
                </Table.Cell>
              </Table.Row>
            )) }
          </Table.Body>
        </Table>
        <h3>Ajouter un contact</h3>
        <div id="contact-add">
          <Input name="input-name" placeholder="Nom" value="" />
          <Input name="input-email" placeholder="Adresse mail" value="" />
          <Button icon type="submit">
            <Icon name="add" />
          </Button>
        </div>
      </div>
    </div>
  );
};

/**
 * Export
 */
export default ParentsSpaceContacts;
