/**
 * Initial State
 */
const initialState = {
  errorsForm: {},
};

/**
 * Types
 */
const HANDLE_CHANGE_INSCRIPTION_INPUT = 'HANDLE_CHANGE_INSCRIPTION_INPUT';
const INSCRIPTION = 'INSCRIPTION';

/**
 * Traitements
 */
// Validation du formulaire
// const checkForm = (state) => {
//   const { inputEmail, inputPassword, inputConfirmPassword, inputAccesCode, emailValid, errorsForm } = state;
//   if (inputPassword.length < 8) {
//     errorsForm = [...errorsForm, 'Le mot de passe doit comporter au moins 7 caractères.'];
//     }
//   if (inputPassword != inputConfirmPassword) {
//     errorsForm = [...errorsForm, 'Vos mots de passe ne correspondent pas.']
//   }
//   if (inputAccesCode < 8) {
//     errorsForm = [...errorsForm, 'Le code d\'accès doit comporter au moins 7 caractères.'];
//   }
//   console.log(errorsForm);
// }

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  var errors = {};
  
  switch (action.type) {
    case HANDLE_CHANGE_INSCRIPTION_INPUT:
    var { inputEmail, inputPassword, inputConfirmPassword, inputAccessCode, errorsForm } = state;
    if (inputPassword && inputPassword.length < 7) {
      errors = {
        ...errors,
        errorPassword: 'Le mot de passe doit comporter au moins 8 caractères.',
      }
    }
    if (inputConfirmPassword && (inputConfirmPassword != inputPassword)) {
      errors = {
        ...errors,
        errorConfirmPassword: 'Vos mots de passe ne correspondent pas.',
      }
    }
    if (inputAccessCode && inputAccessCode.length < 7) {
      console.log(inputAccessCode.length);
      errors = {
        ...errors,
        errorAccessCode: 'Le code d\'accès doit comporter au moins 8 caractères.',
      }
    }
    console.log(errors);
    return {
      ...state,
      ...action.changes,
      errorsForm: errors,
    }

    case INSCRIPTION:
    // var errors = {};
    
    if (!inputPassword || inputPassword.length < 7) {
      errors = {
        ...errors,
        errorPassword: 'Le mot de passe doit comporter au moins 8 caractères.',
      }
    }
    if (!inputConfirmPassword || inputPassword != inputConfirmPassword) {
      errors = {
        ...errors,
        errorConfirmPassword: 'Vos mots de passe ne correspondent pas.',
      }
    }
    if (!inputAccessCode || inputAccessCode.length < 7) {
      errors = {
        ...errors,
        errorAccessCode: 'Le code d\'accès doit comporter au moins 8 caractères.',
      }
    }
    console.log(errors);
    return {
      ...state,
      errorsForm: errors,
    }
    




      const formDatas = {
        // email: inputEmail,
        // password: inputPassword,
        // accessCode: inputAccesCode
      }
      console.log(formDatas);
    //AXIOS TODO
    // const inscription = (formDatas) => {
    //   const axios = require('axios');
    //   axios.post('http://localhost:3000/inscription', formDatas)
    //     .then((response) => {
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const inscription = () => ({
  type: INSCRIPTION,
});

export const handleChangeInputs = changes => ({
  type: HANDLE_CHANGE_INSCRIPTION_INPUT,
  changes,
});
/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
