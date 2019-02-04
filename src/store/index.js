/*
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';
import loginParentsMiddleware from './loginParentsMiddleware';
import inscriptionMiddleware from './inscriptionMiddleware';
import parentsSpaceContactsMiddleware from './parentsSpaceContactsMiddleware';

/*
* Local import
*/
// Reducer
import rootReducer from 'src/store/reducers';

/*
 * Code
 */
const appliedMiddlewares = applyMiddleware(inscriptionMiddleware, loginParentsMiddleware, parentsSpaceContactsMiddleware);

const devTools = [
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
];

const enhancers = compose(appliedMiddlewares, ...devTools);

// createStore
const store = createStore(rootReducer, enhancers);

/*
 * Export
 */
export default store;
