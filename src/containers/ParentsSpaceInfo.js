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

  addMeds,
  addVaccines,
  addAllergies,
  addChild,
  addPhone,

  removeMeds,
  removeVaccines,
  removeAllergies,
  removeChild,
  removePhone,
} from 'src/store/reducers/ParentsSpaceInfoReducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = state => ({
  inputFirstName: state.ParentsSpaceInfoReducer.inputFirstName,
  inputLastName: state.ParentsSpaceInfoReducer.inputLastName,
  inputBirthDate: state.ParentsSpaceInfoReducer.inputBirthDate,
  inputMeds: state.ParentsSpaceInfoReducer.inputMeds,
  inputVaccines: state.ParentsSpaceInfoReducer.inputVaccines,
  inputAllergies: state.ParentsSpaceInfoReducer.inputAllergies,
  inputPhoneName: state.ParentsSpaceInfoReducer.inputPhoneName,
  inputPhoneNumber: state.ParentsSpaceInfoReducer.inputPhoneNumber,
  medsList: state.ParentsSpaceInfoReducer.medsList,
  vaccinesList: state.ParentsSpaceInfoReducer.vaccinesList,
  allergiesList: state.ParentsSpaceInfoReducer.allergiesList,
  childList: state.ParentsSpaceInfoReducer.childList,
  phoneList: state.ParentsSpaceInfoReducer.phoneList,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = dispatch => ({
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
  handleChangePhoneNumber: (tel) => {
    dispatch(handleChangePhoneNumber(tel));
  },
  addMeds: (medsList) => {
    dispatch(addMeds(medsList));
  },
  addVaccines: (vaccinesList) => {
    dispatch(addVaccines(vaccinesList));
  },
  addAllergies: (allergiesList) => {
    dispatch(addAllergies(allergiesList));
  },
  addChild: (childList) => {
    dispatch(addChild(childList));
  },
  addPhone: (phoneList) => {
    dispatch(addPhone(phoneList));
  },
  removeMeds: (id) => {
    dispatch(removeMeds(id));
  },
  removeVaccines: (id) => {
    dispatch(removeVaccines(id));
  },
  removeAllergies: (id) => {
    dispatch(removeAllergies(id));
  },
  removeChild: (id) => {
    dispatch(removeChild(id));
  },
  removePhone: (id) => {
    dispatch(removePhone(id));
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
