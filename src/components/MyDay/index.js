/**
 * Npm import
 */
import React from 'react';
import { Button, TextArea, Form, Icon, Input } from 'semantic-ui-react';

/**
 * Local import
 */
import './style.scss';

/**
 * Code
 */
const MyDay = () => (

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

      <div className="task">
          <Button className="list-button" circular icon="utensils" />
          <div className="list-item">Biberon</div>
          <div className="time">8:00</div>
          <div className="note">Mettre 5 dosettes avec 150ml d'eau</div>
          
          <form className="add-name-input">
            <input  placeholder="Ajouter une note..." />
            <Button  className="add-task-button"  circular icon={<Icon  name="add" />} />
          </form>  
      </div>
      <div className="note-nany"> Pas de notes de la nounou </div>

      <div className="task">
          <Button className="list-button" circular icon="utensils" />
          <div className="list-item">Biberon</div>
          <div className="time">12:00</div>
          <div className="note">Mettre 3 dosettes avec 90ml d'eau</div>
          
          <form className="add-name-input">
            <input  placeholder="Ajouter une note..." />
            <Button  className="add-task-button"  circular icon={<Icon  name="add" />} />
          </form>  
      </div>
      <div className="note-nany"> Pas de notes de la nounou </div>

      <div className="task">
          <Button className="list-button" circular icon="utensils" />
          <div className="list-item">Sieste</div>
          <div className="time">13:30</div>
          <div className="note">Aucune note particulère</div>
          
          <form className="add-name-input">
            <input  placeholder="Ajouter une note..." />
            <Button  className="add-task-button"  circular icon={<Icon  name="add" />} />
          </form>  
      </div>
      <div className="note-nany"> Pas de notes de la nounou </div>

      <div className="task">
          <Button className="list-button" circular icon="utensil spoon" />
          <div className="list-item">Goûter</div>
          <div className="time">16:00</div>
          <div className="note">Compote de pommes</div>
          
          <form className="add-name-input">
            <input  placeholder="Ajouter une note..." />
            <Button  className="add-task-button"  circular icon={<Icon  name="add" />} />
          </form>  
      </div>
      <div className="note-nany-activ"> Plus qu'une compote restante </div>
  </div>

    <div id="info-plus">
      <div id="particular-note">
        <div id="particular-note-title">
        Notes complémentaires
        </div>
        <p>Aucune note pour journée</p>
          
        <Form className="form-add-note-day">
          <Form.Field>
            <Input icon={{ name: 'add', link: true }} placeholder='Ajoutez une note' />
          </Form.Field>
      </Form>        
      </div>
    </div>
  </div>
);

/**
 * Export
 */
export default MyDay;
