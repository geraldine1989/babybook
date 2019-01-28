import uuidv4 from 'uuid/v4';

/**
 * Initial State
 */
const initialState = {
  contactsList: [],
  inputName: '',
  inputEmail: '',
};

/**
 * Types
 */
const INPUT_NAME_CHANGE = 'INPUT_NAME_CHANGE';
const INPUT_EMAIL_CHANGE = 'INPUT_EMAIL_CHANGE';
const ADD_CONTACT = 'ADD_CONTACT';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  const { contactsList } = state;
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
      const newContactObject = { id: uuidv4(), textName: inputName, textEmail: inputEmail };

      const newContacts = [...contactsList, newContactObject];

      return {
        ...state,
        contactsList: newContacts,
        inputName: '',
        inputEmail: '',
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


/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
