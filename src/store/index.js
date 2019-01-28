/*
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';
import ajaxMiddleware from './ajaxMiddleware';

/*
* Local import
*/
// Reducer
import rootReducer from 'src/store/reducers';

/*
 * Code
 */
const appliedMiddlewares = applyMiddleware(ajaxMiddleware);

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
