/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import ParentsSpaceInfo from 'src/components/ParentsSpace/ParentsSpaceInfo';

// Action Creators
import { addItem, inputChange, removeItem } from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = state => ({
  input: state.input,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = dispatch => ({
  addItem: (text) => {
    dispatch(addItem(text));
  },
  handleChange: (text) => {
    dispatch(inputChange(text));
  },
  removeItem: (id) => {
    dispatch(removeItem(id));
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
