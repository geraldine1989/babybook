/**
 * Npm import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Input, Icon, Button, Select } from 'semantic-ui-react';

/**
 * Local import
 */
import './style.scss';

/**
 * Code
 */
const ParentsSpaceDayType = ({ handleAddItemInList, handleDeleteMyDayItem }) => {

  return (
  <div id="day-type">
    <h3>Journée type prévue</h3>
    <ul>
      <li>
        <Icon name="smile outline" size="big" />
        <h4>Sieste</h4>
        <h4>16h00</h4>
        <p>Dort avec doudou</p>
        <Icon name="close" size="big" onClick={handleDeleteMyDayItem} />
      </li>
      <li>
        <Icon name="smile outline" size="big" />
        <h4>Sieste</h4>
        <h4>16h00</h4>
        <p>Dort avec doudou</p>
        <Icon name="close" size="big" onClick={handleDeleteMyDayItem} />
      </li>
      <li>
        <Icon name="smile outline" size="big" />
        <h4>Sieste</h4>
        <h4>16h00</h4>
        <p>Dort avec doudou</p>
        <Icon name="close" size="big" onClick={handleDeleteMyDayItem} />
      </li>
    </ul>
    <div id="add-item">
      <Input placeholder="Titre" value="" />
      <Input placeholder="Heure" value="" />
      <Input placeholder="Note" value="" />
      <Icon name="check" size="big" onClick={handleAddItemInList} />
    </div>
    <div id="group">
      <p>Ajouter une note pour cette journée</p>
      <Input />
      <Icon name="plus" size="big" />
    </div>

  </div>
)};

/**
 * Export
 */
export default ParentsSpaceDayType;
