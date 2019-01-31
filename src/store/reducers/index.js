import { combineReducers } from 'redux';
import inscriptionReducer from './inscription-reducer';
import loginParentsReducer from './login-parents-reducer';
import ParentsSpaceContactsReducer from './ParentsSpaceContactsReducer';

const rootReducer = combineReducers({
  inscriptionReducer,
  loginParentsReducer,
  ParentsSpaceContactsReducer,

});

export default rootReducer;
