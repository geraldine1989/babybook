/**
 * Npm import
 */
import React from 'react';
import { Button, Input } from 'semantic-ui-react';

/**
 * Local import
 */
import './style.scss';
import 'semantic-ui-css/semantic.min.css';

/**
 * Code
 */
const MyDay = () => (
  <div id="container">
    <div id="header">
      <h1>
      Baby Book
      </h1>
    </div>
    <div id="myday">
      <div id="date">
      Lundi 21 janvier
      </div>
      <div id="title">
      Journal de Lilou
      </div>
      <div id="list">
        <div id="bib-morning">
          <Button circular icon="coffee" />
          <p className="list-item">Biberon</p>
          <p className="time">8:00</p>
          <p className="note">Mettre 5 dosettes avec 150ml d'eau</p>
          <Input placeholder="Ajouter une note..." />
        </div>
        <div id="bib-lunch">
          <Button circular icon="utensils" />
          <p className="list-item">Biberon</p>
          <p className="time">12:00</p>
          <p className="note">Mettre 3 dosettes avec 90ml d'eau</p>
          <Input placeholder="Ajouter une note..." />
        </div>
        <div id="sleep">
          <Button circular icon="moon" />
          <p className="list-item">Sieste</p>
          <p className="time">13:30</p>
          <p className="note">Aucune note particulière</p>
          <Input placeholder="Ajouter une note..." />
        </div>
        <div id="bib-snack">
          <Button circular icon="utensil spoon" />
          <p className="list-item">Goûter</p>
          <p className="time">16:00</p>
          <p className="note">Compote de pommes</p>
          <Input placeholder="Ajouter une note..." />
        </div>
      </div>
      <div id="particular-note">
        <p>
        Notes complémentaires
        </p>
        <Input placeholder="Ajouter une note..." />
      </div>
    </div>
  </div>
);

/**
 * Export
 */
export default MyDay;
