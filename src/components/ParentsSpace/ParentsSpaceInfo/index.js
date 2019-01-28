
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Icon, Input } from 'semantic-ui-react';

// Local imports
import './style.scss';
import 'semantic-ui-css/semantic.min.css';
import ParentsNav from 'src/components/ParentsSpace/ParentsNav';


const ParentsSpaceInfo = ({ addItem, handleChange, removeItem, input }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    addItem(input);
  };

  const handleChangeInput = (event) => {
    const text = event.target.value;
    handleChange(text);
  };

  const handleDelete = (event) => {
    event.preventDefault();
    removeItem(input);
  };

  return (
    <div>
      <ParentsNav />
      <div id="modif-informations">
        <div id="modif-child">

          <h3>Enfant</h3>
          <Form
            id="modif-child-name"
            onSubmit={handleSubmit}
          >
            <Form.Input
              onChange={handleChangeInput}
              type="text"
              placeholder="Prénom de l'enfant"
              value={input}
            />
            <Form.Input
              onChange={handleChangeInput}
              type="text"
              placeholder="Nom de l'enfant"
              value={input}
            />
          </Form>

          <h3>Date de naissance</h3>
          <Form
            id="modif-birthdate"
            onSubmit={handleSubmit}
          >
            <Form.Input
              type="date"
              onChange={handleChangeInput}
              value={input}
            />
          </Form>
        </div>

        <div id="modif-health">
          <h3>Santé</h3>
          <div id="cards">
            <div className="cards-item">
              <div className="header">Traitement en cours</div>

              <div className="delete-item">
                <li>Doliprane
                  <Button
                    icon
                    type="submit"
                    onClick={handleDelete}
                  >
                    <Icon name="delete" />
                  </Button>
                </li>
                <li>Smecta
                  <Button
                    icon
                    type="submit"
                    onClick={handleDelete}
                  >
                    <Icon name="delete" />
                  </Button>
                </li>
              </div>

              <Form
                className="add-sante"
                onSubmit={handleSubmit}
              >
                <Form.Field>
                  <Input
                    onChange={handleChangeInput}
                    icon={{ name: 'add', link: true }}
                    placeholder="Ajoutez un médicament"
                    value={input}
                  />
                </Form.Field>
              </Form>
            </div>

            <div className="cards-item">
              <div className="header">Vaccins</div>

              <div className="delete-item">
                <li>Rubéole : fait le 09/09/17
                  <Button
                    icon
                    type="submit"
                    onClick={handleDelete}
                  >
                    <Icon name="delete" />
                  </Button>
                </li>
                <li>Rage : fait le 09/09/17
                  <Button
                    icon
                    type="submit"
                    onClick={handleDelete}
                  >
                    <Icon name="delete" />
                  </Button>
                </li>
              </div>

              <Form
                className="add-sante"
                onSubmit={handleSubmit}
              >
                <Form.Field>
                  <Input
                    onChange={handleChangeInput}
                    icon={{ name: 'add', link: true }}
                    placeholder="Ajoutez le vaccin et sa date"
                    value={input}
                  />
                </Form.Field>
              </Form>
            </div>

            <div className="cards-item">
              <div className="header">Allergies</div>

              <div className="delete-item">
                <li>Cacahuètes
                  <Button
                    icon
                    type="submit"
                    onClick={handleDelete}
                  >
                    <Icon name="delete" />
                  </Button>
                </li>
              </div>

              <Form
                className="add-sante"
                onSubmit={handleSubmit}
              >
                <Form.Field>
                  <Input
                    onChange={handleChangeInput}
                    icon={{ name: 'add', link: true }}
                    placeholder="Ajoutez un allergene"
                    value={input}
                  />
                </Form.Field>
              </Form>

            </div>
          </div>
        </div>

        <div id="modif-numeros">
          <h3>Numéros utiles</h3>
          <div id="modif-numeros-div">
            <Form
              id="child-contact"
              onSubmit={handleSubmit}
            >
              <Form.Input
                onChange={handleChangeInput}
                type="text"
                placeholder="Nom et prénom"
                value={input}
              />
              <Form.Input
                onChange={handleChangeInput}
                type="number"
                placeholder="Numéro de téléphone"
                value={input}
              />
            </Form>
          </div>
        </div>

        <div id="save">
          <Button
            onClick={handleSubmit}
          >
            Sauvegarder
          </Button>
        </div>

      </div>
    </div>
  );
};

ParentsSpaceInfo.propTypes = {
  addItem: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
};

export default ParentsSpaceInfo;
