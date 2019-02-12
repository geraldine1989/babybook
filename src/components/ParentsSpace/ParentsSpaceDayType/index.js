/**
 * Npm import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Input, Icon, Button, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import './style.scss';
import ParentsNav from 'src/containers/ParentsNav';

/**
 * Code
 */


const ParentsSpaceDayType = ({
  removeTaskDay,
  handleChangeTitleDay,
  inputTitle,
  handleChangeNoteTask,
  inputNoteTask,
  handleChangeHourTask,
  inputHourTask,
  addTask,
  list,
  handleAddNoteDay,
  inputNote,
  addNoteDayFromParents,
  id 
}) => {

  /** Form ajout tache journee type */
  const handleChangeTitle = (event) => {
    const text = event.target.value;
    handleChangeTitleDay(text);
  };

  const handleChangeNotesTask = (event) => {
    const text = event.target.value;
    handleChangeNoteTask(text);
  };

  const handlehour = (event) => {
    console.log(event.target.value);
    const hour = event.target.value;
    handleChangeHourTask(hour);
  };

  const handleSubmitList = (event) => {
    event.preventDefault();
    addTask(inputNoteTask);
  };

  /** ajouter une note pour la journee */

  const handleAddNoteDayInput = (event) => {
    const note = event.target.value;
    handleAddNoteDay(note);
  };

  const handleAddNoteDaySubmit = (event) => {
    event.preventDefault();
    console.log('on a appuyé sur submit');
    addNoteDayFromParents(inputNote);
  };



  const handleDeleteMyDayItem = (id) => () => {
    removeTaskDay(id);
  };


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
  
  return (
    <div className="nav-info">
      <ParentsNav />
      <div id="day-type">
        <ul>
          {
            orderedTasks.map((task) => 
              <li key={task.id}>
                <span className="tasktitle">{task.name}</span>
                <span className="taskhour">{task.hour}</span>
                <span className="tasknote">{task.indic}</span>
                <Icon name="delete" onClick={handleDeleteMyDayItem(task.id)} className="close"/>
              </li>         
            )
          }
          
        </ul>
        <div id="add-item">
          <Form className="form-add-item" onSubmit={handleSubmitList}>
            <Form.Field className="input-task-title" >
              <label> Titre </label>
              <input 
                placeholder="Titre"
                value={inputTitle}
                onChange={handleChangeTitle}
                         
              />
            </Form.Field>
            <Form.Field className="input-task-hour">
              <label> Heure </label>
              <input 
                type="time" 
                placeholder="Heure"
                onChange={handlehour}
                value={inputHourTask}
                
              />
            </Form.Field>
            <Form.Field className="input-task-note">
              <label> Note </label>
              <input
                type="texte"
                placeholder="Note"
                value={inputNoteTask}
                onChange={handleChangeNotesTask}
                
              />
            </Form.Field>
            <Button icon type="submit" >
              Ajouter cette tâche pour la journée
            </Button>
          </Form>
        </div>
        <div id="add-note">
          <p>Ajouter une note pour cette journée</p>
          <Form className="form-add-note" onSubmit={handleAddNoteDaySubmit}>   
              <input placeholder='Ajoutez une note' value={inputNote} onChange={handleAddNoteDayInput} />
              <Button icon type="submit">
                <Icon name="add"  />
              </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

ParentsSpaceDayType.propTypes = {
  handleChangeTitleDay: PropTypes.func.isRequired,
  inputTitle: PropTypes.string.isRequired,
  handleChangeNoteTask: PropTypes.func.isRequired,
  inputNoteTask: PropTypes.string.isRequired,
  handleChangeHourTask: PropTypes.func.isRequired,
  inputHourTask: PropTypes.string.isRequired,
  addTask: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  handleAddNoteDay: PropTypes.func.isRequired,
  inputNote: PropTypes.string.isRequired,
  addNoteDayFromParents: PropTypes.func.isRequired,
  removeTaskDay: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default ParentsSpaceDayType;
