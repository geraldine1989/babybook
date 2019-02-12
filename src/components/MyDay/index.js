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
const MyDay = ({
  id,
  childList,
  list,
  note,
  inputNoteNounou,
  handleAddNoteNoteNounou,
  AddNoteDaySubmitNounou,
  nannyNote,
  handleChangeInputTaskNounou,
  taskCheck,
  addNoteTaskSubmitNounou,
  selctedInput,
  regenerbutton,
  }) => {
  
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
    const id = event.target.getAttribute('datataskinput');
    const text = event.target.value;
    handleChangeInputTaskNounou(text, id);
  };

  // SUBMIT DE LA NOTE DE LA TACHE PAR LA NOUNOU
  const handleAddNoteTaskSubmitNounou = (event) => {
    event.preventDefault();
   const id = event.target.getAttribute('datatasksubmit');
   const text = event.target.getAttribute('dataname');
    
    addNoteTaskSubmitNounou(text, id);
  };

  /** Gestion de la date */
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

  /** Régéner les listes */
  const handleregenerButton = () => {
    regenerbutton();
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
        <div className="newdaydiv">
          <Button className="newdaybutton" onClick={handleregenerButton}>
            Nouvelle journée
          </Button>
        </div>
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
              
              <form className="add-name-input"  onSubmit={handleAddNoteTaskSubmitNounou} datatasksubmit={task.id} dataname={task.selctedInput} >
                <input
                  name={task.selctedInput} 
                  datataskinput = {task.id}
                  placeholder="Ajouter une note..." 
                  value= {task.selctedInput} 
                  onChange={handleAddNoteTaskInputNounou} />
                <Button icon type="submit" className= "add-task-button">
                  <Icon name="add" />
                </Button> 
              </form>  
              <div className="note-nany"> {task.note} </div>
            </div>       
          )
        }
      </div>
      <div id="info-plus">
        <div id="particular-note">
          <div id="particular-note-title">
          Note complémentaire
          </div>
          <p>{nannyNote}</p>
          <Form className="form-add-note-day" onSubmit={handleAddNoteDaySubmitNounou}>   
            <input placeholder='Ajouter une note' value={inputNoteNounou} onChange={handleAddNoteDayInputNounou} />
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
  addNoteTaskSubmitNounou: PropTypes.func.isRequired,
  selctedInput: PropTypes.string,
  regenerbutton: PropTypes.func.isRequired,
  
};
MyDay.defaultProps = {
  selctedInput: '',
};

/**
 * Export
 */
export default MyDay;
