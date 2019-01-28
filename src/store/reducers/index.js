import { combineReducers } from 'redux';
import inscriptionReducer from './inscription-reducer';
import loginReducer from './login-reducer';

const rootReducer = combineReducers({
  inscriptionReducer: inscriptionReducer,
  loginReducer: loginReducer,
});

export default rootReducer;
