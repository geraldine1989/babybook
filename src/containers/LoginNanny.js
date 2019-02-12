/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import LoginNanny from 'src/components/LoginNanny';

// Action Creators
import { handleChangeInputsNanny, handleLoginNanny } from 'src/store/reducers/login-nanny-reducer';
import { handleGetTasks, handleGetParentsNote, handleGetNannyDayNote } from 'src/store/reducers/myday';

const mapStateToProps = state => ({
  inputEmailNanny: state.loginNannyReducer.inputEmailNanny,
  inputPasswordNanny: state.loginNannyReducer.inputPasswordNanny,
  errorLoginNanny: state.loginNannyReducer.errorLoginNanny,
});

const mapDispatchToProps = dispatch => ({
  handleChangeInputsNanny: (changes) => {
    dispatch(handleChangeInputsNanny(changes));
  },
  handleLoginNanny: () => {
    dispatch(handleLoginNanny());
  },
  handleGetDay: () => {
    dispatch(handleGetTasks());
    dispatch(handleGetParentsNote());
    dispatch(handleGetNannyDayNote());
  },
});

// Container
const LoginNannyContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginNanny);

/**
 * Export
 */
export default LoginNannyContainer;
