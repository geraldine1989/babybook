import uuidv4 from 'uuid/v4';

/**
 * Initial State
 */
const initialState = {
  childList: [],
  medsList: [],
  vaccinesList: [],
  allergiesList: [],
  phoneList: [],
  inputFirstName: '',
  inputLastName: '',
  inputBirthDate: '',
  inputMeds: '',
  inputVaccines: '',
  inputAllergies: '',
  inputPhoneName: '',
  inputPhoneNumber: '',
};

/**
 * Types
 */
const INPUT_CHANGE_FIRST_NAME = 'INPUT_CHANGE_FIRST_NAME';
const INPUT_CHANGE_LAST_NAME = 'INPUT_CHANGE_LAST_NAME';
const INPUT_CHANGE_BIRTH_DATE = 'INPUT_CHANGE_BIRTH_DATE';
const INPUT_CHANGE_MEDS = 'INPUT_CHANGE_MEDS';
const INPUT_CHANGE_VACCINES = 'INPUT_CHANGE_VACCINES';
const INPUT_CHANGE_ALLERGIES = 'INPUT_CHANGE_ALLERGIES';
const INPUT_CHANGE_PHONE_NAME = 'INPUT_CHANGE_PHONE_NAME';
const INPUT_CHANGE_PHONE_NUMBER = 'INPUT_CHANGE_PHONE_NUMBER';

export const ADD_CHILD = 'ADD_CHILD';
export const ADD_MEDS = 'ADD_MEDS';
export const ADD_VACCINES = 'ADD_VACCINES';
export const ADD_ALLERGIES = 'ADD_ALLERGIES';
export const ADD_PHONE = 'ADD_PHONE';

export const REMOVE_CHILD = 'REMOVE_CHILD';
export const REMOVE_MEDS = 'REMOVE_MEDS';
export const REMOVE_VACCINES = 'REMOVE_VACCINES';
export const REMOVE_ALLERGIES = 'REMOVE_ALLERGIES';
export const REMOVE_PHONE = 'REMOVE_PHONE';

export const CHILD_RESPONSE = 'CHILD_RESPONSE';
export const MEDS_RESPONSE = 'MEDS_RESPONSE';
export const VACCINES_RESPONSE = 'VACCINES_RESPONSE';
export const ALLERGIES_RESPONSE = 'ALLERGIES_RESPONSE';
export const PHONE_RESPONSE = 'PHONE_RESPONSE';

export const GET_CHILD = 'GET_CHILD';
export const GET_MEDS = 'GET_MEDS';
export const GET_VACCINES = 'GET_VACCINES';
export const GET_ALLERGIES = 'GET_ALLERGIES';
export const GET_PHONE = 'GET_PHONE';
export const GET_INFOS = 'GET_INFOS';

/**
 * Traitements
 */


/**
 * Reducer
 */
/* eslint-disable no-case-declarations */
const ParentsSpaceInfoReducer = (state = initialState, action = {}) => {
  const { childList } = state;
  const { medsList } = state;
  const { vaccinesList } = state;
  const { allergiesList } = state;
  const { phoneList } = state;

  const { inputFirstName } = state;
  const { inputLastName } = state;
  const { inputBirthDate } = state;
  const { inputMeds } = state;
  const { inputVaccines } = state;
  const { inputAllergies } = state;
  const { inputPhoneName } = state;
  const { inputPhoneNumber } = state;

  switch (action.type) {

    case INPUT_CHANGE_FIRST_NAME:
      return {
        ...state,
        inputFirstName: action.inputFirstName,
      };

    case INPUT_CHANGE_LAST_NAME:
      return {
        ...state,
        inputLastName: action.inputLastName,
      };

    case INPUT_CHANGE_BIRTH_DATE:
      return {
        ...state,
        inputBirthDate: action.inputBirthDate,
      };

    case GET_CHILD:
      return {
        ...state,
      };

    case ADD_CHILD:
      const newChildObject = {
        id: uuidv4(),
        firstname: inputFirstName,
        lastname: inputLastName,
        birthdate: inputBirthDate,
      };

      const newChildList = [...childList, newChildObject];

      return {
        ...state,
        childList: newChildList,
        inputFirstName: '',
        inputLastName: '',
        inputBirthDate: '',
      };

    case CHILD_RESPONSE:
      return {
        ...state,
        childList: action.datas,
      };

    case REMOVE_CHILD:
      const deletedChild = state.childList.filter(deletedKid => deletedKid.id !== action.id);

      return {
        ...state,
        childList: deletedChild,
      };


    case INPUT_CHANGE_MEDS:
      return {
        ...state,
        inputMeds: action.inputMeds,
      };

    case GET_MEDS:
      return {
        ...state,
      };

    case ADD_MEDS:
      const newMedsObject = {
        id: uuidv4(),
        name: inputMeds,
      };

      const newMedsList = [...medsList, newMedsObject];

      return {
        ...state,
        medsList: newMedsList,
        inputMeds: '',
      };

    case MEDS_RESPONSE:
      return {
        ...state,
        medsList: action.datas,
      };

    case REMOVE_MEDS:
      const deletedMeds = state.medsList.filter(deletedMed => deletedMed.id !== action.id);

      return {
        ...state,
        medsList: deletedMeds,
      };


    case INPUT_CHANGE_VACCINES:
      return {
        ...state,
        inputVaccines: action.inputVaccines,
      };

    case GET_VACCINES:
      return {
        ...state,
      };

    case ADD_VACCINES:
      const newVaccinesObject = {
        id: uuidv4(),
        name: inputVaccines,
      };

      const newVaccinesList = [...vaccinesList, newVaccinesObject];

      return {
        ...state,
        vaccinesList: newVaccinesList,
        inputVaccines: '',
      };

    case VACCINES_RESPONSE:
      return {
        ...state,
        vaccinesList: action.datas,
      };

    case REMOVE_VACCINES:
      const deletedVaccines = state.vaccinesList.filter(deletedVaccine => deletedVaccine.id !== action.id);

      return {
        ...state,
        vaccinesList: deletedVaccines,
      };


    case INPUT_CHANGE_ALLERGIES:
      return {
        ...state,
        inputAllergies: action.inputAllergies,
      };

    case GET_ALLERGIES:
      return {
        ...state,
      };

    case ADD_ALLERGIES:
      const newAllergiesObject = {
        id: uuidv4(),
        name: inputAllergies,
      };

      const newAllergiesList = [...allergiesList, newAllergiesObject];

      return {
        ...state,
        allergiesList: newAllergiesList,
        inputAllergies: '',
      };

    case ALLERGIES_RESPONSE:
      return {
        ...state,
        allergiesList: action.datas,
      };

    case REMOVE_ALLERGIES:
      const deletedAllergies = state.allergiesList.filter(deletedAllergie => deletedAllergie.id !== action.id);

      return {
        ...state,
        allergiesList: deletedAllergies,
      };


    case INPUT_CHANGE_PHONE_NAME:
      return {
        ...state,
        inputPhoneName: action.inputPhoneName,
      };

    case INPUT_CHANGE_PHONE_NUMBER:
      return {
        ...state,
        inputPhoneNumber: action.inputPhoneNumber,
      };

    case GET_PHONE:
      return {
        ...state,
      };

    case ADD_PHONE:
      const newPhoneObject = {
        id: uuidv4(),
        phonename: inputPhoneName,
        phonenumber: inputPhoneNumber,
      };

      const newPhoneList = [...phoneList, newPhoneObject];

      return {
        ...state,
        phoneList: newPhoneList,
        inputPhoneName: '',
        inputPhoneNumber: '',
      };

    case PHONE_RESPONSE:
      return {
        ...state,
        phoneList: action.datas,
      };

    case REMOVE_PHONE:
      const deletedPhones = state.phoneList.filter(deletedPhone => deletedPhone.id !== action.id);

      return {
        ...state,
        phoneList: deletedPhones,
      };


    default:
      return state;
  }
};

/**
 * Action Creators
 */

export const handleChangeFirstName = text => ({
  type: INPUT_CHANGE_FIRST_NAME,
  inputFirstName: text,
});

export const handleChangeLastName = text => ({
  type: INPUT_CHANGE_LAST_NAME,
  inputLastName: text,
});

export const handleChangeBirthDate = date => ({
  type: INPUT_CHANGE_BIRTH_DATE,
  inputBirthDate: date,
});

export const addChild = childList => ({
  type: ADD_CHILD,
  childList,
});

export const removeChild = id => ({
  type: REMOVE_CHILD,
  id,
});

export const childResponse = datas => ({
  type: CHILD_RESPONSE,
  datas,
});

export const getChild = () => ({
  type: GET_CHILD,
});


export const handleChangeMedsItem = text => ({
  type: INPUT_CHANGE_MEDS,
  inputMeds: text,
});

export const addMeds = medsList => ({
  type: ADD_MEDS,
  medsList,
});

export const removeMeds = id => ({
  type: REMOVE_MEDS,
  id,
});

export const medsResponse = datas => ({
  type: MEDS_RESPONSE,
  datas,
});

export const getMeds = () => ({
  type: GET_MEDS,
});


export const handleChangeVaccinesItem = text => ({
  type: INPUT_CHANGE_VACCINES,
  inputVaccines: text,
});

export const addVaccines = vaccinesList => ({
  type: ADD_VACCINES,
  vaccinesList,
});

export const removeVaccines = id => ({
  type: REMOVE_VACCINES,
  id,
});

export const vaccinesResponse = datas => ({
  type: VACCINES_RESPONSE,
  datas,
});

export const getVaccines = () => ({
  type: GET_VACCINES,
});


export const handleChangeAllergiesItem = text => ({
  type: INPUT_CHANGE_ALLERGIES,
  inputAllergies: text,
});

export const addAllergies = allergiesList => ({
  type: ADD_ALLERGIES,
  allergiesList,
});

export const removeAllergies = id => ({
  type: REMOVE_ALLERGIES,
  id,
});

export const allergiesResponse = datas => ({
  type: ALLERGIES_RESPONSE,
  datas,
});

export const getAllergies = () => ({
  type: GET_ALLERGIES,
});


export const handleChangePhoneName = text => ({
  type: INPUT_CHANGE_PHONE_NAME,
  inputPhoneName: text,
});

export const handleChangePhoneNumber = tel => ({
  type: INPUT_CHANGE_PHONE_NUMBER,
  inputPhoneNumber: tel,
});

export const addPhone = phoneList => ({
  type: ADD_PHONE,
  phoneList,
});

export const removePhone = id => ({
  type: REMOVE_PHONE,
  id,
});

export const phoneResponse = datas => ({
  type: PHONE_RESPONSE,
  datas,
});

export const getPhone = () => ({
  type: GET_PHONE,
});

export const getInfos = () => ({
  type: GET_INFOS,
});


/**
 * Selectors
 */

/**
 * Export
 */
export default ParentsSpaceInfoReducer;
