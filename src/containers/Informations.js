/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Informations from 'src/components/Informations';

// Action Creators
import { } from 'src/store/ParentsSpaceInfoReducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state, ownProps) => ({
  childList: state.childList,
  birthDateList: state.birthDateList,
  medsList: state.medsList,
  vaccinesList: state.vaccinesList,
  allergiesList: state.allergiesList,
  phoneList: state.phoneList,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch, ownProps) => ({
  doSomething: () => {
    dispatch();
  },
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const InformationsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Informations);

/* 2 temps
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ExampleContainer = createContainer(Example);
*/

/**
 * Export
 */
export default InformationsContainer;
