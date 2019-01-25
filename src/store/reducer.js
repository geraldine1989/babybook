/**
 * Initial State
 */
const initialState = {
  itemList: [],
  input: '',
};

/**
 * Types
 */
const INPUT_CHANGE_TITLE_TASK = 'INPUT_CHANGE_TITLE_TASK';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INPUT_CHANGE_TITLE_TASK:
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
export const handleChangeTitleDay = text => ({
  type: INPUT_CHANGE_TITLE_TASK,
  input: text,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
