import axios from 'axios';

import { ADD_CONTACT, contactsResponse } from './reducers/ParentsSpaceContactsReducer';

const parentsSpaceContactsMiddleware = store => next => (action) => {
  switch (action.type) {
    case ADD_CONTACT:
    console.log('ADD_CONTACT middleware');
      const state = store.getState().ParentsSpaceContactsReducer;
      const { inputName, inputEmail } = state;
      const formContacts = {
        name: inputName,
        email: inputEmail,
      }
      console.log(formContacts);

      axios.post('http://localhost:3000/espace-parents/contacts', formContacts)
        .then((response) => {
          store.dispatch(contactsResponse(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    default:
      next(action);
  }
};

export default parentsSpaceContactsMiddleware;
