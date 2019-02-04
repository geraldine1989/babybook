/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import ParentsNav from 'src/components/ParentsSpace/ParentsNav';
import { handleGetContacts } from 'src/store/reducers/ParentsSpaceContactsReducer';
import { getChild } from 'src/store/reducers/ParentsSpaceInfoReducer';
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
  handleGetTasks: () => {
    dispatch(handleGetTasks());
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
