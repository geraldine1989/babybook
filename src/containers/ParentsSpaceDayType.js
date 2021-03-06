/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import ParentsSpaceDayType from 'src/components/ParentsSpace/ParentsSpaceDayType';

// Action Creators
import { handleChangeTitleDay, handleChangeNoteTask, handleChangeHourTask, addTask, addNoteDayFromParents, handleAddNoteDay, removeTaskDay } from 'src/store/reducers/myday';

/* === State (données) ===
 */
const mapStateToProps = (state, ownProps) => ({
  inputTitle: state.myday.inputTitle,
  inputNoteTask: state.myday.inputNoteTask,
  inputHourTask: state.myday.inputHourTask,
  list: state.myday.itemList,
  inputNote: state.myday.inputNote,
  

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

  removeTaskDay: (id) => {
    dispatch(removeTaskDay(id));
  },
});

// Container
const ParentsSpaceDayTypeContainer = connect(mapStateToProps, mapDispatchToProps)(ParentsSpaceDayType);



/**
 * Export
 */
export default ParentsSpaceDayTypeContainer;
