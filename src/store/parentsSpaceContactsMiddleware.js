import axios from 'axios';
import uuidv4 from 'uuid/v4';

import { ADD_CONTACT, contactsResponse, HANDLE_GET_CONTACTS } from './reducers/ParentsSpaceContactsReducer';

const parentsSpaceContactsMiddleware = store => next => (action) => {
  switch (action.type) {

    case HANDLE_GET_CONTACTS:
    console.log('coucou HANDLE GET CONTACT Middleware');
      axios.get('http://localhost:3000/espace-parents/contacts')
        .then((response) => {
          store.dispatch(contactsResponse(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    case ADD_CONTACT:
    console.log('ADD_CONTACT middleware');
      const state = store.getState().ParentsSpaceContactsReducer;
      const { inputName, inputEmail } = state;
      const formContacts = {
        id: uuidv4(),
        name: inputName,
        email: inputEmail,
      }
      console.log(formContacts);

      axios.post('http://localhost:3000/espace-parents/contacts/add-contact', formContacts)
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
