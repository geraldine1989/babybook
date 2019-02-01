import axios from 'axios';

import { addChild, addPhone, addMeds, addVaccines, addAllergies } from './reducers/ParentsSpaceInfoReducer';

/* eslint-disable no-case-declarations */
const parentsSpaceInfoMiddleware = store => next => (action) => {
  switch (action.type) {
    case addChild:
      const childState = store.getState().ParentsSpaceInfoReducer;
      const { inputFirstName, inputLastName, inputBirthDate } = childState;
      const childDatas = {
        firstname: inputFirstName,
        lastname: inputLastName,
        birthdate: inputBirthDate,
      };

      axios.post('http://localhost:3000/parentsSpaceInfo', childDatas)
        .then((response) => {
          console.log(response);
          store.dispatch();
        })
        .catch((error) => {
          console.log(error);
        });

      break;
    case addPhone:
      const phoneState = store.getState().ParentsSpaceInfoReducer;
      const { inputPhoneName, inputPhoneNumber } = phoneState;
      const phoneDatas = {
        phonename: inputPhoneName,
        phonenumber: inputPhoneNumber,
      };

      axios.post('http://localhost:3000/parentsSpaceInfo', phoneDatas)
        .then((response) => {
          console.log(response);
          store.dispatch();
        })
        .catch((error) => {
          console.log(error);
        });

      break;
    case addMeds:
      const medsState = store.getState().ParentsSpaceInfoReducer;
      const { inputMeds } = medsState;
      const medsDatas = {
        name: inputMeds,
      };

      axios.post('http://localhost:3000/parentsSpaceInfo', medsDatas)
        .then((response) => {
          console.log(response);
          store.dispatch();
        })
        .catch((error) => {
          console.log(error);
        });

      break;
    case addVaccines:
      const vaccinesState = store.getState().ParentsSpaceInfoReducer;
      const { inputVaccines } = vaccinesState;
      const vaccinesDatas = {
        name: inputVaccines,
      };

      axios.post('http://localhost:3000/parentsSpaceInfo', vaccinesDatas)
        .then((response) => {
          console.log(response);
          store.dispatch();
        })
        .catch((error) => {
          console.log(error);
        });

      break;
    case addAllergies:
      const allergiesState = store.getState().ParentsSpaceInfoReducer;
      const { inputAllergies } = allergiesState;
      const allergiesDatas = {
        name: inputAllergies,
      };

      axios.post('http://localhost:3000/parentsSpaceInfo', allergiesDatas)
        .then((response) => {
          console.log(response);
          store.dispatch();
        })
        .catch((error) => {
          console.log(error);
        });

      break;
    default:
      next(action);
  }
};

export default parentsSpaceInfoMiddleware;
