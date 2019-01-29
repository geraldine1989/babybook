/**
 * Initial State
 */
const initialState = {
  logged: false,
  inputEmail: '',
  inputPassword: '',
};

/**
 * Types
 */
const HANDLE_CHANGE_INPUT = 'HANDLE_CHANGE_INPUT';
export const HANDLE_LOGIN = 'HANDLE_LOGIN';
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE';

/**
 * Traitements
 */


/**
 * Reducer
 */
const loginParentsReducer = (state = initialState, action = {}) => {
  let errors = {};
  const { inputEmail, inputPassword } = state;

  switch (action.type) {
    case HANDLE_CHANGE_INPUT:
      return {
        ...state,
        ...action.changes,
      }

    case HANDLE_LOGIN:
      console.log('HANDLE_LOGIN reducer');


      if (!errors) {

      };
    
    
      return {
        ...state,
        inputEmail,
        inputPassword,
      }
    
    case LOGIN_RESPONSE:
      if (action.answer === 'logged') {
        return {
          ...state,
          logged: true,
          errorLogin: '',
        }
      }
      return {
        ...state,
        errorLogin: action.answer,
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
})
/**
 * Selectors
 */

/**
 * Export
 */
export default loginParentsReducer;
