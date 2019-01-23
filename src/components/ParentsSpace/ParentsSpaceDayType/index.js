/**
 * Npm import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Input, Icon, Button, Form } from 'semantic-ui-react';

/**
 * Local import
 */
import './style.scss';
import ParentsNav from 'src/components/ParentsSpace/ParentsNav';

/**
 * Code
 */
const ParentsSpaceDayType = ({ handleAddItemInList, handleDeleteMyDayItem }) => {

  return (
  <div id="day-type">
    <ul>
      <li>
        <Icon name="smile outline" />
        <span>Sieste</span>
        <span>16h00</span>
        <span>Dort avec doudou</span>
        <Icon name="delete" onClick={handleDeleteMyDayItem} />
      </li>
      <li>
        <Icon name="smile outline" />
        <span>Sieste</span>
        <span>16h00</span>
        <span>Dort avec doudou</span>
        <Icon name="delete" onClick={handleDeleteMyDayItem} />
      </li>
      <li>
        <Icon name="smile outline" />
        <span>Sieste</span>
        <span>16h00</span>
        <span>Dort avec doudou</span>
        <Icon name="delete" onClick={handleDeleteMyDayItem} />
      </li>
    </ul>

    <div id="add-item">
      <Form className="form-add-item">
        <Form.Field>
        <label> Titre </label>
          <input placeholder="Titre" value="" />
        </Form.Field>
        <Form.Field>
        <label> Heure </label>
          <input type="time" placeholder="Heure" value="" />
        </Form.Field>
        <Form.Field>
          <label> Note </label>
          <input type="texte" placeholder="Note" value="" />
        </Form.Field>
        <Button icon type="submit">
          <Icon name="add" onClick={handleAddItemInList} />
        </Button>
      </Form>
    </div>
    <div id="add-note">
      <p>Ajouter une note pour cette journée</p>
      <Form className="form-add-note">
        <Form.Field>
            <Input icon={{ name: 'add', link: true }} placeholder='Ajoutez une note' />
        </Form.Field>
      </Form>
    </div>

  </div>
)};

/**
 * Export
 */
export default ParentsSpaceDayType;
