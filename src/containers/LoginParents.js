/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import LoginParents from 'src/components/LoginParents';

// Action Creators
import { handleChangeInputs, handleLogin, handleGetDay } from 'src/store/reducers/login-parents-reducer';

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
    dispatch(handleGetDay());
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
