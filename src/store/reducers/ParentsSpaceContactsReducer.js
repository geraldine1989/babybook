import uuidv4 from 'uuid/v4';

/**
 * Initial State
 */
const initialState = {
  contacts: [],
  inputName: '',
  inputEmail: '',
};

/**
 * Types
 */
const INPUT_NAME_CHANGE = 'INPUT_NAME_CHANGE';
const INPUT_EMAIL_CHANGE = 'INPUT_EMAIL_CHANGE';
export const ADD_CONTACT = 'ADD_CONTACT';
export const REMOVE_CONTACT = 'REMOVE_CONTACT';
export const CONTACTS_RESPONSE = 'CONTACT_RESPONSE';
/**
 * Traitements
 */

/**
 * Reducer
 */
const ParentsSpaceContactsReducer = (state = initialState, action = {}) => {
  const { contacts } = state;
  const { inputName } = state;
  const { inputEmail } = state;

  switch (action.type) {
    case INPUT_NAME_CHANGE:
      return {
        ...state,
        inputName: action.inputName,
      };

    case INPUT_EMAIL_CHANGE:
      return {
        ...state,
        inputEmail: action.inputEmail,
      };
    /* eslint-disable no-case-declarations */
    case ADD_CONTACT:
      const newContactObject = {
        id: uuidv4(),
        textName: inputName,
        textEmail: inputEmail,
      };

      const newContacts = [...contacts, newContactObject];
      

      return {
        ...state,
        contacts: newContacts,
        inputName: '',
        inputEmail: '',
      };

    case CONTACTS_RESPONSE:
      console.log(action.datas);
      return {
        ...state,
      };
      
    case REMOVE_CONTACT:
      const deletedContacts = state.contacts.filter(contact => contact.id !== action.id);
      console.log(action);
      return {
        contacts: deletedContacts,
      };


    default:
      return state;
  }
};


/**
 * Action Creators
 */
export const inputNameChange = textName => ({
  type: INPUT_NAME_CHANGE,
  inputName: textName,
});

export const inputEmailChange = textEmail => ({
  type: INPUT_EMAIL_CHANGE,
  inputEmail: textEmail,
});

export const addContact = (textName, textEmail) => ({
  type: ADD_CONTACT,
  textName,
  textEmail,
});

export const removeContact = id => ({
  type: REMOVE_CONTACT,
  id,
});

export const contactsResponse = datas => ({
  type: CONTACTS_RESPONSE,
  datas,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default ParentsSpaceContactsReducer;
