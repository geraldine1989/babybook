/**
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
import MainNav from 'src/components/MainNav';
import { handleLogoutParent } from 'src/store/reducers/login-parents-reducer';
import { handleLogoutNanny } from 'src/store/reducers/login-nanny-reducer';
import { handleGetTasks } from 'src/store/reducers/myday';
import { getChild, getMeds, getVaccines, getAllergies, getPhone } from 'src/store/reducers/ParentsSpaceInfoReducer';
import { handleGetParentsNote, handleGetNannyDayNote } from '../store/reducers/myday';

// Action Creators

const mapStateToProps = state => ({
  loggedParent: state.loginParentsReducer.loggedParent,
  loggedNanny: state.loginNannyReducer.loggedNanny,
});

const mapDispatchToProps = dispatch => ({
  handleLogoutParent: () => {
    dispatch(handleLogoutParent());
  },
  handleLogoutNanny: () => {
    dispatch(handleLogoutNanny());
  },
  handleGetDay: () => {
    dispatch(handleGetTasks());
    dispatch(handleGetParentsNote());
    dispatch(handleGetNannyDayNote());
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
