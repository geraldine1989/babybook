
import React from 'react';
import PropsTypes from 'prop-types';

// Local imports
import './style.scss';


const Informations = () => (
    <div id="informations">
        <h2>Informations</h2>
        <div id="enfant">
            <h3> Enfant</h3>

            <div id="child-info">
                <div className="child-info-div"> 
                    Prénom: <span> Lilou</span>
                </div>

                <div className="child-info-div"> 
                    Nom: <span> Dupont</span>
                </div>

                <div className="child-info-div"> 
                    Age: <span> 18 mois </span>
                </div>

                <div className="child-info-div">  
                    Date de naissance: <span> Le 19/08/17</span>
                </div>
            </div>
        </div>

        <div id="sante">
            <h3>Santé</h3>
            <div id="sante-info">
                <div className="sante-info-div">
                    <h4>Médicaments</h4>
                    <ul>
                        <li> <span>Doliprane</span> </li>
                        <li> <span>Smecta</span></li>
                    </ul>
                </div>

                <div className="sante-info-div">
                    <h4>Vaccins</h4>
                    <ul>
                        <li> <span>Rubéole : fait le 03/02/17 </span> </li>
                        <li> <span> Rage : fait le 03/02/17</span></li>
                    </ul>
                </div>

                <div className="sante-info-div">
                    <h4>Allergies</h4>
                    <ul>
                        <li> <span>Cacacuètes </span></li>
                    </ul>
                </div>

            </div>
        </div>
        
        <div id="numeros">
        <h3>Numéros utiles</h3>
        <div id="numeros-div">
            <ul>
                <li>
                    <span>Mère portable: </span> 06 11 22 33 44
                </li>
                <li>
                    <span>Mère travail: </span> 01 11 77 33 44
                </li>
                <li>
                    <span>Père portable: </span> 06 11 55 33 44
                </li>
                <li>
                    <span>Docteur Mamour: </span> 01 11 22 33 42
                </li>
            </ul>
        </div>

        </div>
    </div>

    

);

Informations.propTypes = {
};

export default Informations;
