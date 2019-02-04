/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import ParentsNav from 'src/components/ParentsSpace/ParentsNav';
import { handleGetContacts } from 'src/store/reducers/ParentsSpaceContactsReducer';
<<<<<<< HEAD
import { getChild } from 'src/store/reducers/ParentsSpaceInfoReducer';
=======
>>>>>>> 792436bbc55a60bb5bad9c9edf452dad443e8052
// Action Creators

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  handleGetContacts: () => {
    dispatch(handleGetContacts());
  },
<<<<<<< HEAD
  getChild: () => {
    dispatch(getChild());
  },
=======
>>>>>>> 792436bbc55a60bb5bad9c9edf452dad443e8052
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
