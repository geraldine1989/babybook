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
const ADD_CHILD = 'ADD_CHILD';
const ADD_MEDS = 'ADD_MEDS';
const ADD_VACCINES = 'ADD_VACCINES';
const ADD_ALLERGIES = 'ADD_ALLERGIES';
const ADD_PHONE = 'ADD_PHONE';
const REMOVE_MEDS = 'REMOVE_MEDS';
const REMOVE_VACCINES = 'REMOVE_VACCINES';
const REMOVE_ALLERGIES = 'REMOVE_ALLERGIES';


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

    case INPUT_CHANGE_MEDS:
      return {
        ...state,
        inputMeds: action.inputMeds,
      };

    case INPUT_CHANGE_VACCINES:
      return {
        ...state,
        inputVaccines: action.inputVaccines,
      };

    case INPUT_CHANGE_ALLERGIES:
      return {
        ...state,
        inputAllergies: action.inputAllergies,
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

    case REMOVE_MEDS:
      const deletedMeds = state.medsList.filter(deletedMed => deletedMed.id !== action.id);

      return {
        ...state,
        medsList: deletedMeds,
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

    case REMOVE_VACCINES:
      const deletedVaccines = state.vaccinesList.filter(deletedVaccine => deletedVaccine.id !== action.id);

      return {
        ...state,
        vaccinesList: deletedVaccines,
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

    case REMOVE_ALLERGIES:
      const deletedAllergies = state.allergiesList.filter(deletedAllergie => deletedAllergie.id !== action.id);

      return {
        ...state,
        allergiesList: deletedAllergies,
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

export const handleChangeMedsItem = text => ({
  type: INPUT_CHANGE_MEDS,
  inputMeds: text,
});

export const handleChangeVaccinesItem = text => ({
  type: INPUT_CHANGE_VACCINES,
  inputVaccines: text,
});

export const handleChangeAllergiesItem = text => ({
  type: INPUT_CHANGE_ALLERGIES,
  inputAllergies: text,
});

export const handleChangePhoneName = text => ({
  type: INPUT_CHANGE_PHONE_NAME,
  inputPhoneName: text,
});

export const handleChangePhoneNumber = number => ({
  type: INPUT_CHANGE_PHONE_NUMBER,
  inputPhoneNumber: number,
});

export const addMeds = medsList => ({
  type: ADD_MEDS,
  medsList,
});

export const addVaccines = vaccinesList => ({
  type: ADD_VACCINES,
  vaccinesList,
});

export const addAllergies = allergiesList => ({
  type: ADD_ALLERGIES,
  allergiesList,
});

export const addChild = childList => ({
  type: ADD_CHILD,
  childList,
});

export const addPhone = phoneList => ({
  type: ADD_PHONE,
  phoneList,
});

export const removeMeds = id => ({
  type: REMOVE_MEDS,
  id,
});

export const removeVaccines = id => ({
  type: REMOVE_VACCINES,
  id,
});

export const removeAllergies = id => ({
  type: REMOVE_ALLERGIES,
  id,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default ParentsSpaceInfoReducer;
