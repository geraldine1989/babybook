import axios from 'axios';

import { HANDLE_LOGIN } from './reducers/login-reducer';

const ajaxMiddleware = store => next => (action) => {
  // Je veux vérifier si l'action que je reçois m'intéresse
  switch (action.type) {
    case HANDLE_LOGIN:
      console.log(action);
      console.log('ajax');
      // axios.post('http://localhost:3000/inscription', action.modif)
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });

      break;

    default:
      next(action);
  }
};

export default ajaxMiddleware;  

