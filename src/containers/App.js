/**
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
import App from 'src/components/App';

// Action Creators

const mapStateToProps = state => ({
  logged: state.loginParentsReducer.logged,
});

const mapDispatchToProps = () => ({});

// Container

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

/**
 * Export
 */
export default withRouter(AppContainer);
