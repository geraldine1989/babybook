/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import MainNav from 'src/components/MainNav';

// Action Creators

const mapStateToProps = state => ({
  parent: state.loginParentsReducer.parent,
});

const mapDispatchToProps = () => ({});

// Container
const MainNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainNav);

/**
 * Export
 */
export default MainNavContainer;
