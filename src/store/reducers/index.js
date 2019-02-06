import { combineReducers } from 'redux';
import inscriptionReducer from './inscription-reducer';
import loginParentsReducer from './login-parents-reducer';
import loginNannyReducer from './login-nanny-reducer';
import ParentsSpaceContactsReducer from './ParentsSpaceContactsReducer';
import myday from './myday';
import ParentsSpaceInfoReducer from './ParentsSpaceInfoReducer';

const rootReducer = combineReducers({
  inscriptionReducer,
  loginParentsReducer,
  loginNannyReducer,
  ParentsSpaceContactsReducer,
  myday,
  ParentsSpaceInfoReducer,

});

export default rootReducer;
