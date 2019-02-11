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
  loggedNanny: state.loginNannyReducer.loggedNanny,
  loggedParent: state.loginParentsReducer.loggedParent,
  signed: state.inscriptionReducer.signed
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
