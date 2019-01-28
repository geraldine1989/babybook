import uuidv4 from 'uuid/v4';

/**
 * Initial State
 */
const initialState = {
  childList: [],
  birthDateList: [],
  medsList: [],
  vaccinesList: [],
  allergiesList: [],
  phoneList: [],
  allInfosList: [],
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
const ADD_BIRTH_DATE = 'ADD_BIRTH_DATE';
const ADD_MEDS = 'ADD_MEDS';
const ADD_VACCINES = 'ADD_VACCINES';
const ADD_ALLERGIES = 'ADD_ALLERGIES';
const ADD_PHONE = 'ADD_PHONE';
const ADD_ALL_INFOS = 'ADD_ALL_INFOS';


/**
 * Traitements
 */


/**
 * Reducer
 */
/* eslint-disable no-case-declarations */
const reducer = (state = initialState, action = {}) => {
  const { childList } = state;
  const { birthDateList } = state;
  const { medsList } = state;
  const { vaccinesList } = state;
  const { allergiesList } = state;
  const { phoneList } = state;
  const { allInfosList } = state;
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

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
