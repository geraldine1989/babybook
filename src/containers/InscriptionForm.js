/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import InscriptionForm from 'src/components/InscriptionForm';

// Action Creators
import { handleChangeInputs, handleInscription } from 'src/store/reducers/inscription-reducer';

const mapStateToProps = state => ({
  // inputEmail: state.inscriptionReducer.inputEmail,
  // inputPassword: state.inscriptionReducer.inputPassword,
  // inputConfirmPassword: state.inscriptionReducer.inputConfirmPassword,
  // inputAccessCode: state.inscriptionReducer.inputAccessCode,
  errorsForm: state.inscriptionReducer.errorsForm,
});

const mapDispatchToProps = dispatch => ({
  handleChangeInputs: (changes) => {
    dispatch(handleChangeInputs(changes));
  },
  handleInscription: () => {
    dispatch(handleInscription());
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
