import axios from 'axios';
import uuidv4 from 'uuid/v4';

import {
  ADD_CHILD,
  childResponse,
  GET_CHILD,
  ADD_PHONE,
  phoneResponse,
  ADD_MEDS,
  medsResponse,
  ADD_VACCINES,
  vaccinesResponse,
  ADD_ALLERGIES,
  allergiesResponse,
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

    case ADD_MEDS:
      const medsState = store.getState().ParentsSpaceInfoReducer;
      const { inputMeds } = medsState;
      const medsDatas = {
        name: inputMeds,
      };

      axios.post('http://localhost:3000/espace-parents/infos/meds', medsDatas)
        .then((response) => {
          console.log(response);
          store.dispatch(medsResponse(response.data));
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
        name: inputVaccines,
      };

      axios.post('http://localhost:3000/espace-parents/infos/vaccines', vaccinesDatas)
        .then((response) => {
          console.log(response);
          store.dispatch(vaccinesResponse(response.data));
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
        name: inputAllergies,
      };

      axios.post('http://localhost:3000/espace-parents/infos/allergies', allergiesDatas)
        .then((response) => {
          console.log(response);
          store.dispatch(allergiesResponse(response.data));
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
        phonename: inputPhoneName,
        phonenumber: inputPhoneNumber,
      };

      axios.post('http://localhost:3000/espace-parents/infos/phone', phoneDatas)
        .then((response) => {
          console.log(response);
          store.dispatch(phoneResponse(response.data));
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

export default parentsSpaceInfoMiddleware;
