/**
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

/**
 * Local import
 */
import MainNav from 'src/components/MainNav';
import LoginParents from 'src/components/LoginParents';
import { handleLogout } from 'src/store/reducers/login-parents-reducer';
import { handleGetTasks } from 'src/store/reducers/myday';
import { getChild, getMeds, getVaccines, getAllergies, getPhone } from 'src/store/reducers/ParentsSpaceInfoReducer';
import { handleGetParentsNote, handleGetNannyDayNote } from '../store/reducers/myday';

// Action Creators

const mapStateToProps = state => ({
  parent: state.loginParentsReducer.parent,
});

const mapDispatchToProps = dispatch => ({
  handleLogout: () => {
    dispatch(handleLogout());
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
)(MainNav, LoginParents);

/**
 * Export
 */
export default withRouter(MainNavContainer);
