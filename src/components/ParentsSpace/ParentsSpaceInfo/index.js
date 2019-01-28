/* NPM Import */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Icon, Input } from 'semantic-ui-react';

/* Local imports */
import './style.scss';
import 'semantic-ui-css/semantic.min.css';
import ParentsNav from 'src/components/ParentsSpace/ParentsNav';

/* Test Mongo DB */
const addInfos = (formDatas) => {
  const axios = ('axios');
  axios.post('http://localhost:3000/newday', formDatas)
    .then((response) => {
      console.log(response);
    })

    .catch((error) => {
      console.log(error);
    });
};

const handleAddItemInList = (evt) => {
  evt.preventDefault();
  const formDatas = {
    firstName: 'Lilou',
    lastName: 'Dupont',
    birthDate: '19/08/2017',
    health: [
      {
        meds: [
          {
            name: 'Doliprane',
          },
          {
            name: 'Smecta',
          },
        ],
        vaccines: [
          {
            name: 'Rubéole: fait le 03/02/2017',
          },
          {
            name: 'Rage: fait le 03/02/2017',
          },
        ],
        allergies: [
          {
            name: 'Cacahuètes',
          },
        ],
      },
    ],
    phoneNumbers: [
      {
        name: 'Mère portable',
        phone: '06 11 22 33 44',
      },
      {
        name: 'Mère travail',
        phone: '01 11 77 33 44',
      },
      {
        name: 'Père portable',
        phone: '06 11 55 33 44',
      },
      {
        name: 'Docteur Mamour',
        phone: '01 11 22 33 42',
      },
    ],
  };

  addInfos(formDatas);
};

/* Code */
const ParentsSpaceInfo = ({
  handleChangeFirstName,
  handleChangeLastName,
  handleChangeBirthDate,
  handleChangeMedsItem,
  handleChangeVaccinesItem,
  handleChangeAllergiesItem,
  handleChangePhoneName,
  handleChangePhoneNumber,
}) => {
  const handleChangeFirstName = (evt) => {
    const text = evt.target.value;
    handleChangeFirstName(text);
  };

  const handleChangeLastName = (evt) => {
    const text = evt.target.value;
    handleChangeLastName(text);
  };

  const handleChangeBirthDate = (evt) => {
    const date = evt.target.value;
    handleChangeBirthDate(date);
  };

  const handleChangeMedsItem = (evt) => {
    const text = evt.target.value;
    handleChangeMedsItem(text);
  };

  const handleChangeVaccinesItem = (evt) => {
    const text = evt.target.value;
    handleChangeVaccinesItem(text);
  };

  const handleChangeAllergiesItem = (evt) => {
    const text = evt.target.value;
    handleChangeAllergiesItem(text);
  };

  const handleChangePhoneName = (evt) => {
    const text = evt.target.value;
    handleChangePhoneName(text);
  };

  const handleChangePhoneNumber = (evt) => {
    const number = evt.target.value;
    handleChangePhoneNumber(number);
  };

  return (
    <div>
      <ParentsNav />
      <div id="modif-informations">
        <div id="modif-child">

          <h3>Enfant</h3>
          <Form
            id="modif-child-name"
          >
            <Form.Input
              onChange={handleChangeFirstName}
              type="text"
              placeholder="Prénom de l'enfant"
              
            />
            <Form.Input
              onChange={handleChangeLastName}
              type="text"
              placeholder="Nom de l'enfant"
              
            />
          </Form>

          <h3>Date de naissance</h3>
          <Form
            id="modif-birthdate"
            
          >
            <Form.Input
              type="date"
              onChange={handleChangeBirthDate}
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
                    
                  >
                    <Icon name="delete" />
                  </Button>
                </li>
                <li>Smecta
                  <Button
                    icon
                    type="submit"
                    
                  >
                    <Icon name="delete" />
                  </Button>
                </li>
              </div>

              <Form
                className="add-sante"
                
              >
                <Form.Field>
                  <Input
                    
                    icon={{ name: 'add', link: true }}
                    placeholder="Ajoutez un médicament"
                    onChange={handleChangeMedsItem}
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
                    
                  >
                    <Icon name="delete" />
                  </Button>
                </li>
                <li>Rage : fait le 09/09/17
                  <Button
                    icon
                    type="submit"
                    
                  >
                    <Icon name="delete" />
                  </Button>
                </li>
              </div>

              <Form
                className="add-sante"
                
              >
                <Form.Field>
                  <Input
                    
                    icon={{ name: 'add', link: true }}
                    placeholder="Ajoutez le vaccin et sa date"
                    onChange={handleChangeVaccinesItem}
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
                    
                  >
                    <Icon name="delete" />
                  </Button>
                </li>
              </div>

              <Form
                className="add-sante"
                
              >
                <Form.Field>
                  <Input
                    
                    icon={{ name: 'add', link: true }}
                    placeholder="Ajoutez un allergene"
                    onChange={handleChangeAllergiesItem}
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
              
            >
              <Form.Input
                
                type="text"
                placeholder="Nom et prénom"
                onChange={handleChangePhoneName}
              />
              <Form.Input
                
                type="number"
                placeholder="Numéro de téléphone"
                onChange={handleChangePhoneNumber}
              />
            </Form>
          </div>
        </div>

        <div id="save">
          <Button
            
          >
            Sauvegarder
          </Button>
        </div>

      </div>
    </div>
  );
};

ParentsSpaceInfo.propTypes = {
  handleChangeFirstName: PropTypes.func.isRequired,
  handleChangeLastName: PropTypes.func.isRequired,
  handleChangeBirthDate: PropTypes.func.isRequired,
  handleChangeMedsItem: PropTypes.func.isRequired,
  handleChangeVaccinesItem: PropTypes.func.isRequired,
  handleChangeAllergiesItem: PropTypes.func.isRequired,
  handleChangePhoneName: PropTypes.func.isRequired,
  handleChangePhoneNumber: PropTypes.func.isRequired,
};

export default ParentsSpaceInfo;
