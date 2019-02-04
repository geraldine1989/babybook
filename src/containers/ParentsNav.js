/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import ParentsNav from 'src/components/ParentsSpace/ParentsNav';
import { handleGetContacts } from 'src/store/reducers/ParentsSpaceContactsReducer';
// Action Creators

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  handleGetContacts: () => {
    dispatch(handleGetContacts());
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
