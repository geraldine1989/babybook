import axios from 'axios';

var hash = require('hash.js')

import { HANDLE_LOGIN, loginResponse } from './reducers/login-parents-reducer';

const loginParentsMiddleware = store => next => (action) => {
  switch (action.type) {
    case HANDLE_LOGIN:
      const state = store.getState().loginParentsReducer;
      const { inputEmail, inputPassword } = state;
      const hashPassword = hash.sha256().update(inputPassword).digest('hex');
      const formDatas = {
        email: inputEmail,
        password: hashPassword,
      }

      axios.post('http://92.243.19.193:3000/loginParents', formDatas)
        .then((response) => {
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

