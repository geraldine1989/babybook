/**
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
import App from 'src/components/App';
import { StepTitle } from 'semantic-ui-react';

// Action Creators

const mapStateToProps = state => ({
  logged: state.loginParentsReducer.logged,
  parent: state.loginParentsReducer.parent
  // registered: state.inscriptionReducer.registered,
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
