/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Home from 'src/components/Home';

// Action Creators
import { handleGetEmails } from 'src/store/reducers/inscription-reducer';

const mapStateToProps = state => ({
  emails: state.inscriptionReducer.inputEmail,
  logged: state.loginParentsReducer.logged,
});

const mapDispatchToProps = dispatch => ({
  handleGetEmails: () => {
    dispatch(handleGetEmails());
  },
});

// Container

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

/**
 * Export
 */
export default HomeContainer;
