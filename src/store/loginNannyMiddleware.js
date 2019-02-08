import axios from 'axios';
var hash = require('hash.js')

import { HANDLE_LOGIN, loginResponseNanny } from './reducers/login-nanny-reducer';

const loginNannyMiddleware = store => next => (action) => {
  switch (action.type) {
    case HANDLE_LOGIN:
      const state = store.getState().loginNannyReducer;
      const { inputEmailNanny, inputPasswordNanny } = state;
      const hashPassword = hash.sha256().update(inputPasswordNanny).digest('hex');
      const formDatas = {
        email: inputEmailNanny,
        password: hashPassword,
      }

      axios.post('http://localhost:3000/loginNanny', formDatas)
        .then((response) => {
          store.dispatch(loginResponseNanny(response.data));
        })
        .catch((error) => {
          console.log(error);
        });

    default:
      next(action);
  }
};

export default loginNannyMiddleware;  

