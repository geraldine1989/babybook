
import uuidv4 from 'uuid/v4';

/**
 * Initial State
 */
const initialState = {
  items: [],
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
/* eslint-disable no-case-declarations */
const reducer = (state = initialState, action = {}) => {
  const { items } = state;

  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        input: action.input,
      };

    case ADD_ITEM:

      const newItemObject = {
        id: uuidv4(),
        text: action.text,
      };

      const newItems = [...items, newItemObject];
      return {
        ...state,
        items: newItems,
        input: '',
      };

    case REMOVE_ITEM:

      const deletedItems = items.filter(item => item.id !== action.id);
      return {
        ...state,
        items: deletedItems,
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const addItem = text => ({
  type: ADD_ITEM,
  text,
});

export const inputChange = text => ({
  type: INPUT_CHANGE,
  input: text,
});

export const removeItem = id => ({
  type: REMOVE_ITEM,
  id,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
