import axios from 'axios';
var hash = require('hash.js')

import { HANDLE_LOGIN, loginResponseNanny } from './reducers/login-nanny-reducer';

const loginNannyMiddleware = store => next => (action) => {
  // Je veux vérifier si l'action que je reçois m'intéresse
  switch (action.type) {
    case HANDLE_LOGIN:
    console.log('HANDLE_LOGIN middleware');
    const state = store.getState().loginNannyReducer;
    const { inputEmailNanny, inputPasswordNanny } = state;
    const hashPassword = hash.sha256().update(inputPasswordNanny).digest('hex');
    const formDatas = {
      email: inputEmailNanny,
      password: hashPassword,
    }
    // console.log(formDatas);

      axios.post('http://localhost:3000/loginNanny', formDatas)
        .then((response) => {
          console.log(response);
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

