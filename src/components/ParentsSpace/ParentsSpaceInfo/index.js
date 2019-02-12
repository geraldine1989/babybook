/* NPM Import */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Icon, Input } from 'semantic-ui-react';

/* Local imports */
import './style.scss';
import 'semantic-ui-css/semantic.min.css';
import ParentsNav from 'src/containers/ParentsNav';

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
  inputFirstName,
  inputLastName,
  inputBirthDate,
  inputMeds,
  inputVaccines,
  inputAllergies,
  inputPhoneName,
  inputPhoneNumber,
  addChild,
  addMeds,
  addVaccines,
  addAllergies,
  addPhone,
  medsList,
  vaccinesList,
  allergiesList,
  childList,
  phoneList,
  removeMeds,
  removeVaccines,
  removeAllergies,
  removeChild,
  removePhone,
}) => {
  const handleChangeForFirstName = (evt) => {
    const text = evt.target.value;
    handleChangeFirstName(text);
  };

  const handleChangeForLastName = (evt) => {
    const text = evt.target.value;
    handleChangeLastName(text);
  };

  const handleChangeForBirthDate = (evt) => {
    const date = evt.target.value;
    handleChangeBirthDate(date);
  };

  const handleChangeForMedsItem = (evt) => {
    const text = evt.target.value;
    handleChangeMedsItem(text);
  };

  const handleChangeForVaccinesItem = (evt) => {
    const text = evt.target.value;
    handleChangeVaccinesItem(text);
  };

  const handleChangeForAllergiesItem = (evt) => {
    const text = evt.target.value;
    handleChangeAllergiesItem(text);
  };

  const handleChangeForPhoneName = (evt) => {
    const text = evt.target.value;
    handleChangePhoneName(text);
  };

  const handleChangeForPhoneNumber = (evt) => {
    const tel = evt.target.value;
    handleChangePhoneNumber(tel);
  };

  const submitChild = (evt) => {
    evt.preventDefault();
    addChild(inputLastName);
  };

  const submitMeds = (evt) => {
    evt.preventDefault();
    addMeds(inputMeds);
  };

  const submitVaccines = (evt) => {
    evt.preventDefault();
    addVaccines(inputVaccines);
  };

  const submitAllergies = (evt) => {
    evt.preventDefault();
    addAllergies(inputAllergies);
  };

  const submitPhone = (evt) => {
    evt.preventDefault();
    addPhone(inputPhoneNumber);
  };

  const handleDeleteChild = id => () => {
    removeChild(id);
  };

  const handleDeleteMeds = id => () => {
    removeMeds(id);
  };

  const handleDeleteVaccines = id => () => {
    removeVaccines(id);
  };

  const handleDeleteAllergies = id => () => {
    removeAllergies(id);
  };

  const handleDeletePhone = id => () => {
    removePhone(id);
  };


  return (
    <div id="main">
      <ParentsNav />
      <div id="modif-informations">
        <div id="modif-child">
          <h3>Enfant</h3>
          <ul>
            {childList.map(child => (
              <li key={child.id}>{child.firstname} {child.lastname} Né(e) le {new Date(child.birthdate).toLocaleDateString('fr')}
                <Button
                  icon
                  type="submit"
                  onClick={handleDeleteChild(child.id)}
                >
                  <Icon name="delete" />
                </Button>
              </li>
            ))}
          </ul>
          <Form
            id="modif-child-form"
            onSubmit={submitChild}
          >
            <Form.Input
              onChange={handleChangeForFirstName}
              type="text"
              placeholder="Prénom de l'enfant"
              value={inputFirstName}
            />
            <Form.Input
              onChange={handleChangeForLastName}
              type="text"
              placeholder="Nom de l'enfant"
              value={inputLastName}
            />
            <Form.Input
              onChange={handleChangeForBirthDate}
              type="date"
              value={inputBirthDate}
            />
            <Button icon type="submit">
              <Icon name="add" />
            </Button>
          </Form>
        </div>


        <div id="modif-health">
          <h3>Santé</h3>
          <div id="cards">
            <div className="cards-item">
              <div className="header">Médicaments</div>
              <div className="delete-item">
                {medsList.map(meds => (
                  <li key={meds.id}>{meds.name}
                    <Button
                      icon
                      type="submit"
                      onClick={handleDeleteMeds(meds.id)}
                    >
                      <Icon name="delete" />
                    </Button>
                  </li>
                ))}
              </div>
              <Form
                className="add-sante"
                onSubmit={submitMeds}
              >
                <Form.Field>
                  <Input
                    value={inputMeds}
                    placeholder="Ajoutez un médicament"
                    onChange={handleChangeForMedsItem}
                  />
                </Form.Field>
                <Button icon type="submit">
                  <Icon name="add" />
                </Button>
              </Form>
            </div>

            <div className="cards-item">
              <div className="header">Vaccins</div>
              <div className="delete-item">
                {vaccinesList.map(vaccines => (
                  <li key={vaccines.id}>{vaccines.name}
                    <Button
                      icon
                      type="submit"
                      onClick={handleDeleteVaccines(vaccines.id)}
                    >
                      <Icon name="delete" />
                    </Button>
                  </li>
                ))}
              </div>
              <Form
                className="add-sante"
                onSubmit={submitVaccines}
              >
                <Form.Field>
                  <Input
                    value={inputVaccines}
                    placeholder="Ajoutez le vaccin et sa date"
                    onChange={handleChangeForVaccinesItem}
                  />
                </Form.Field>
                <Button icon type="submit">
                  <Icon name="add" />
                </Button>
              </Form>
            </div>

            <div className="cards-item">
              <div className="header">Allergies</div>
              <div className="delete-item">
                {allergiesList.map(allergies => (
                  <li key={allergies.id}>{allergies.name}
                    <Button
                      icon
                      type="submit"
                      onClick={handleDeleteAllergies(allergies.id)}
                    >
                      <Icon name="delete" />
                    </Button>
                  </li>
                ))}
              </div>
              <Form
                className="add-sante"
                onSubmit={submitAllergies}
              >
                <Form.Field>
                  <Input
                    value={inputAllergies}
                    placeholder="Ajoutez un allergene"
                    onChange={handleChangeForAllergiesItem}
                  />
                </Form.Field>
                <Button icon type="submit">
                  <Icon name="add" />
                </Button>
              </Form>
            </div>
          </div>
        </div>


        <div id="modif-numeros">
          <h3>Numéros utiles</h3>
          <ul className="num-ul">
            {phoneList.map(phone => (
              <li key={phone.id} className="num-li">{phone.phonename} : {phone.phonenumber} 
                <Button
                  icon
                  type="submit"
                  onClick={handleDeletePhone(phone.id)}
                >
                  <Icon name="delete" />
                </Button>
              </li>
            ))}
          </ul>
          <Form
            id="modif-numeros-form"
            onSubmit={submitPhone}
          >
            <Form.Input
              value={inputPhoneName}
              type="text"
              placeholder="Nom et prénom"
              onChange={handleChangeForPhoneName}
            />
            <Form.Input
              value={inputPhoneNumber}
              type="tel"
              placeholder="Numéro de téléphone"
              onChange={handleChangeForPhoneNumber}
            />
            <Button icon type="submit">
              <Icon name="add" />
            </Button>
          </Form>
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
  inputFirstName: PropTypes.string.isRequired,
  inputLastName: PropTypes.string.isRequired,
  inputBirthDate: PropTypes.string.isRequired,
  inputMeds: PropTypes.string.isRequired,
  inputVaccines: PropTypes.string.isRequired,
  inputAllergies: PropTypes.string.isRequired,
  inputPhoneName: PropTypes.string.isRequired,
  inputPhoneNumber: PropTypes.string.isRequired,
  addChild: PropTypes.func.isRequired,
  addMeds: PropTypes.func.isRequired,
  addVaccines: PropTypes.func.isRequired,
  addAllergies: PropTypes.func.isRequired,
  addPhone: PropTypes.func.isRequired,
  medsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  vaccinesList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  allergiesList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  childList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  phoneList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  removeMeds: PropTypes.func.isRequired,
  removeVaccines: PropTypes.func.isRequired,
  removeAllergies: PropTypes.func.isRequired,
  removeChild: PropTypes.func.isRequired,
  removePhone: PropTypes.func.isRequired,
};

export default ParentsSpaceInfo;
