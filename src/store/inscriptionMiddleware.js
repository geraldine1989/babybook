import axios from 'axios';
var hash = require('hash.js');
var validator = require("email-validator");

function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return JSON.stringify(obj) === JSON.stringify({});
}

import { HANDLE_INSCRIPTION, HANDLE_GET_EMAILS, inscriptionResponse } from './reducers/inscription-reducer';

const inscriptionMiddleware = store => next => (action) => {
  switch (action.type) {
    case HANDLE_GET_EMAILS:
      axios.get('http://92.243.19.193:3000/getParents')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
      break;
    case HANDLE_INSCRIPTION:
      const state = store.getState().inscriptionReducer;
      const { inputEmail, inputPassword, inputConfirmPassword, inputAccessCode, inputConfirmAccessCode } = state;
      var emailValid = validator.validate(inputEmail);
      var errors = {};
      if (!emailValid) {
        errors = {
          ...errors,
          errorEmail: 'Veuillez saisir un email valide.',
        }
      }
      if (inputPassword.length < 8) {
        errors = {
          ...errors,
          errorPassword: 'Le mot de passe doit comporter au moins 8 caractères.',
        }
      }
      if (inputConfirmPassword !== inputPassword) {
        errors = {
          ...errors,
          errorConfirmPassword: 'Vos mots de passe ne correspondent pas.',
        }
      }
      if ((inputAccessCode.length < 8) || (inputAccessCode === inputPassword)) {
        errors = {
          ...errors,
          errorAccessCode: 'Le code d\'accès doit comporter au moins 8 caractères et être différent de votre mot de passe',
        }
      }
      if (inputConfirmAccessCode !== inputAccessCode) {
        errors = {
          ...errors,
          errorConfirmAccessCode: 'Vos codes d\'accès ne correspondent pas.',
        }
      }

      if (!isEmpty(errors)) {
        action.err = errors;
        next(action);
      } else {
        const hashPassword = hash.sha256().update(inputPassword).digest('hex');
        const hashAccessCode = hash.sha256().update(inputAccessCode).digest('hex');
        
        const datas = {
          email: inputEmail,
          password: hashPassword,
          accessCode: hashAccessCode,
          parent: true,
        }
        axios.post('http://92.243.19.193:3000/inscription', datas)
        .then((response) => {
          store.dispatch(inscriptionResponse(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
        next(action);
      }

      default:
      next(action);
  }
};

export default inscriptionMiddleware;  

