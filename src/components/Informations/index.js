
import React from 'react';
import PropTypes from 'prop-types';

// Local imports
import './style.scss';


const Informations = ({
  childList,
  medsList,
  vaccinesList,
  allergiesList,
  phoneList,
}) => (

  <div id="informations">
    <h2>Informations</h2>

    <div id="enfant">
      <h3> Enfant</h3>
      <div id="child-info">
        {childList.map(child => (
          <div>
            <div className="child-info-div">
            Prénom: <span>{child.firstname}</span>
            </div>
            <div className="child-info-div">
            Nom: <span>{child.lastname}</span>
            </div>
            <div className="child-info-div">
            Age: <span>18 mois</span>
            </div>
            <div className="child-info-div">
            Date de naissance: <span>{child.birthdate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div id="sante">
      <h3>Santé</h3>
      <div id="sante-info">
        <div className="sante-info-div">
          <h4>Médicaments</h4>
          <ul>
            {medsList.map(meds => (
              <li><span>{meds.name}</span></li>
            ))}
          </ul>
        </div>
        <div className="sante-info-div">
          <h4>Vaccins</h4>
          <ul>
            {vaccinesList.map(vaccines => (
              <li><span>{vaccines.name}</span></li>
            ))}
          </ul>
        </div>
        <div className="sante-info-div">
          <h4>Allergies</h4>
          <ul>
            {allergiesList.map(allergies => (
              <li><span>{allergies.name}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div id="numeros">
      <h3>Numéros utiles</h3>
      <div id="numeros-div">
        <ul>
          {phoneList.map(phone => (
            <li>
              <span>{phone.phonename} : {phone.phonenumber}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

  </div>
);

Informations.propTypes = {
  childList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  medsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  vaccinesList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  allergiesList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  phoneList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
};

export default Informations;
