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
import ParentsNav from 'src/components/ParentsSpace/ParentsNav';

/**
 * Code
 */

/** Test mongo db */

const addDayType = (formDatas) => {
  const axios = require('axios');
  axios.post('http://localhost:3000/newday', formDatas)
    .then((response) => {
      console.log(response);
    })

    .catch((error) => {
      console.log(error);
    });
}


const handleAddItemInList = (evt) => {
  evt.preventDefault();
  const formDatas = {
    date: '01/02/2000',
    note: 'Ceci est une note des parents pour la journée.',
    itemList: [
      {
        name: 'Biberon',
        hour: '08:00',
        indic: 'Mettre 3 dosettes avec 250 cl de lait',
        note: 'Tototounet a tout bu !!!',
      },
    ],
  };

  addDayType(formDatas);
};

const ParentsSpaceDayType = ({ handleDeleteMyDayItem, handleChangeTitleDay, inputTitle, handleChangeNoteTask, inputNoteTask, handleChangeHourTask, inputHourTask, addTask, list }) => {

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


  return (
    <div>
      <ParentsNav />
      <div id="day-type">
        <ul>
          {
            list.map((task) => 
              <li>
                <Icon name="smile outline" />
                <span>{task.name}</span>
                <span>{task.hour}</span>
                <span>{task.indic}</span>
                <Icon name="delete" onClick={handleDeleteMyDayItem} />
              </li>
              
            )
          }
          
        </ul>
        <div id="add-item">
          <Form className="form-add-item" onSubmit={handleSubmitList}>
            <Form.Field>
              <label> Titre </label>
              <input 
                placeholder="Titre"
                value={inputTitle}
                onChange={handleChangeTitle}          
              />
            </Form.Field>
            <Form.Field>
              <label> Heure </label>
              <input 
                type="time" 
                placeholder="Heure"
                onChange={handlehour}
                value={inputHourTask}
              />
            </Form.Field>
            <Form.Field>
              <label> Note </label>
              <input 
                type="texte"
                placeholder="Note" 
                value={inputNoteTask}
                onChange={handleChangeNotesTask}
              />
            </Form.Field>
            <Button icon type="submit" >
              <Icon name="add" />
            </Button>
          </Form>
        </div>
        <div id="add-note">
          <p>Ajouter une note pour cette journée</p>
          <Form className="form-add-note">
            <Form.Field className="form-field">
              <Input icon={{ name: 'add', link: true }} placeholder='Ajoutez une note' />
            </Form.Field>
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
};

/**
 * Export
 */
export default ParentsSpaceDayType;
