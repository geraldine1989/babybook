import axios from 'axios';

import { HANDLE_INSCRIPTION } from './reducers/inscription-reducer';

const inscriptionMiddleware = store => next => (action) => {
  // Je veux vérifier si l'action que je reçois m'intéresse
  switch (action.type) {
    case HANDLE_INSCRIPTION:
      console.log(action.changes);
      console.log('HANDLE_INSCRIPTION middleware');
      // axios.post('http://localhost:3000/inscription', action.modif)
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });


    default:
      next(action);
  }
};

export default inscriptionMiddleware;  

