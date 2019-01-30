/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import ParentsSpaceContacts from 'src/components/ParentsSpace/ParentsSpaceContacts';

// Action Creators
import { inputNameChange, inputEmailChange, addContact, removeContact } from 'src/store/ParentsSpaceContactsReducer';

const mapStatetoProps = state => ({
  inputName: state.inputName,
  inputEmail: state.inputEmail,
  contacts: state.contacts,
});

const mapDispatchToProps = dispatch => ({
  addContact: (textName, textEmail) => {
    dispatch(addContact(textName, textEmail));
  },

  handleChangeName: (textName) => {
    dispatch(inputNameChange(textName));
  },

  handleChangeEmail: (textEmail) => {
    dispatch(inputEmailChange(textEmail));
  },
  
  removeContact: (id) => {
    console.log('je suis dans le dispatcher, voici l id :' + id);
    dispatch(removeContact(id));
  },

  
});

const ParentsSpaceContactsContainer = connect(mapStatetoProps, mapDispatchToProps)(ParentsSpaceContacts);

export default ParentsSpaceContactsContainer;
