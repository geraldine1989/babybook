/**
 * Npm import
 */
import React from 'react';
import { Button, Input, TextArea, Form } from 'semantic-ui-react';

/**
 * Local import
 */
import './style.scss';

/**
 * Code
 */
const MyDay = () => (

  <div id="myday">
    <div id="date">
      Mardi 22 janvier
    </div>

    <div id="title">
      Journal de Lilou
    </div>

    <div id="list">

      <div id="bib-morning">
        <div className="infos">
          <Button circular icon="coffee" />
          <span className="list-item">Biberon</span>
          <span className="time">8:00</span>
          <span className="note">Mettre 5 dosettes avec 150ml d'eau</span>
        </div>
        <Input className="note-input" placeholder="Ajouter une note..." />
      </div>

      <div id="bib-lunch">
        <div className="infos">
          <Button circular icon="utensils" />
          <span className="list-item">Biberon</span>
          <span className="time">12:00</span>
          <span className="note">Mettre 3 dosettes avec 90ml d'eau</span>
        </div>
        <Input className="note-input" placeholder="Ajouter une note..." />
      </div>

      <div id="sleep">
        <div className="infos">
          <Button circular icon="moon" />
          <span className="list-item">Sieste</span>
          <span className="time">13:30</span>
          <span className="note">Aucune note particulière</span>
        </div>
        <Input className="note-input" placeholder="Ajouter une note..." />
      </div>

      <div id="bib-snack">
        <div className="infos">
          <Button circular icon="utensil spoon" />
          <span className="list-item">Goûter</span>
          <span className="time">16:00</span>
          <span className="note">Compote de pommes</span>
        </div>
        <Input className="note-input" placeholder="Ajouter une note..." />
      </div>

      <div id="particular-note">
        <span>
        Notes complémentaires
        </span>
        <Form>
          <TextArea autoHeight className="note-input" placeholder="Ajouter une note..." />
          <Form.Button id="submit" color="teal">Envoyer</Form.Button>
        </Form>
      </div>
    </div>
  </div>
);

/**
 * Export
 */
export default MyDay;
