import axios from 'axios';
var hash = require('hash.js')
import { HANDLE_INSCRIPTION, HANDLE_GET_EMAILS, inscriptionResponse } from './reducers/inscription-reducer';

const inscriptionMiddleware = store => next => (action) => {
  switch (action.type) {
    case HANDLE_GET_EMAILS:
      var emails = [];
      axios.get('http://localhost:3000/getEmails')
      .then((response) => {
        // emails = response.data[0];
        // emails = emails.map(email => email.email);
        console.log(emails);
      })
      .catch((error) => {
        console.log(error);
      });
      break;
    case HANDLE_INSCRIPTION:
      // console.log(emails);
      const state = store.getState().inscriptionReducer;
      const { inputEmail, inputPassword, inputAccessCode, errorsForm } = state;
      const hashPassword = hash.sha256().update(inputPassword).digest('hex');
      const hashAccessCode = hash.sha256().update(inputAccessCode).digest('hex');
      
      const datas = {
          email: inputEmail,
          password: hashPassword,
          accessCode: hashAccessCode,
        }
      axios.post('http://localhost:3000/inscription', datas)
      .then((response) => {
        store.dispatch(inscriptionResponse(response.data));
        // if (response.data === 'notOk') {
        //   errorsForm.errorEmail = 'Cette adresse mail est déjà utilisée.';
        //   action.err = errorsForm.errorEmail;
        // }
        // console.log(response);
        // return {
        //   ...state,
        //   errorsForm: errorsForm.errorEmail,
        // }
      })
      .catch((error) => {
        console.log(error);
      });
      next(action);

    default:
      next(action);
  }
};

export default inscriptionMiddleware;  

