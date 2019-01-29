import { combineReducers } from 'redux';
import inscriptionReducer from './inscription-reducer';
import loginParentsReducer from './login-parents-reducer';

const rootReducer = combineReducers({
  inscriptionReducer: inscriptionReducer,
  loginParentsReducer: loginParentsReducer,
});

export default rootReducer;
