// Import
import { connect } from 'react-redux';
import MyDay from 'src/components/MyDay';


import { handleAddNoteNoteNounou, AddNoteDaySubmitNounou, taskCheck, handleChangeInputTaskNounou, addNoteTaskSubmitNounou, regenerbutton } from 'src/store/reducers/myday';
import { } from 'src/store/reducers/ParentsSpaceInfoReducer';
// Fonction pour mapper le state du store vers les props


const mapStateToProps = state => ({
  list: state.myday.itemList,
  note: state.myday.note,
  nannyNote: state.myday.nannyNote,
  inputNoteNounou: state.myday.inputNoteNounou,
  childList: state.ParentsSpaceInfoReducer.childList,
});
// Fonction pour mapper des dipatch d'action vers les props

const mapDispatchToProps = (dispatch, ownProps) => ({

  handleAddNoteNoteNounou: (text) => {
    dispatch(handleAddNoteNoteNounou(text));
  },

  AddNoteDaySubmitNounou: (note) => {
    dispatch(AddNoteDaySubmitNounou(note));
  },

  
  // changement input tache nounou
  handleChangeInputTaskNounou: (text, id) => {
    dispatch(handleChangeInputTaskNounou(text, id));
  },

  /** Submit de la note pour la la tache par la nounou */
  addNoteTaskSubmitNounou: (text, id) => {
    dispatch(addNoteTaskSubmitNounou(text, id));
  },

  taskCheck: (id) => {
    dispatch(taskCheck(id));
  },
  regenerbutton: () => {
    dispatch(regenerbutton());
  },
});


const MyDayContainer = connect(mapStateToProps, mapDispatchToProps)(MyDay);

// Export

export default MyDayContainer;
