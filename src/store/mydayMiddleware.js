import axios from 'axios';

import { ADD_TASK } from './reducers/myday';

const mydayMiddleware = store => next => (action) => {
  // Je veux vérifier si l'action que je reçois m'intéresse

  switch (action.type) {
    
    case ADD_TASK:
    console.log('je suis dans le middleware');
      const state = store.getState().myday;
      const { inputTitle, inputNoteTask, inputHourTask } = state;
      const formDatas = {
        
        name: inputTitle,
        hour: inputHourTask,
        indic: inputNoteTask,
        tododone:'list-button',
      };
        
      
      axios.post('http://localhost:3000/espace-parents/journee-type', formDatas)
      .then((response) => {
        console.log('ajout task ADD TASK : '+ response);
        next(action);
      })
      .catch((error) => {
        console.log(error);
      });
      break;

    default:
      next(action);
  }
};

export default mydayMiddleware;

