import React from 'react';
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
  // registered: false,
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
      return {
        ...state,
        ...action.changes,
      }

    case GET_EMAILS_RESPONSE:
      return {
        ...state,
      }

    case HANDLE_INSCRIPTION:
      console.log('HANDLE_INSCRIPTION reducer');
      if (action.err) {
        return {
          ...state,
          errorsForm: action.err,
        }
      } else {
        return {
          ...state
        }
      }

    case INSCRIPTION_RESPONSE:
      console.log(action.datas);
      if (action.datas === 'notOk') {
        const errors = {
          ...action.err,
          errorEmail: 'Cette adresse mail existe déjà.',
        }
        return {
          ...state,
          errorsForm: errors,
        }
      } else {
        console.log('redirect');
        // return <Redirect to="/login-parents" />
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
