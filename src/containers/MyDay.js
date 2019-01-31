// Import
import { connect } from 'react-redux';
import MyDay from 'src/components/MyDay';


import { handleAddNoteNoteNounou, AddNoteDaySubmitNounou, handleAddNoteNoteTaskNounou, AddNoteNoteTaskNounou } from 'src/store/reducers/myday';

// Fonction pour mapper le state du store vers les props


const mapStateToProps = state => ({
  list: state.myday.itemList,
  note: state.myday.note,
  nannyNote: state.myday.nannyNote,
  inputNoteNounou: state.myday.inputNoteNounou,
  
  

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

  AddNoteNoteTaskNounou: (note, id) => {
    dispatch(AddNoteNoteTaskNounou(note, id));
  },
});


const MyDayContainer = connect(mapStateToProps, mapDispatchToProps)(MyDay);

// Export

export default MyDayContainer;
