/*
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';
import ajaxMiddleware from './ajaxMiddleware';

/*
 * Local import
 */
// Reducer
import reducer from 'src/store/reducer';

/*
 * Code
 */
const devTools = [
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
];


// createStore
const store = createStore(reducer, ...devTools);

/*
 * Export
 */
export default store;
