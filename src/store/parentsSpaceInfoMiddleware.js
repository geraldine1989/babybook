import axios from 'axios';
import uuidv4 from 'uuid/v4';

import {
  ADD_CHILD,
  childResponse,
  GET_CHILD,
  ADD_PHONE,
  phoneResponse,
  GET_PHONE,
  ADD_MEDS,
  medsResponse,
  GET_MEDS,
  ADD_VACCINES,
  vaccinesResponse,
  GET_VACCINES,
  ADD_ALLERGIES,
  allergiesResponse,
  GET_ALLERGIES,
  REMOVE_MEDS,
  REMOVE_VACCINES,
  REMOVE_ALLERGIES,
  REMOVE_PHONE,
} from './reducers/ParentsSpaceInfoReducer';

/* eslint-disable no-case-declarations */
const parentsSpaceInfoMiddleware = store => next => (action) => {
  switch (action.type) {

    case GET_CHILD:
      axios.get('http://localhost:3000/espace-parents/infos/get-child')
        .then((response) => {
          store.dispatch(childResponse(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    case ADD_CHILD:
      const childState = store.getState().ParentsSpaceInfoReducer;
      const { inputFirstName, inputLastName, inputBirthDate } = childState;
      const childDatas = {
        id: uuidv4(),
        firstname: inputFirstName,
        lastname: inputLastName,
        birthdate: inputBirthDate,
      };

      axios.post('http://localhost:3000/espace-parents/infos/add-child', childDatas)
        .then((response) => {
          console.log(response);
          store.dispatch(childResponse(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    case GET_MEDS:
    console.log('coucou GET MEDS Middleware');
      axios.get('http://localhost:3000/espace-parents/infos/get-meds')
        .then((response) => {
          store.dispatch(medsResponse(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    case ADD_MEDS:
      const medsState = store.getState().ParentsSpaceInfoReducer;
      const { inputMeds } = medsState;
      const medsDatas = {
        id: uuidv4(),
        name: inputMeds,
      };

      axios.post('http://localhost:3000/espace-parents/infos/add-meds', medsDatas)
        .then((response) => {
          console.log(response);
          store.dispatch(medsResponse(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    case REMOVE_MEDS:
      console.log('coucou REMOVE MEDS Middleware');
      axios.post('http://localhost:3000/espace-parents/infos/remove-meds', action.id);
      next(action);
      break;

    case GET_VACCINES:
      axios.get('http://localhost:3000/espace-parents/infos/get-vaccines')
        .then((response) => {
          store.dispatch(vaccinesResponse(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    case ADD_VACCINES:
      const vaccinesState = store.getState().ParentsSpaceInfoReducer;
      const { inputVaccines } = vaccinesState;
      const vaccinesDatas = {
        id: uuidv4(),
        name: inputVaccines,
      };

      axios.post('http://localhost:3000/espace-parents/infos/add-vaccines', vaccinesDatas)
        .then((response) => {
          console.log(response);
          store.dispatch(vaccinesResponse(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    case REMOVE_VACCINES:
      console.log('coucou REMOVE VACCINES Middleware');
      axios.post('http://localhost:3000/espace-parents/infos/remove-vaccines', action.id);
      next(action);
      break;

    case GET_ALLERGIES:
      axios.get('http://localhost:3000/espace-parents/infos/get-allergies')
        .then((response) => {
          store.dispatch(allergiesResponse(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    case ADD_ALLERGIES:
      const allergiesState = store.getState().ParentsSpaceInfoReducer;
      const { inputAllergies } = allergiesState;
      const allergiesDatas = {
        id: uuidv4(),
        name: inputAllergies,
      };

      axios.post('http://localhost:3000/espace-parents/infos/add-allergies', allergiesDatas)
        .then((response) => {
          console.log(response);
          store.dispatch(allergiesResponse(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    case REMOVE_ALLERGIES:
      console.log('coucou REMOVE ALLERGIES Middleware');
      axios.post('http://localhost:3000/espace-parents/infos/remove-allergies', action.id);
      next(action);
      break;

    case GET_PHONE:
      axios.get('http://localhost:3000/espace-parents/infos/get-phone')
        .then((response) => {
          store.dispatch(phoneResponse(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    case ADD_PHONE:
      const phoneState = store.getState().ParentsSpaceInfoReducer;
      const { inputPhoneName, inputPhoneNumber } = phoneState;
      const phoneDatas = {
        id: uuidv4(),
        phonename: inputPhoneName,
        phonenumber: inputPhoneNumber,
      };

      axios.post('http://localhost:3000/espace-parents/infos/add-phone', phoneDatas)
        .then((response) => {
          console.log(response);
          store.dispatch(phoneResponse(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
      next(action);
      break;

    case REMOVE_PHONE:
      console.log('coucou REMOVE PHONE Middleware');
      axios.post('http://localhost:3000/espace-parents/infos/remove-phones', action.id);
      next(action);
      break;

    default:
      next(action);
  }
};

export default parentsSpaceInfoMiddleware;
