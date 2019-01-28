// Import
import { connect } from 'react-redux';
import MyDay from 'src/components/MyDay';


// import {  } from 'src/store/reducer';

// Fonction pour mapper le state du store vers les props


const mapStateToProps = state => ({
  list: state.itemList,
});
// Fonction pour mapper des dipatch d'action vers les props

const mapDispatchToProps = {};


const MyDayContainer = connect(mapStateToProps, mapDispatchToProps)(MyDay);

// Export

export default MyDayContainer;
