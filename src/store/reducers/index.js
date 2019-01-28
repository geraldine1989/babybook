import { combineReducers } from 'redux';
import inscriptionReducer from './inscription-reducer';

const rootReducer = combineReducers({
  inscriptionReducer: inscriptionReducer,
});

export default rootReducer;
