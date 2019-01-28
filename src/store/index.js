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
const devTools = [
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
];


// createStore
const store = createStore(rootReducer, ...devTools);

/*
 * Export
 */
export default store;
