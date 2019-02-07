import axios from 'axios';
import uuidv4 from 'uuid/v4';
import { ADD_TASK, addTaskResponse, ADD_NOTE, ADD_NOTE_DAY_NANNY, HANDLE_GET_TASKS, addNoteParentsResponse, HANDLE_GET_NOTE_PARENTS } from './reducers/myday';

const mydayMiddleware = store => next => (action) => {
  const state = store.getState().myday;
      const { inputTitle, inputNoteTask, inputHourTask } = state;
      const { itemList } = state;
      const { inputNote } = state;
      const { inputNoteNounou } = state;
  // Je veux vérifier si l'action que je reçois m'intéresse

  switch (action.type) {
    
    /** Ajout d'une tache */

    case ADD_TASK:
    console.log('je suis dans le middleware');
      
      const formDatas = {
        
        name: inputTitle,
        hour: inputHourTask,
        indic: inputNoteTask,
        tododone:'list-button',
        selctedInput: '',
        note: '',
        id: uuidv4(),
      };
   
      axios.post('http://localhost:3000/espace-parents/add-task', formDatas)
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
      axios.get('http://localhost:3000/espace-parents/journee-type')
        .then((response) => {
          store.dispatch(addTaskResponse(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    /** ----------------------------------Ajout d'une note des parents pour la journée ----------------------------------*/
    // ajout d'une note
    case ADD_NOTE:
    console.log('je suis dans le middlewar');
      const formNoteDay = {  
        note: inputNote,
      };
        
      
      axios.post('http://localhost:3000/espace-parents/add-note-day-parents', formNoteDay)
      .then((response) => {
        store.dispatch(addNoteParentsResponse(response.data));
        console.log('ajout task ADD note : '+ response);
        
      })
      .catch((error) => {
        console.log(error);
      });
      next(action);
      break;

    // Récupération de la note des parents 
    case HANDLE_GET_NOTE_PARENTS:
    console.log('coucou HANDLE GET NOTE Middleware');
      axios.get('http://localhost:3000/espace-parents/journal')
        .then((response) => {
          store.dispatch(addNoteParentsResponse(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    /** ---------------------------------- Ajout d'une note de la nanny pour la journée---------------------------------- */
    case ADD_NOTE_DAY_NANNY:
    console.log('je suis dans le middleware');
      
      const formNoteNannyDay = {      
        nannyNote: inputNoteNounou,
      };
        
      
      axios.post('http://localhost:3000/myday/nannydaytask', formNoteNannyDay)
      .then((response) => {
        store.dispatch(addTaskResponse(response.data));
        console.log('ajout ADD_NOTE_DAY_NANNY : '+ response);
        
      })
      .catch((error) => {
        console.log(error);
      });
            

      next(action);
      break;
    default:
      next(action);
  }
};

export default mydayMiddleware;

