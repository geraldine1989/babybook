import axios from 'axios';
var hash = require('hash.js')

import { HANDLE_INSCRIPTION, HANDLE_GET_EMAILS } from './reducers/inscription-reducer';

const inscriptionMiddleware = store => next => (action) => {
  // Je veux vérifier si l'action que je reçois m'intéresse
  switch (action.type) {
    case HANDLE_GET_EMAILS:
      axios.get('http://localhost:3000/getEmails')
      .then((response) => {
        console.log('inscriptionMiddleware HANDLE_GET_EMAILS : '+response);
      })
      .catch((error) => {
        console.log(error);
      });
      break;
    case HANDLE_INSCRIPTION:
      const state = store.getState().inscriptionReducer;
      const { inputEmail, inputPassword, inputAccessCode } = state;
      const hashPassword = hash.sha256().update(inputPassword).digest('hex');
      
      const datas = {
          email: inputEmail,
          password: hashPassword,
          accessCode: inputAccessCode,
        }
      axios.post('http://localhost:3000/inscription', datas)
      .then((response) => {
        console.log('inscriptionMiddleware HANDLE_INSCRIPTION : '+response);
      })
      .catch((error) => {
        console.log(error);
      });
      break;

    default:
      next(action);
  }
};

export default inscriptionMiddleware;  

