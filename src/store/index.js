/*
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';
import loginParentsMiddleware from './loginParentsMiddleware';
import loginNannyMiddleware from './loginNannyMiddleware';
import inscriptionMiddleware from './inscriptionMiddleware';
import parentsSpaceInfoMiddleware from './parentsSpaceInfoMiddleware';
import mydayMiddleware from './mydayMiddleware';
import parentsSpaceContactsMiddleware from './parentsSpaceContactsMiddleware';

/*
* Local import
*/
// Reducer
import rootReducer from 'src/store/reducers';

/*
 * Code
 */

const appliedMiddlewares = applyMiddleware(
  inscriptionMiddleware, 
  loginParentsMiddleware, 
  loginNannyMiddleware, 
  mydayMiddleware, 
  parentsSpaceContactsMiddleware, 
  parentsSpaceInfoMiddleware,
);


const devTools = [
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
];

const enhancers = compose(appliedMiddlewares, ...devTools);

// createStore
const store = createStore(rootReducer, enhancers);

/*
 * Export
 */
export default store;
