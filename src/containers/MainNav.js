/**
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
import MainNav from 'src/components/MainNav';
import { handleLogout } from 'src/store/reducers/login-parents-reducer';

// Action Creators

const mapStateToProps = state => ({
  parent: state.loginParentsReducer.parent,
});

const mapDispatchToProps = dispatch => ({
  handleLogout: () => {
    dispatch(handleLogout());
  },
});

// Container
const MainNavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainNav);

/**
 * Export
 */
export default withRouter(MainNavContainer);
