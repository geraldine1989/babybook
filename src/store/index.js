/*
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';
import loginParentsMiddleware from './loginParentsMiddleware';
import inscriptionMiddleware from './inscriptionMiddleware';
<<<<<<< HEAD
import parentsSpaceInfoMiddleware from './parentsSpaceInfoMiddleware';
=======
import parentsSpaceContactsMiddleware from './parentsSpaceContactsMiddleware';

>>>>>>> 792436bbc55a60bb5bad9c9edf452dad443e8052
/*
* Local import
*/
// Reducer
import rootReducer from 'src/store/reducers';

/*
 * Code
 */
<<<<<<< HEAD
const appliedMiddlewares = applyMiddleware(inscriptionMiddleware, loginParentsMiddleware, parentsSpaceInfoMiddleware);
=======
const appliedMiddlewares = applyMiddleware(inscriptionMiddleware, loginParentsMiddleware, parentsSpaceContactsMiddleware);
>>>>>>> 792436bbc55a60bb5bad9c9edf452dad443e8052

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
