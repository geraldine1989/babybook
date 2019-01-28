import uuidv4 from 'uuid/v4';


/**
 * Initial State
 */
const initialState = {
  itemList: [],
  inputTitle: '',
  inputNoteTask: '',
  inputHourTask: '00:00',
};

/**
 * Types
 */
const INPUT_CHANGE_TITLE_TASK = 'INPUT_CHANGE_TITLE_TASK';
const INPUT_CHANGE_NOTE_TASK = 'INPUT_CHANGE_NOTE_TASK';
const INPUT_CHANGE_HOUR_TASK = 'INPUT_CHANGE_HOUR_TASK';
const ADD_TASK = 'ADD_TASK ';

/**
 * Traitements
 */

/**
 * Reducer
 */
/* eslint-disable no-case-declarations */
const reducer = (state = initialState, action = {}) => {
  const { itemList } = state;
  const { inputTitle } = state;
  const { inputNoteTask } = state;
  const { inputHourTask } = state;
  switch (action.type) {
    // CHANGE INPUT from my day in parentsspace Form
    case INPUT_CHANGE_TITLE_TASK:
      return {
        ...state,
        inputTitle: action.inputTitle,
      };

    case INPUT_CHANGE_NOTE_TASK:
      return {
        ...state,
        inputNoteTask: action.inputNoteTask,
      };
    case INPUT_CHANGE_HOUR_TASK:
      return {
        ...state,
        inputHourTask: action.inputHourTask,
      };
    
    // CHANGE INPUT from my day in parentsspace Form
    case ADD_TASK:
      const newTaskObject = {
        id: uuidv4(),
        name: inputTitle,
        hour: inputHourTask,
        indic: inputNoteTask,
      };

      const newTasks = [...itemList, newTaskObject];

      return {
        ...state,
        itemList: newTasks,
        inputTitle: '',
        inputHourTask: '',
        inputNoteTask: '',
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
  inputTitle: text,
});

export const handleChangeNoteTask = text => ({
  type: INPUT_CHANGE_NOTE_TASK,
  inputNoteTask: text,
});

export const handleChangeHourTask = hour => ({
  type: INPUT_CHANGE_HOUR_TASK,
  inputHourTask: hour,
});

export const addTask = itemList => ({
  type: ADD_TASK,
  itemList,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
