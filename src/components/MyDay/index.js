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
const MyDay = ({ list }) => (
 
  <div id="myday">

    <div id="intro">
      <div id="date">
        <h2>Mardi 22 janvier</h2>
        <h3 id="title">Journal de Lilou</h3>
      </div>
   

      <div className="info-day">
        
        <p id="note-parents">
          Pas d'indications particulières pour cette journée.
        </p>
      </div>
    </div>

    <div id="list">
      {
        list.map(task => 
          <div className="task">
            <Button className="list-button" circular icon="utensils" />
            <div className="list-item">{task.name}</div>
            <div className="time">{task.hour}</div>
            <div className="note">{task.indic}</div>
            
            <form className="add-name-input">
              <input  placeholder="Ajouter une note..." />
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
        <p>Aucune note pour la journée</p>
          
        <Form className="form-add-note-day">
          <Form.Field>
            <Input icon={{ name: 'add', link: true }} placeholder='Ajoutez une note' />
          </Form.Field>
      </Form>        
      </div>
    </div>
  </div>
);

MyDay.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
};


/**
 * Export
 */
export default MyDay;
