/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import LoginParents from 'src/components/LoginParents';

// Action Creators
import { handleChangeInputs, handleLogin } from 'src/store/reducers/login-reducer';

const mapStateToProps = state => ({
  errorsForm: state.inscriptionReducer.errorsForm,
});

const mapDispatchToProps = dispatch => ({
  handleChangeInputs: (changes) => {
    dispatch(handleChangeInputs(changes));
  },
  handleLogin: () => {
    dispatch(handleLogin());
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
