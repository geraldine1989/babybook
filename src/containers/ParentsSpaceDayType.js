/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import ParentsSpaceDayType from 'src/components/ParentsSpace/ParentsSpaceDayType';

// Action Creators
import { handleChangeTitleDay, handleChangeNoteTask, handleChangeHourTask } from 'src/store/reducer';

/* === State (données) ===
 */
const mapStateToProps = (state, ownProps) => ({
  inputTitle: state.inputTitle,
  inputNoteTask: state.inputNoteTask,
  inputHourTask: state.inputHourTask,
});

/* === Actions ===
 */
const mapDispatchToProps = (dispatch, ownProps) => ({

  handleChangeTitleDay: (text) => {
    dispatch(handleChangeTitleDay(text));
  },

  handleChangeNoteTask: (text) => {
    dispatch(handleChangeNoteTask(text));
  },

  handleChangeHourTask: (hour) => {
    dispatch(handleChangeHourTask(hour));
  },
});

// Container
const ParentsSpaceDayTypeContainer = connect(mapStateToProps, mapDispatchToProps)(ParentsSpaceDayType);



/**
 * Export
 */
export default ParentsSpaceDayTypeContainer;
