/**
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
import MainNav from 'src/components/MainNav';

// Action Creators

const mapStateToProps = state => ({
  logged: state.loginParentsReducer.logged,
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
export default withRouter(MainNavContainer);
