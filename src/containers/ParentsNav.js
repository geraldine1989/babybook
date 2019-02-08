/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import ParentsNav from 'src/components/ParentsSpace/ParentsNav';
import { handleGetContacts } from 'src/store/reducers/ParentsSpaceContactsReducer';
import { getChild, getMeds, getVaccines, getAllergies, getPhone, getInfos } from 'src/store/reducers/ParentsSpaceInfoReducer';
import { handleGetTasks } from 'src/store/reducers/myday';
// Action Creators

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  handleGetContacts: () => {
    dispatch(handleGetContacts());
  },
  getChild: () => {
    dispatch(getChild());
  },
  getMeds: () => {
    dispatch(getMeds());
  },
  getVaccines: () => {
    dispatch(getVaccines());
  },
  getAllergies: () => {
    dispatch(getAllergies());
  },
  getPhone: () => {
    dispatch(getPhone());
  },
  handleGetTasks: () => {
    dispatch(handleGetTasks());
  },
  handleGetInfos: () => {
    dispatch(getChild());
    dispatch(getMeds());
    dispatch(getVaccines());
    dispatch(getAllergies());
    dispatch(getPhone());
  },
});

// Container
const ParentsNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ParentsNav);

/**
 * Export
 */
export default ParentsNavContainer;
