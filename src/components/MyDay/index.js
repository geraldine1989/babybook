/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, TextArea, Form, Icon, Input } from 'semantic-ui-react';

/**
 * Local import
 */
import './style.scss';
import { ID } from 'postcss-selector-parser';

/**
 * Code
 */
/* eslint-disable no-case-declarations */
const MyDay = ({id, childList, list, note, inputNoteNounou, handleAddNoteNoteNounou, AddNoteDaySubmitNounou, nannyNote, handleChangeInputTaskNounou, taskCheck }) => {
  
  /** Input ajout note nounou journées */
  const handleAddNoteDayInputNounou = (event) => {
    const text = event.target.value;
    console.log(event);
    handleAddNoteNoteNounou(text);
  };

  const handleAddNoteDaySubmitNounou = (event) => {
    event.preventDefault();
    AddNoteDaySubmitNounou(inputNoteNounou);
  };

  /** Je veux envoyer au store une fonction qui prenne en compte l'id et le event.target.value */
  const handleAddNoteTaskInputNounou = (event) => {
    // console.log(event.target);
    // const { name, value } = event.target;
    // const modif = {ID
    //   [name]: value,
    // };
    // console.log('je suis dans le composant' + modif);
    //const modif = event.target.value;
    const id = event.target.getAttribute('data-task-id');
    const text = event.target.value;
    console.log('id tapé ', id);
    console.log('event tapé ', text);
    handleChangeInputTaskNounou(text, id);
  };

  const dayDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  

  

  /** Affichage par heure */
  const compare = (a, b) => {
    if (a.hour < b.hour)
      return -1;
    if (a.hour > b.hour)
      return 1;
    return 0;
  };
  const orderedTasks = [
    ...list.sort(compare),
  ]; 

  /** Changer la couleur du bouton au check */
  const handleCheck = (id) => () => {
    console.log('je suis checke');
    taskCheck(id);
  };

  return (
    <div id="myday">
      <div id="intro">
        <div id="date">
          <h2>{dayDate.toLocaleDateString('fr-CA', options)}</h2>
          { childList.map(enfant => <h3 id="title"> Journal de  {enfant.firstname}</h3>) }
        </div>
        <div className="info-day">    
          <p id="note-parents">
            <span className="note-parents">  Note des parents : </span> {note}
          </p>
        </div>
      </div>
      <div id="list">
        {
          orderedTasks.map(task => 
            <div
              className="task"
              key= {task.id}
              id={task.id}
            >
              <Button
              /** list-button todo-done  */
              className={task.tododone}
              circular
              icon="utensils"
              onClick={handleCheck(task.id)}
              />
              <div className="list-item">{task.name}</div>
              <div className="time">{task.hour}</div>
              <div className="note">{task.indic}</div>
              
              <form className="add-name-input"  /*onSubmit={handleAddNoteTaskSubmitNounou}*/>
                <input
                  name={task.selctedInput} 
                  data-task-id = {task.id}
                  placeholder="Ajouter une note..." 
                  value= {task.selctedInput} 
                  onChange={handleAddNoteTaskInputNounou} />
                <Button  className="add-task-button"  circular icon={<Icon  name="add" />} />
              </form>  
              <div className="note-nany"> Pas de notes de la nounou </div>
            </div>       
          )
        }
      </div>
      <div id="info-plus">
        <div id="particular-note">
          <div id="particular-note-title">
          Notes complémentaires
          </div>
          <p>{nannyNote}</p>
          <Form className="form-add-note-day" onSubmit={handleAddNoteDaySubmitNounou}>   
            <input placeholder='Ajoutez une note' value={inputNoteNounou} onChange={handleAddNoteDayInputNounou} />
            <Button icon type="submit">
              <Icon name="add" />
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

MyDay.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  note: PropTypes.string.isRequired,
  inputNoteNounou: PropTypes.string.isRequired,
  handleAddNoteNoteNounou: PropTypes.func.isRequired,
  AddNoteDaySubmitNounou: PropTypes.func.isRequired,
  nannyNote: PropTypes.string.isRequired,
  handleChangeInputTaskNounou: PropTypes.func.isRequired,
  taskCheck: PropTypes.func.isRequired,
  
};


/**
 * Export
 */
export default MyDay;
