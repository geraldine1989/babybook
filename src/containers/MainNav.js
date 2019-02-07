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
import { handleGetTasks } from 'src/store/reducers/myday';
import { getChild, getMeds, getVaccines, getAllergies, getPhone } from 'src/store/reducers/ParentsSpaceInfoReducer';

// Action Creators

const mapStateToProps = state => ({
  parent: state.loginParentsReducer.parent,
});

const mapDispatchToProps = dispatch => ({
  handleLogout: () => {
    dispatch(handleLogout());
  },
  handleGetTasks: () => {
    dispatch(handleGetTasks());
  },
  handleGetInfos: () => {
    dispatch(getChild());
    dispatch(getMeds());
    dispatch(getVaccines());
    dispatch(getAllergies());
    dispatch(getPhone());
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
