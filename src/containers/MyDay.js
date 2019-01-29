// Import
import { connect } from 'react-redux';
import MyDay from 'src/components/MyDay';


import { handleAddNoteNoteNounou, AddNoteDaySubmitNounou } from 'src/store/reducer';

// Fonction pour mapper le state du store vers les props


const mapStateToProps = state => ({
  list: state.itemList,
  note: state.note,
  noteNanny: state.noteNanny,
  inputNoteNounou: state.inputNoteNounou,
});
// Fonction pour mapper des dipatch d'action vers les props

const mapDispatchToProps = (dispatch, ownProps) => ({

  handleAddNoteNoteNounou: (text) => {
    dispatch(handleAddNoteNoteNounou(text));
  },

  AddNoteDaySubmitNounou: (note) => {
    dispatch(AddNoteDaySubmitNounou(note));
  },

});


const MyDayContainer = connect(mapStateToProps, mapDispatchToProps)(MyDay);

// Export

export default MyDayContainer;
