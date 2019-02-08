/**
 * Initial State
 */
const initialState = {
  logged: false,
  parent: false,
  inputEmailNanny: '',
  inputPasswordNanny: '',
};

/**
 * Types
 */
const HANDLE_CHANGE_INPUT = 'HANDLE_CHANGE_INPUT_NANNY';
export const HANDLE_LOGIN = 'HANDLE_LOGIN_NANNY';
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE_NANNY';
export const HANDLE_LOGOUT = 'HANDLE_LOGOUT_NANNY';

/**
 * Traitements
 */


/**
 * Reducer
 */
const loginNannyReducer = (state = initialState, action = {}) => {
  const { inputEmailNanny, inputPasswordNanny } = state;

  switch (action.type) {
    case HANDLE_CHANGE_INPUT:
      return {
        ...state,
        ...action.changes,
      }

    case HANDLE_LOGIN:
      return {
        ...state,
        inputEmailNanny,
        inputPasswordNanny,
      }
    
    case LOGIN_RESPONSE:
      if (action.answer === 'logged') {
        return {
          ...state,
          logged: true,
          errorLogin: '',
        }
      } else {
        return {
          ...state,
          logged: false,
          errorLoginNanny: 'Votre email ou votre mot de passe est incorrect.',
        }
      }

    case HANDLE_LOGOUT:
      return {
        ...state,
        logged: false,
      }

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const handleLoginNanny = () => ({
  type: HANDLE_LOGIN,
});

export const handleChangeInputsNanny = changes => ({
  type: HANDLE_CHANGE_INPUT,
  changes,
});

export const loginResponseNanny = answer => ({
  type: LOGIN_RESPONSE,
  answer,
})

export const handleLogoutNanny = () => ({
  type: HANDLE_LOGOUT,
})
/**
 * Selectors
 */

/**
 * Export
 */
export default loginNannyReducer;
