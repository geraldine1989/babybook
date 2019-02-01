
import { Redirect } from 'react-router';

/**
 * Initial State
 */
const initialState = {
  inputEmail: '',
  inputPassword: '',
  inputConfirmPassword: '',
  inputAccessCode: '',
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
export const HANDLE_INSCRIPTION = 'INSCRIPTION';
export const GET_EMAILS_RESPONSE = 'GET_EMAILS_RESPONSE';
export const HANDLE_GET_EMAILS = 'HANDLE_GET_EMAILS';
export const INSCRIPTION_RESPONSE = 'INSCRIPTION_RESPONSE';

/**
 * Traitements
 */

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
        errors = {
          ...errors,
          errorAccessCode: 'Le code d\'accès doit comporter au moins 8 caractères.',
        }
      }
      // if (inputAccessCode === inputPassword) {
      //   errors = {
      //     ...errors,
      //     errorAccessCode: 'Le code d\'accès doit être différent de votre mot de passe',
      //   }
      // }

      return {
        ...state,
        ...action.changes,
        errorsForm: errors,
      }

    case GET_EMAILS_RESPONSE:
      return {
        ...state,
      }

    case HANDLE_INSCRIPTION:
      console.log('HANDLE_INSCRIPTION reducer');
      // const { errorsForm } = state;
      // var errorEmail = errorsForm.errorEmail;
      // console.log(errorsForm);
      // if (errorsForm) {
      //   errors = {
      //     ...errors,
      //     errorEmail,
      //   }
      // }
      // return <Redirect to='/login-parents' />
      return {
        ...state,
        // errorsForm: action.err,
        inputEmail: '',
        inputPassword: '',
        inputConfirmPassword: '',
        inputAccessCode: '',
      }

    case INSCRIPTION_RESPONSE:
      console.log(action.datas);
      if (action.datas === 'notOk') {
        errors = {
          ...errors,
          errorEmail: 'Cette adresse mail existe déjà.',
        }
        return {
          ...state,
          errorsForm: errors,
        }
      }


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

export const handleGetEmails = () => ({
  type: HANDLE_GET_EMAILS,
});

export const inscriptionResponse = (datas) => ({
  type: INSCRIPTION_RESPONSE,
  datas,
})
/**
 * Selectors
 */

/**
 * Export
 */
export default inscriptionReducer;
