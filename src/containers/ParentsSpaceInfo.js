/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import ParentsSpaceInfo from 'src/components/ParentsSpace/ParentsSpaceInfo';

// Action Creators
import {
  handleChangeFirstName,
  handleChangeLastName,
  handleChangeBirthDate,
  handleChangeMedsItem,
  handleChangeVaccinesItem,
  handleChangeAllergiesItem,
  handleChangePhoneName,
  handleChangePhoneNumber,
  addAllInfos,
} from 'src/store/ParentsSpaceInfoReducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  inputFirstName: state.inputFirstName,
  inputLastName: state.inputLastName,
  inputBirthDate: state.inputBirthDate,
  inputMeds: state.inputMeds,
  inputVaccines: state.inputVaccines,
  inputAllergies: state.inputAllergies,
  inputPhoneName: state.inputPhoneName,
  inputPhoneNumber: state.inputPhoneNumber,
  list: state.allInfosList,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  handleChangeFirstName: (text) => {
    dispatch(handleChangeFirstName(text));
  },
  handleChangeLastName: (text) => {
    dispatch(handleChangeLastName(text));
  },
  handleChangeBirthDate: (date) => {
    dispatch(handleChangeBirthDate(date));
  },
  handleChangeMedsItem: (text) => {
    dispatch(handleChangeMedsItem(text));
  },
  handleChangeVaccinesItem: (text) => {
    dispatch(handleChangeVaccinesItem(text));
  },
  handleChangeAllergiesItem: (text) => {
    dispatch(handleChangeAllergiesItem(text));
  },
  handleChangePhoneName: (text) => {
    dispatch(handleChangePhoneName(text));
  },
  handleChangePhoneNumber: (number) => {
    dispatch(handleChangePhoneNumber(number));
  },
  addAllInfos: (allInfosList) => {
    dispatch(addAllInfos(allInfosList));
  },
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const ParentsSpaceInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ParentsSpaceInfo);

/* 2 temps
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ExampleContainer = createContainer(Example);
*/

/**
 * Export
 */
export default ParentsSpaceInfoContainer;
