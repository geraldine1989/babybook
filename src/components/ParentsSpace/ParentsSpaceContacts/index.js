/**
 * Npm import
 */
import React from 'react';
import { Input, Icon, Button, Table, Label } from 'semantic-ui-react';

/**
 * Local import
 */
import './style.scss';

/**
 * Code
 */
const ParentsSpaceContacts = ({ handleChangeNannyPassword, handleDeleteContact }) => {
  const parentsContacts = [
    {
      firstName: "Toto",
      email: "toto@gmail.com",
    },
    {
      firstName: "Titi",
      email: "titi@gmail.com",
    },
    {
      firstName: "Tata",
      email: "tata@gmail.com",
    },
  ];

  return (
  <div id="contacts">
    <Button content="Modifier le code d'accès" onClick={handleChangeNannyPassword} />
    <h3>Gérer mes contacts</h3>
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width="3">Nom</Table.HeaderCell>
          <Table.HeaderCell width="6">Adresse mail</Table.HeaderCell>
          <Table.HeaderCell width="1"></Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        { parentsContacts.map(contact => (
          <Table.Row key={contact.email}>
            <Table.Cell>
              <Label>{ contact.firstName }</Label>
            </Table.Cell>
            <Table.Cell>
              { contact.email }
            </Table.Cell>
            <Table.Cell>
              <Icon name="close" size="big" onClick={handleDeleteContact}/>
            </Table.Cell>
          </Table.Row>
        )) }
      </Table.Body>
    </Table>
    <h3>Ajouter un contact</h3>
    <div id="contact-add">
      <div>
        <label htmlFor="input-name">Nom</label><br></br>
        <Input name="input-name" placeholder="Nom" value=""/>
      </div>
      <div>
      <label htmlFor="input-email">Adresse mail</label><br></br>
        <Input name="input-email" placeholder="Adresse mail" value=""/>
      </div>
      <Icon name="plus" size="big" onClick={handleDeleteContact} />
    </div>
  </div>
)};

/**
 * Export
 */
export default ParentsSpaceContacts;

