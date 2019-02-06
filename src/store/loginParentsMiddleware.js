import axios from 'axios';
var hash = require('hash.js')

import { HANDLE_LOGIN, loginResponse } from './reducers/login-parents-reducer';

const loginParentsMiddleware = store => next => (action) => {
  // Je veux vérifier si l'action que je reçois m'intéresse
  switch (action.type) {
    case HANDLE_LOGIN:
    console.log('HANDLE_LOGIN middleware');
    const state = store.getState().loginParentsReducer;
    const { inputEmail, inputPassword } = state;
    const hashPassword = hash.sha256().update(inputPassword).digest('hex');
    const formDatas = {
      email: inputEmail,
      password: hashPassword,
    }
    // console.log(formDatas);

      axios.post('http://95.142.175.219:3000/loginParents', formDatas)
        .then((response) => {
          console.log(response);
          store.dispatch(loginResponse(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    

    default:
      next(action);
  }
};

export default loginParentsMiddleware;  

