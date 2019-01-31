import uuidv4 from 'uuid/v4';


/**
 * Initial State
 */
const initialState = {
  itemList: [],
  inputTitle: '',
  inputNoteTask: '',
  inputHourTask: '00:00',
  inputNote: '',
  note: "Pas d'indications particulières pour cette journée",
  inputNoteNounou: '',
  nannyNote: 'Pas de notes de la part de la nounou',
  inputNoteNounouTask: '',
};

/**
 * Types
 */
const INPUT_CHANGE_TITLE_TASK = 'INPUT_CHANGE_TITLE_TASK';
const INPUT_CHANGE_NOTE_TASK = 'INPUT_CHANGE_NOTE_TASK';
const INPUT_CHANGE_HOUR_TASK = 'INPUT_CHANGE_HOUR_TASK';
const ADD_TASK = 'ADD_TASK ';
const INPUT_NOTE = 'INPUT_NOTE';
const ADD_NOTE = 'ADD_NOTE';
const CHANGE_INPUT_NOTE_NANY_DAY = 'CHANGE_INPUT_NOTE_NANY_DAY';
const ADD_NOTE_DAY_NANNY = 'ADD_NOTE_DAY_NANNY';
const CHANGE_INPUT_NOTE_NANY_TASK = 'CHANGE_INPUT_NOTE_NANY_TASK';
const ADD_NOTE_TASK_NANNY = 'ADD_NOTE_TASK_NANNY';


/**
 * Traitements
 */

/**
 * Reducer
 */
/* eslint-disable no-case-declarations */
const myday = (state = initialState, action = {}) => {
  const { itemList } = state;
  const { inputTitle } = state;
  const { inputNoteTask } = state;
  const { inputHourTask } = state;
  const { inputNote } = state;
  const { inputNoteNounou } = state;
  const { inputNoteNounouTask } = state;
  
  
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
        note: inputNoteNounouTask,
      };

      const newTasks = [...itemList, newTaskObject];

      return {
        ...state,
        itemList: newTasks,
        inputTitle: '',
        inputHourTask: '',
        inputNoteTask: '',
      };
    
    // change input note
    case INPUT_NOTE:
      return {
        ...state,
        inputNote: action.inputNote,
      };

    case ADD_NOTE:
      return {
        ...state,
        note: inputNote,
        inputNote: '',
      };

    // note day nanny

    case CHANGE_INPUT_NOTE_NANY_DAY:
      return {
        ...state,
        inputNoteNounou: action.inputNoteNounou,
      };

    case ADD_NOTE_DAY_NANNY:
      return {
        ...state,
        nannyNote: inputNoteNounou,
        inputNoteNounou: '',
      };
    
    // note task nanny
    case CHANGE_INPUT_NOTE_NANY_TASK:
      return  {
        ...state,
        inputNoteNounouTask: action.inputNoteNounouTask.name,
      };
      /**    case ADD_NOTE_TASK_NANNY:
      const tableauListItem = itemList.filter(list => list.id === action.id);
      const selectList = { ...tableauListItem[0] };
      selectList.note = inputNoteNounouTask;
      let newList = itemList.map((task) => {
        if (task.id === action.id) {
          return selectList;
        }
        return task;
      });
      return {
        ...state,
        itemList: newList,
      };
     */

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

/** Note pour la journee */
export const handleAddNoteDay = text => ({
  type: INPUT_NOTE,
  inputNote: text,
});

export const addNoteDayFromParents = note => ({
  type: ADD_NOTE,
  note,
});

/** Note nanny day */
export const handleAddNoteNoteNounou = text => ({
  type: CHANGE_INPUT_NOTE_NANY_DAY,
  inputNoteNounou: text,
});

export const AddNoteDaySubmitNounou = note => ({
  type: ADD_NOTE_DAY_NANNY,
  note,
});

/** Note nanny task */
export const handleAddNoteNoteTaskNounou = modif => ({
  type: CHANGE_INPUT_NOTE_NANY_TASK,
  inputNoteNounouTask: modif,
});

export const AddNoteNoteTaskNounou = (note, id) => ({
  type: ADD_NOTE_TASK_NANNY,
  note,
  id,
});
/**
 * Selectors
 */

/**
 * Export
 */
export default myday;