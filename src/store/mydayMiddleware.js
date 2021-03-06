import axios from 'axios';
import uuidv4 from 'uuid/v4';
import { ADD_TASK, addTaskResponse, ADD_NOTE, ADD_NOTE_DAY_NANNY, HANDLE_GET_TASKS, addNoteResponse, addNoteNannyResponse, REMOVE_TASK_DAY, ADD_NOTE_TASK_NANNY, HANDLE_GET_PARENTS_NOTE, HANDLE_GET_NANNY_DAY_NOTE, TASK_CHECK, REGENERE_LIST } from './reducers/myday';

const mydayMiddleware = store => next => (action) => {
  const state = store.getState().myday;
      const { inputTitle, inputNoteTask, inputHourTask } = state;
      const { selctedInput } = state.itemList;
      const { inputNote } = state;
      const { inputNoteNounou } = state;
      const { itemList } = state;
  // Je veux vérifier si l'action que je reçois m'intéresse

  switch (action.type) {
    
    /** --------------------------Ajout d'une tache-------------------------- */

    case ADD_TASK:
    console.log('je suis dans le middleware');
      
      const formDatas = {
        
        name: inputTitle,
        hour: inputHourTask,
        indic: inputNoteTask,
        tododone:'list-button',
        note: '',
        id: uuidv4(),
      };
   
      axios.post('http://92.243.19.193:3000/espace-parents/add-task', formDatas)
      .then((response) => {
        store.dispatch(addTaskResponse(response.data));
        console.log('ajout task ADD TASK : '+ response);       
      })
      .catch((error) => {
        console.log(error);
      });
      next(action);
      break;

    /** Récupéation des taches */
    case HANDLE_GET_TASKS:
    console.log('coucou HANDLE GET TASK Middleware');
      axios.get('http://92.243.19.193:3000/espace-parents/journee-type')
        .then((response) => {
          store.dispatch(addTaskResponse(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    /** --------------------------Ajout d'une note des parents pour la journée-------------------------- */
    case ADD_NOTE:
    console.log('je suis dans le middleware');
      
      const formNoteDay = {      
        note: inputNote,
      };
        
      
      axios.post('http://92.243.19.193:3000/espace-parents/add-note-day-parents', formNoteDay)
      .then((response) => {
        store.dispatch(addNoteResponse(response.data));
        console.log('ajout task ADD note : '+ response);  
      })
      .catch((error) => {
        console.log(error);
      });
      next(action);
      break;

    case HANDLE_GET_PARENTS_NOTE:
      axios.get('http://92.243.19.193:3000/espace-parents/parents-note')
        .then((response) => {
          store.dispatch(addNoteResponse(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;
    

    /** --------------------------Ajout d'une note de la nanny pour la journée-------------------------- */
    case ADD_NOTE_DAY_NANNY:
    console.log('je suis dans le middleware');
      
      const formNoteNannyDay = {
        nannyNote: inputNoteNounou,
      };
        
      
      axios.post('http://92.243.19.193:3000/myday/nannydaytask', formNoteNannyDay)
      .then((response) => {
        store.dispatch(addNoteNannyResponse(response.data));
        console.log('ajout ADD_NOTE_DAY_NANNY : '+ response);     
      })
      .catch((error) => {
        console.log(error);
      });
      next(action);
      break;

      case HANDLE_GET_NANNY_DAY_NOTE:
      axios.get('http://92.243.19.193:3000/myday/nanny-day-note')
        .then((response) => {
          store.dispatch(addNoteNannyResponse(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    /** --------------------------Suppression d'une tache-------------------------- */
    case REMOVE_TASK_DAY:
      axios.post('http://92.243.19.193:3000/espace-parents/remove-task', action.id);
      next(action);
      break;
    
    /** --------------------------Ajout d'une note de la nounou pour une tache -------------------------- */
    case ADD_NOTE_TASK_NANNY:
      const formNannyAddTAsk = {
        id: action.id,
        text: action.text,
        selctedInput: selctedInput,
      };
      
        axios.post('http://92.243.19.193:3000/add-task-nanny', formNannyAddTAsk);
        next(action);
        
        break;
  /** --------------------------Task checkee -------------------------- */
      case TASK_CHECK:
      const formCheckTask = {
        id: action.id,
      }
      axios.post('http://92.243.19.193:3000/task-done', formCheckTask);
      next(action);
      break;
     /** ------------------------- nouvelle journée -------------------------- */
    case REGENERE_LIST:
     axios.post('http://92.243.19.193:3000/new-day');
     next(action);
     break;

    default:
      next(action);
  }
};

export default mydayMiddleware;

