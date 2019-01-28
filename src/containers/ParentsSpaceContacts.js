/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import ParentsSpaceContacts from 'src/components/ParentsSpace/ParentsSpaceContacts';

// Action Creators
import { inputNameChange, inputEmailChange, addContact } from 'src/store/reducer';

const mapStatetoProps = state => ({
  inputName: state.inputName,
  inputEmail: state.inputEmail,
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
});

const ParentsSpaceContactsContainer = connect(mapStatetoProps, mapDispatchToProps)(ParentsSpaceContacts);

export default ParentsSpaceContactsContainer;
