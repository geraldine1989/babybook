/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';

/**
 * Local import
 */
import './style.scss';
import 'semantic-ui-css/semantic.min.css';
import { NavLink } from 'react-router-dom';
/**
 * Code
 */

const InscriptionForm = ({
  inputEmail,
  inputPassword, 
  inputConfirmPassword, 
  inputAccessCode, 
  handleChangeInputs, 
  handleInscription,
  errorsForm,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleInscription();
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    const changes = {
      [name]: value,
    };
    handleChangeInputs(changes);
  }
  
  return (
    <div id="pageInscription">
      <h2 id="pagetitle">Inscription parents</h2>
      <div id="formInscription">
        <Form>
          {/* <Form.Field>
            <input type="text" placeholder="Identifiant" value="" />
          </Form.Field> */}
          <Form.Field className="inputlogin"> 
            <input 
              type="email" 
              placeholder="Adresse email" 
              name="inputEmail" 
              value={inputEmail} 
              onChange={handleChange}
              className={!errorsForm.errorEmail ? 'valid' : 'novalid'}
            />
            <label
              htmlFor="inputEmail"
              className={!errorsForm.errorEmail ? 'hidden' : 'block'}
            >
              {errorsForm.errorEmail}
            </label>
          </Form.Field>
          <Form.Field className="inputlogin">
            <input 
              type="password" 
              placeholder="Mot de passe" 
              name="inputPassword" 
              value={inputPassword}
              onChange={handleChange}
              className={!errorsForm.errorPassword ? 'valid' : 'novalid'}
            />
            <label
              htmlFor="inputPassword"
              className={!errorsForm.errorPassword ? 'hidden' : 'block'}
            >
              {errorsForm.errorPassword}
            </label>
          </Form.Field>
          <Form.Field className="inputlogin">
            <input 
              type="password" 
              placeholder="Confirmer le mot de passe" 
              name="inputConfirmPassword" 
              value={inputConfirmPassword}
              onChange={handleChange}
              className={!errorsForm.errorConfirmPassword ? 'valid' : 'novalid'}
            />
            <label
              htmlFor="inputConfirmPassword"
              className={!errorsForm.errorConfirmPassword ? 'hidden' : 'block'}
            >
              {errorsForm.errorConfirmPassword}
            </label>
          </Form.Field>
          <Form.Field className="inputlogin">
            <input 
              type="text" 
              placeholder="Code d'accès" 
              name="inputAccessCode" 
              value={inputAccessCode}
              onChange={handleChange}
              className={!errorsForm.errorAccessCode ? 'valid' : 'novalid'}
            />
            <label
              htmlFor="inputAccessCode"
              className={!errorsForm.errorAccessCode ? 'hidden' : 'block'}
            >
              {errorsForm.errorAccessCode}
            </label>
          </Form.Field>
          <NavLink exact to="/login-parents" className="login-button">
            <Button type="submit" onClick={handleSubmit}>S'inscrire</Button>
          </NavLink>
        </Form>
      </div>
    </div>
  )
};

InscriptionForm.proptypes = {
  inputEmail: PropTypes.string,
  inputPassword: PropTypes.string,
  inputConfirmPassword: PropTypes.string, 
  inputAccessCode: PropTypes.string,
  handleChangeInputs: PropTypes.func.isRequired,
  handleInscription: PropTypes.func.isRequired,
  errorsForm: PropTypes.object,
};
InscriptionForm.defaultProps = {
  inputEmail: '',
  inputPassword: '',
  inputConfirmPassword: '',
  inputAccessCode: '',
  errorsForm: {},
}
/**
 * Export
 */
export default InscriptionForm;
