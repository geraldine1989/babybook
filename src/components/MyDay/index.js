/**
 * Npm import
 */
import React from 'react';
import { Button, TextArea, Form, Icon } from 'semantic-ui-react';

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
      </div>

      <div id="title">
        <h3>Journal de Lilou</h3>
      </div>

      <div id="note-parents">
        <h3>Indications des parents</h3>
        <p>
        Pas d'indications particulières pour cette journée.
        </p>
      </div>
    </div>

    <div id="list">

      <div id="bib-morning">
        <div className="infos">
          <Button className="list-button" circular icon="utensils" />
          <span className="list-item">Biberon</span>
          <span className="time">8:00</span>
          <span className="note">Mettre 5 dosettes avec 150ml d'eau</span>
        </div>
        <form>
          <input placeholder="Ajouter une note..." />
          <Button  className="add-task-button"  circular icon={<Icon  name="add" />} />
        </form>
      </div>

      <div id="bib-lunch">
        <div className="infos">
          <Button className="list-button" circular icon="utensils" />
          <span className="list-item">Biberon</span>
          <span className="time">12:00</span>
          <span className="note">Mettre 3 dosettes avec 90ml d'eau</span>
        </div>
        <form>
          <input placeholder="Ajouter une note..." />
          <Button className="add-task-button" circular icon={<Icon  name="add" />} />
        </form>
      </div>

      <div id="sleep">
        <div className="infos">
          <Button className="list-button" circular icon="moon" />
          <span className="list-item">Sieste</span>
          <span className="time">13:30</span>
          <span className="note">Aucune note particulière</span>
        </div>
        <form>
          <input placeholder="Ajouter une note..." />
          <Button className="add-task-button" circular icon={<Icon  name="add" />} />
        </form>
      </div>

      <div id="bib-snack">
        <div className="infos">
          <Button className="list-button" circular icon="utensil spoon" />
          <span className="list-item">Goûter</span>
          <span className="time">16:00</span>
          <span className="note">Compote de pommes</span>
        </div>
        <form>
          <input placeholder="Ajouter une note..." />
          <Button className="add-task-button" circular icon={<Icon  name="add" />} />
        </form>
        <div className="note-nanny">
          <p>
            A refusé la compote.
          </p>
        </div>
      </div>

      <div id="particular-note">
        <span id="particular-note-title">
        Notes complémentaires
        </span>
        <Form>
          <TextArea autoHeight placeholder="Ajouter une note..." />
          <Form.Button id="submit">Ok !</Form.Button>
        </Form>
      </div>
    </div>
  </div>
);

/**
 * Export
 */
export default MyDay;
