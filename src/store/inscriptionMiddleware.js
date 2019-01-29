import axios from 'axios';

import { HANDLE_INSCRIPTION, HANDLE_GET_EMAILS } from './reducers/inscription-reducer';

const inscriptionMiddleware = store => next => (action) => {
  // Je veux vérifier si l'action que je reçois m'intéresse
  switch (action.type) {
    case HANDLE_GET_EMAILS:
      console.log('HANDLE_INSCRIPTION middleware');
      axios.get('http://localhost:3000/getEmails')
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });


    default:
      next(action);
  }
};

export default inscriptionMiddleware;  

