/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import ParentsSpaceDayType from 'src/components/ParentsSpace/ParentsSpaceDayType';

// Action Creators
import { handleChangeTitleDay, handleChangeNoteTask, handleChangeHourTask, addTask, addNoteDayFromParents, handleAddNoteDay } from 'src/store/reducer';

/* === State (données) ===
 */
const mapStateToProps = (state, ownProps) => ({
  inputTitle: state.inputTitle,
  inputNoteTask: state.inputNoteTask,
  inputHourTask: state.inputHourTask,
  list: state.itemList,
  inputNote: state.inputNote,
  

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

  addTask: (itemList) => {
    dispatch(addTask(itemList));
    console.log('je suis dans le dispacther');
  },

  /** add day note */

  handleAddNoteDay: (text) => {
    dispatch(handleAddNoteDay(text));
  },

  addNoteDayFromParents: (note) => {
    dispatch(addNoteDayFromParents(note));
  },
});

// Container
const ParentsSpaceDayTypeContainer = connect(mapStateToProps, mapDispatchToProps)(ParentsSpaceDayType);



/**
 * Export
 */
export default ParentsSpaceDayTypeContainer;
