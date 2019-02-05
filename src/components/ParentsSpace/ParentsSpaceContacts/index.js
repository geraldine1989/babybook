/**
 * Npm import
 */
import React from 'react';
import { Form, Input, Icon, Button, Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import './style.scss';
import ParentsNav from 'src/containers/ParentsNav';

/**
 * Code
 */
const ParentsSpaceContacts = ({ addContact, contacts, inputName, inputEmail, handleChangeName, handleChangeEmail, removeContact }) => {

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

  const contactsList = [
    ...contacts,
  ];

  const handleDeleteContact = id => () => {
    removeContact(id);
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
            { contactsList.map(contactList => (
              <Table.Row key={contactList.id}>
                <Table.Cell >
                  { contactList.name }
                </Table.Cell>
                <Table.Cell >
                  { contactList.email }
                </Table.Cell>
                <Table.Cell className="delete-contact">
                  <Button icon onClick={handleDeleteContact(contactList.id)}>
                    <Icon name="delete" />
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
            type="email"
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
  addContact: PropTypes.func.isRequired,
  inputName: PropTypes.string,
  inputEmail: PropTypes.string,
  handleChangeName: PropTypes.func.isRequired,
  handleChangeEmail: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  removeContact: PropTypes.func.isRequired,
//   handleChangeNannyPassword: PropsTypes.func.isRequired,
};

ParentsSpaceContacts.defaultProps = {
  inputName: '',
  inputEmail: '',
};


/**
 * Export
 */
export default ParentsSpaceContacts;
