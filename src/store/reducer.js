
/**
 * Initial State
 */
const initialState = {
  tasks: '',
  input: '',
};

/**
 * Types
 */
const INPUT_CHANGE = 'INPUT_CHANGE_INFO';
const ADD_ITEM = 'ADD_ITEM_IN_INFO';
const REMOVE_ITEM = 'REMOVE_ITEM';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  const { tasks } = state;

  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        input: action.input,
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const doSomething = () => ({
  type: DO_SOMETHING,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
