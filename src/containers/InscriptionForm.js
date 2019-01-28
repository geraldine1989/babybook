/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import InscriptionForm from 'src/components/InscriptionForm';

// Action Creators
import { handleChangeInputs, inscription } from 'src/store/reducer';

const mapStateToProps = state => ({
  inputEmail: state.inputEmail,
  inputPassword: state.inputPassword,
  inputConfirmPassword: state.inputConfirmPassword,
  inputAccessCode: state.inputAccessCode,
  errorsForm: state.errorsForm,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleChangeInputs: (changes) => {
    dispatch(handleChangeInputs(changes));
  },
  inscription: () => {
    dispatch(inscription());
  },
});

// Container

const InscriptionFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(InscriptionForm);

/**
 * Export
 */
export default InscriptionFormContainer;
