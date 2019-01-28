/**
 * Npm import
 */
import React from 'react';
import { Form, Input, Icon, Button, Table } from 'semantic-ui-react';
import PropsTypes from 'prop-types';

/**
 * Local import
 */
import './style.scss';
import ParentsNav from 'src/components/ParentsSpace/ParentsNav';

/**
 * Code
 */
const ParentsSpaceContacts = ({ addContact, inputName, inputEmail, handleChangeName, handleChangeEmail, handleDeleteContact}) => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    addContact(inputName, inputEmail);
  };

  const handleChangeInputName = (event) => {
    const text = event.target.value;
    handleChangeName(text);
  };

  const handleChangeInputEmail = (event) => {
    const text = event.target.value;
    handleChangeEmail(text);
  };

  return (
    <div>
      <ParentsNav />
      <div id="contacts">
        {/* <Button content="Modifier le code d'accès" onClick={handleChangeNannyPassword} /> */}
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
        <Form
          id="contact-add"
          onSubmit={handleSubmit}
        >
          <Input
            type="text"
            name="input-name"
            onChange={handleChangeInputName}
            placeholder="Nom"
            value={inputName}
          />
          <Input
            type="text"
            name="input-email"
            onChange={handleChangeInputEmail}
            placeholder="Adresse mail"
            value={inputEmail}
          />
          <Button icon type="submit">
            <Icon name="add" />
          </Button>
        </Form>
      </div>
    </div>
  );
};

ParentsSpaceContacts.propTypes = {
  addContact: PropsTypes.func.isRequired,
  inputName: PropsTypes.string.isRequired,
  inputEmail: PropsTypes.string.isRequired,
  handleChangeName: PropsTypes.func.isRequired,
  handleChangeEmail: PropsTypes.func.isRequired,
//   handleDeleteContact: PropsTypes.func.isRequired,
//   handleChangeNannyPassword: PropsTypes.func.isRequired,
};

// ParentsSpaceContacts.defaultProps = {
//   inputName: '',
//   inputEmail: '',
// };


/**
 * Export
 */
export default ParentsSpaceContacts;
