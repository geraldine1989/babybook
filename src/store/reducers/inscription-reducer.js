/**
 * Initial State
 */
const initialState = {
  errorsForm: {
    errorEmail: '',
    errorPassword: '',
    errorConfirmPassword: '',
    errorAccessCode: '',
  },
};

/**
 * Types
 */
const HANDLE_CHANGE_INSCRIPTION_INPUT = 'HANDLE_CHANGE_INSCRIPTION_INPUT';
const HANDLE_INSCRIPTION = 'INSCRIPTION';

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
const inscriptionReducer = (state = initialState, action = {}) => {
  
  switch (action.type) {
    case HANDLE_CHANGE_INSCRIPTION_INPUT:
      const { inputEmail, inputPassword, inputConfirmPassword, inputAccessCode } = action.changes;
      let errors = {};
      if (inputEmail && inputEmail.length < 8) {
        errors = {
          ...errors,
          errorEmail: 'Veuillez saisir un email valide.',
        }
      }
      if (inputPassword && inputPassword.length < 8) {
        errors = {
          ...errors,
          errorPassword: 'Le mot de passe doit comporter au moins 8 caractères.',
        }
      }
      if (inputConfirmPassword !== inputPassword) {
        errors = {
          ...errors,
          errorConfirmPassword: 'Vos mots de passe ne correspondent pas.',
        }
      }
      if (inputAccessCode && inputAccessCode.length < 8) {
        // console.log(inputAccessCode.length);
        errors = {
          ...errors,
          errorAccessCode: 'Le code d\'accès doit comporter au moins 8 caractères.',
        }
      }

      return {
        ...state,
        ...action.changes,
        errorsForm: errors,
      }

    case HANDLE_INSCRIPTION:



    
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


  default:
      return state;
  }
};

/**
 * Action Creators
 */
export const handleInscription = () => ({
  type: HANDLE_INSCRIPTION,
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
export default inscriptionReducer;
