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

/**
 * Code
 */
/* eslint-disable no-case-declarations */
const MyDay = ({ list, note, inputNoteNounou, handleAddNoteNoteNounou, AddNoteDaySubmitNounou, nannyNote, inputNoteNounouTask, handleAddNoteNoteTaskNounou, AddNoteNoteTaskNounou }) => {
  
  /** Input ajout note nounou journées */
  const handleAddNoteDayInputNounou = (event) => {
    const text = event.target.value;
    handleAddNoteNoteNounou(text);
  };

  const handleAddNoteDaySubmitNounou = (event) => {
    event.preventDefault();
    AddNoteDaySubmitNounou(inputNoteNounou);
  };

  const handleAddNoteTaskInputNounou = (event) => {
    const { name, value } = event.target;
    const modif = {
      [name]: value,
    }
    // console.log(current.target);
    handleAddNoteNoteTaskNounou(modif);
  };

  const handleAddNoteTaskSubmitNounou = (event) => {
    
    const {text} = event.target.value;
    AddNoteNoteTaskNounou(text);
  };

  
  return (
    <div id="myday">
      <div id="intro">
        <div id="date">
          <h2>Mardi 22 janvier</h2>
          <h3 id="title">Journal de Lilou</h3>
        </div>
        <div className="info-day">    
          <p id="note-parents">
            <span className="note-parents">  Note des parents : </span> {note}
          </p>
        </div>
      </div>
      <div id="list">
        {
          list.map(task => 
            <div
              className="task"
              key= {task.id}
              id={task.id}
            >
              <Button className="list-button" circular icon="utensils" />
              <div className="list-item">{task.name}</div>
              <div className="time">{task.hour}</div>
              <div className="note">{task.indic}</div>
              
              <form className="add-name-input">
                <input 
                  name={task.id}
                  placeholder="Ajouter une note..." 
                  value= {inputNoteNounouTask[task.id]} 
                  onChange={handleAddNoteTaskInputNounou} />
                <Button  className="add-task-button"  circular icon={<Icon  name="add" /> } onSubmit={handleAddNoteTaskSubmitNounou}/>
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
  inputNoteNounouTask: PropTypes.string.isRequired,
  handleAddNoteNoteTaskNounou: PropTypes.func.isRequired,
  AddNoteNoteTaskNounou: PropTypes.func.isRequired,
  
};


/**
 * Export
 */
export default MyDay;
