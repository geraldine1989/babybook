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
const HANDLE_CHANGE_INPUT = 'HANDLE_CHANGE_INPUT';
export const HANDLE_LOGIN = 'HANDLE_LOGIN';

/**
 * Traitements
 */


/**
 * Reducer
 */
const loginReducer = (state = initialState, action = {}) => {
let errors = {};
const { inputEmail, inputPassword } = state;

  switch (action.type) {
    case HANDLE_CHANGE_INPUT:

      console.log(errors);

      return {
        ...state,
        ...action.changes,
        errorsForm: errors,
      }

    case HANDLE_LOGIN:



      if (!errors) {

      };
    
    
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
export const handleLogin = () => ({
  type: HANDLE_LOGIN,
});

export const handleChangeInputs = changes => ({
  type: HANDLE_CHANGE_INPUT,
  changes,
});
/**
 * Selectors
 */

/**
 * Export
 */
export default loginReducer;
