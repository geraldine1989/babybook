
import React from 'react';
import PropsTypes from 'prop-types';
import { Form, Button, Card, Icon } from 'semantic-ui-react';

// Local imports
import './style.scss';
import 'semantic-ui-css/semantic.min.css';


const ParentsSpaceInfo = () => (
  <div id="informations">
    <h2>Informations</h2>
    <div id="child">

      <h3>Enfant</h3>
      <Form id="child-name">
        <Form.Input type="text" placeholder="Prénom de l'enfant" />
        <Form.Input type="text" placeholder="Nom de l'enfant" />
      </Form>

      <h3>Date de naissance</h3>
      <Form id="birthdate">
        <Form.Input placeholder="Jour" type="date" />
      </Form>
    </div>

    <div id="health">
      <h3>Santé</h3>
      <div id="cards">
        <Card id="medecine">
          <Card.Content header="Traitement en cours" />
          <div className="delete-item">
            <Card.Content description="Doliprane" />
            <Button icon type="submit">
              <Icon name="delete" />
            </Button>
          </div>
          <div className="delete-item">
            <Card.Content description="Smecta" />
            <Button icon type="submit">
              <Icon name="delete" />
            </Button>
          </div>
          <Form className="add-item">
            <Form.Input type="text" placeholder="Médicament et posologie" />
            <Button icon type="submit">
              <Icon name="add circle" />
            </Button>
          </Form>
        </Card>

        <Card id="vaccine">
          <Card.Content header="Vaccins" />
          <div className="delete-item">
            <Card.Content description="Rubéole : fait le 03/02/2017" />
            <Button icon type="submit">
              <Icon name="delete" />
            </Button>
          </div>
          <div className="delete-item">
            <Card.Content description="Rage : fait le 03/02/2017" />
            <Button icon type="submit">
              <Icon name="delete" />
            </Button>
          </div>
          <Form className="add-item">
            <Form.Input type="text" placeholder="Nom du vaccin et date" />
            <Button icon type="submit">
              <Icon name="add circle" />
            </Button>
          </Form>
        </Card>

        <Card id="allergies">
          <Card.Content header="Allergies" />
          <div className="delete-item">
            <Card.Content description="Cacahuète" />
            <Button icon type="submit">
              <Icon name="delete" />
            </Button>
          </div>
          <Form className="add-item">
            <Form.Input type="text" placeholder="Nom de l'allergène" />
            <Button icon type="submit">
              <Icon name="add circle" />
            </Button>
          </Form>
        </Card>
      </div>
    </div>

    <div id="numeros">
      <h3>Numéros utiles</h3>
      <div id="numeros-div">
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
