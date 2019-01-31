import { combineReducers } from 'redux';
import inscriptionReducer from './inscription-reducer';
import loginParentsReducer from './login-parents-reducer';
import ParentsSpaceContactsReducer from './ParentsSpaceContactsReducer';
import myday from './myday';

const rootReducer = combineReducers({
  inscriptionReducer,
  loginParentsReducer,
  ParentsSpaceContactsReducer,
  myday,

});

export default rootReducer;
