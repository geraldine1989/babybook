// Import
import { connect } from 'react-redux';
import MyDay from 'src/components/MyDay';


import { handleAddNoteNoteNounou, AddNoteDaySubmitNounou, handleAddNoteNoteTaskNounou, AddNoteNoteTaskNounou } from 'src/store/myday';

// Fonction pour mapper le state du store vers les props


const mapStateToProps = state => ({
  list: state.itemList,
  note: state.note,
  nannyNote: state.nannyNote,
  inputNoteNounou: state.inputNoteNounou,
  inputNoteNounouTask: state.inputNoteNounouTask,
  

});
// Fonction pour mapper des dipatch d'action vers les props

const mapDispatchToProps = (dispatch, ownProps) => ({

  handleAddNoteNoteNounou: (text) => {
    dispatch(handleAddNoteNoteNounou(text));
  },

  AddNoteDaySubmitNounou: (note) => {
    dispatch(AddNoteDaySubmitNounou(note));
  },

  handleAddNoteNoteTaskNounou: (text, id) => {
    dispatch(handleAddNoteNoteTaskNounou(text, id));
  },

  AddNoteNoteTaskNounou: (note, id) => {
    dispatch(AddNoteNoteTaskNounou(note, id));
  },
});


const MyDayContainer = connect(mapStateToProps, mapDispatchToProps)(MyDay);

// Export

export default MyDayContainer;
