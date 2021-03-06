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
  note: "Pas d'indication particulière pour cette journée",
  inputNoteNounou: '',
  nannyNote: 'Pas de note de la part de la nounou',
  inputatNannyTask: '',
};

/**
 * Types
 */
const INPUT_CHANGE_TITLE_TASK = 'INPUT_CHANGE_TITLE_TASK';
const INPUT_CHANGE_NOTE_TASK = 'INPUT_CHANGE_NOTE_TASK';
const INPUT_CHANGE_HOUR_TASK = 'INPUT_CHANGE_HOUR_TASK';
export const ADD_TASK = 'ADD_TASK ';
const INPUT_NOTE = 'INPUT_NOTE';
export const ADD_NOTE = 'ADD_NOTE';
const CHANGE_INPUT_NOTE_NANY_DAY = 'CHANGE_INPUT_NOTE_NANY_DAY';
export const ADD_NOTE_DAY_NANNY = 'ADD_NOTE_DAY_NANNY';
const CHANGE_INPUT_NOTE_NANY_TASK = 'CHANGE_INPUT_NOTE_NANY_TASK';
export const ADD_NOTE_TASK_NANNY = 'ADD_NOTE_TASK_NANNY';
export const REMOVE_TASK_DAY = 'REMOVE_TASK_DAY';
export const TASK_CHECK = 'TASK_CHECK';
export const REGENERE_LIST = 'REGENERE_LIST';

/** pour le server */
// Ajout d'une tâche
export const ADD_TASKS_RESPONSE = 'ADD_TASKS_RESPONSE';
export const HANDLE_GET_TASKS = 'HANDLE_GET_TASKS';
// ajout d'une note
export const ADD_NOTE_RESPONSE = 'ADD_NOTE_RESPONSE';
export const HANDLE_GET_PARENTS_NOTE = 'HANDLE_GET_PARENTS_NOTE';
// ajout d'une note de la nanny
export const ADD_NOTE_NANNY_RESPONSE = 'ADD_NOTE_NANNY_RESPONSE';
export const HANDLE_GET_NANNY_DAY_NOTE = 'HANDLE_GET_NANNY_DAY_NOTE';
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
        selectInput: '',
        note: '',
        tododone: 'list-button',
      };

      const newTasks = [...itemList, newTaskObject];

      return {
        ...state,
        itemList: newTasks,
        inputTitle: '',
        inputHourTask: '',
        inputNoteTask: '',
      };

    case HANDLE_GET_TASKS:
      return {
        ...state,
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
    
      case HANDLE_GET_PARENTS_NOTE:
      return {
        ...state,
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
    
    case HANDLE_GET_NANNY_DAY_NOTE:
      return {
        ...state,
      };

    // note task nanny
    case CHANGE_INPUT_NOTE_NANY_TASK:
     
      const tableautask = itemList.filter(list => list.id === action.id);
      const modifiedTask = { ...tableautask[0] };
      
      modifiedTask.selctedInput = action.text;
      const newTasksList = itemList.map((list) => {
        if (list.id === action.id) {
          return modifiedTask;
        }
        return list;
      });
      return {
        ...state,
        itemList: newTasksList,
      };

    case ADD_NOTE_TASK_NANNY:
      const tableauListItem = itemList.filter(list => list.id === action.id);
      const selectList = { ...tableauListItem[0] };
      // selectList.note = itemList.selctedInput;
      selectList.note = action.text;
      selectList.selctedInput = '';
      console.log('mon action : ', action);
      console.log('note selectionnee : ', selectList);
      console.log('liste recuperee de selectInput', itemList);
      const newList = itemList.map((task) => {
        if (task.id === action.id) {
          return selectList;
        }
        return task;
      });
      return {
        ...state,
        itemList: newList,
      };
    

     /** Suppression d'une tache */
     case REMOVE_TASK_DAY:
     const detetedTask = state.itemList.filter(list => list.id !== action.id);
      return {
        ...state,
        itemList: detetedTask,
      };

    /** Changer la classe du bouton si checké */

    case TASK_CHECK:
      const newTaskListCheched = itemList.map((task) => {
        if (task.id === action.id) {
          if (task.tododone === 'list-button') {
            return {
              ...task,
              tododone: 'todo-done',
            };
          } else {
              return {
                ...task,
                tododone: 'list-button',
              };
            }      
        }
        return task;
      });
      return {
        ...state,
        itemList: newTaskListCheched,
      };
      
      /** Régénérer une liste */
    case REGENERE_LIST:
      const regeretedList = state.itemList.map((list) => {
        return {
          ...list,
          selectInput: '',
          note: '',
          tododone: 'list-button',
        };

      });

      return {
        ...state,
        note: "Pas d'indications particulières pour cette journée",
        nannyNote: 'Pas de notes de la part de la nounou',
        itemList: regeretedList,
      };
     
      /** Envoi pour la requete */
    case ADD_TASKS_RESPONSE:
      return {
        ...state,
        itemList: action.datas,
      };
    case ADD_NOTE_RESPONSE:
      return {
        ...state,
        note: action.datas,
      };
    case ADD_NOTE_NANNY_RESPONSE:
      return {
        ...state,
        nannyNote: action.datas,
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

/** Note input nanny task */
export const handleChangeInputTaskNounou = (text, id) => ({
  type: CHANGE_INPUT_NOTE_NANY_TASK,
  text,
  id,

});

/** Note submit nanny task */
export const addNoteTaskSubmitNounou = (text, id) => ({
  type: ADD_NOTE_TASK_NANNY,
  text,
  id,
});

export const removeTaskDay = id => ({
  type: REMOVE_TASK_DAY,
  id,
});

export const taskCheck = id => ({
  type: TASK_CHECK,
  id,
});

/** Régénération de la liste  */
export const regenerbutton = () => ({
  type: REGENERE_LIST,
});
/** ------------------Envoi pour la requete-------------------------- */
export const addTaskResponse = datas => ({
  type: ADD_TASKS_RESPONSE,
  datas,
});

export const handleGetTasks = () => ({
  type: HANDLE_GET_TASKS,
});

export const addNoteResponse = datas => ({
  type: ADD_NOTE_RESPONSE,
  datas,
});

export const handleGetParentsNote = () => ({
  type: HANDLE_GET_PARENTS_NOTE,
});

export const addNoteNannyResponse = datas => ({
  type: ADD_NOTE_NANNY_RESPONSE,
  datas,
});

export const handleGetNannyDayNote = () => ({
  type: HANDLE_GET_NANNY_DAY_NOTE,
});


/**
 * Selectors
 */

/**
 * Export
 */
export default myday;
