import { combineReducers } from 'redux';
import inscriptionReducer from './inscription-reducer';
import loginParentsReducer from './login-parents-reducer';
import ParentsSpaceContactsReducer from './ParentsSpaceContactsReducer';
import myday from './myday';
import ParentsSpaceInfoReducer from './ParentsSpaceInfoReducer';

const rootReducer = combineReducers({
  inscriptionReducer,
  loginParentsReducer,
  ParentsSpaceContactsReducer,
  myday,
  ParentsSpaceInfoReducer,

});

export default rootReducer;
