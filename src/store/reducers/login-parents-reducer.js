/**
 * Initial State
 */


const initialState = {
  loggedParent: false,
  signed: false,
  parentEmail: '',
  inputEmail: '',
  inputPassword: '',
};

/**
 * Types
 */
const HANDLE_CHANGE_INPUT = 'HANDLE_CHANGE_INPUT';
export const HANDLE_LOGIN = 'HANDLE_LOGIN';
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE';
export const HANDLE_LOGOUT = 'HANDLE_LOGOUT';

/**
 * Traitements
 */


/**
 * Reducer
 */
const loginParentsReducer = (state = initialState, action = {}) => {
  const { inputEmail, inputPassword } = state;

  switch (action.type) {
    case HANDLE_CHANGE_INPUT:
      return {
        ...state,
        ...action.changes,
      }

    case HANDLE_LOGIN:
      return {
        ...state,
        inputEmail,
        inputPassword,
      }
    
    case LOGIN_RESPONSE:
      if (action.answer === 'logged') {
        
        return {
          ...state,
          loggedParent: true,
          signed: false,
          parentEmail: inputEmail,
          errorLogin: '',
        }
      } else {
        return {
          ...state,
          loggedParent: false,
          errorLogin: 'Votre email ou votre mot de passe est incorrect.',
        }
      }
      
    case HANDLE_LOGOUT:
      return {
        ...state,
        loggedParent: false,
      }

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const handleLogin = () => ({
  type: HANDLE_LOGIN,
});

export const handleChangeInputs = changes => ({
  type: HANDLE_CHANGE_INPUT,
  changes,
});

export const loginResponse = answer => ({
  type: LOGIN_RESPONSE,
  answer,
});

export const handleLogoutParent = () => ({
  type: HANDLE_LOGOUT,
});
/**
 * Selectors
 */

/**
 * Export
 */
export default loginParentsReducer;
