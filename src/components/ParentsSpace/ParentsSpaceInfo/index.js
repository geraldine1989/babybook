
import React from 'react';
import PropsTypes from 'prop-types';
import { Form, Button, Card, Icon, Input } from 'semantic-ui-react';

// Local imports
import './style.scss';
import 'semantic-ui-css/semantic.min.css';


const ParentsSpaceInfo = () => (
  <div id="modif-informations">
    <div id="modif-child">

      <h3>Enfant</h3>
      <Form id="modif-child-name">
        <Form.Input type="text" placeholder="Prénom de l'enfant" />
        <Form.Input type="text" placeholder="Nom de l'enfant" />
      </Form>

      <h3>Date de naissance</h3>
      <Form id="modif-birthdate">
        <Form.Input type="date" />
      </Form>
    </div>

    <div id="modif-health">
      <h3>Santé</h3>
      <div id="cards">
        <div className="cards-item">
          <div className="header">Traitement en cours</div>
            
          <div className="delete-item">
            <li>Doliprane <Button icon type="submit">
              <Icon name="delete" />
              </Button></li>
            <li>Smecta <Button icon type="submit">
              <Icon name="delete" />
              </Button></li>
          </div>
          
          <Form className="add-sante">
              <Form.Field>
                <Input icon={{ name: 'add', link: true }} placeholder='Ajoutez un médicament' />
              </Form.Field>
          </Form>
        </div>

        <div className="cards-item">
          <div className="header">Vaccins</div>
            
          <div className="delete-item">
            <li>Rubéole : fait le 09/09/17 <Button icon type="submit">
              <Icon name="delete" />
              </Button></li>
            <li>Rage : fait le 09/09/17 <Button icon type="submit">
              <Icon name="delete" />
              </Button></li>
          </div>
          
          <Form className="add-sante">
              <Form.Field>
                <Input icon={{ name: 'add', link: true }} placeholder='Ajoutez le vaccin et sa date' />
              </Form.Field>
          </Form>
        </div>

        <div className="cards-item">
          <div className="header">Allergies</div>
            
          <div className="delete-item">
            <li>Cacahuètes <Button icon type="submit">
              <Icon name="delete" />
              </Button></li>
            
          </div>
          
          <Form className="add-sante">
              <Form.Field>
                <Input icon={{ name: 'add', link: true }} placeholder='Ajoutez un allergene' />
              </Form.Field>
          </Form>

        </div>
      </div>
    </div>

    <div id="modif-numeros">
      <h3>Numéros utiles</h3>
      <div id="modif-numeros-div">
        <Form id="child-contact">
          <Form.Input type="text" placeholder="Nom et prénom" />
          <Form.Input type="number" placeholder="Numéro de téléphone" />
        </Form>
      </div>
    </div>

    <div id="save">
      <Button>Sauvegarder</Button>
    </div>

  </div>


);

ParentsSpaceInfo.propTypes = {
};

export default ParentsSpaceInfo;
