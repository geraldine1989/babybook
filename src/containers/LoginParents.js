/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import LoginParents from 'src/components/LoginParents';

// Action Creators
import { handleChangeInputs, handleLogin } from 'src/store/reducers/login-parents-reducer';
import { handleGetTasks, handleGetParentsNote, handleGetNannyDayNote } from 'src/store/reducers/myday';

const mapStateToProps = state => ({
  inputEmail: state.loginParentsReducer.inputEmail,
  inputPassword: state.loginParentsReducer.inputPassword,
  errorLogin: state.loginParentsReducer.errorLogin,
});

const mapDispatchToProps = dispatch => ({
  handleChangeInputs: (changes) => {
    dispatch(handleChangeInputs(changes));
  },
  handleLogin: () => {
    dispatch(handleLogin());
  },
  handleGetDay: () => {
    dispatch(handleGetTasks());
    dispatch(handleGetParentsNote());
    dispatch(handleGetNannyDayNote());
  },
});

// Container
const LoginParentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginParents);

/**
 * Export
 */
export default LoginParentsContainer;
