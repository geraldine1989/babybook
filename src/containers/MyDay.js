// Import
import { connect } from 'react-redux';
import MyDay from 'src/components/MyDay';


import { handleAddNoteNoteNounou, AddNoteDaySubmitNounou, handleAddNoteNoteTaskNounou, AddNoteNoteTaskNounou, taskCheck, handleChangeInputTaskNounou } from 'src/store/reducers/myday';
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

  handleAddNoteNoteTaskNounou: (modif) => {
    dispatch(handleAddNoteNoteTaskNounou(modif));
  },
  // changement input tache nounou
  handleChangeInputTaskNounou: (text, id) => {
    dispatch(handleChangeInputTaskNounou(text, id));
  },
  AddNoteNoteTaskNounou: (note, id) => {
    dispatch(AddNoteNoteTaskNounou(note, id));
  },

  taskCheck: (id) => {
    dispatch(taskCheck(id));
  },
});


const MyDayContainer = connect(mapStateToProps, mapDispatchToProps)(MyDay);

// Export

export default MyDayContainer;
