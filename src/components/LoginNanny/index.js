/**
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */
import './style.scss';
import 'semantic-ui-css/semantic.min.css';
/**
 * Code
 */

const LoginNanny = ({
  inputEmailNanny,
  inputPasswordNanny,
  handleChangeInputsNanny,
  handleLoginNanny,
  errorLoginNanny,
}) => {

  const handleChange = (event) => {
    const { name, value } = event.target;
    const changes = {
      [name]: value,
    };
    handleChangeInputsNanny(changes);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLoginNanny();
  };

  return (
    <div id="pageLoginNanny">
      
      <h2>Connexion Nounou</h2>
      <div id="formLoginNanny">
        <Form>
          <Form.Field>
            <input 
              type="text" 
              name="inputEmailNanny"
              placeholder="Adresse email" 
              value={inputEmailNanny}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <input 
              type="text" 
              name="inputPasswordNanny"
              placeholder="Mot de passe" 
              value={inputPasswordNanny}
              onChange={handleChange}
            />
          </Form.Field>
          <NavLink exact to="/my-day">
            <Button name="btn" type="submit" onClick={handleSubmit}>Se connecter</Button>
          </NavLink>
          <label
            htmlFor="btn" className={!errorLoginNanny ? 'hidden' : 'block'}
          >
            {errorLoginNanny}
          </label>
        </Form>
      </div>
    </div>
  );
}

LoginNanny.proptypes = {
  inputEmailNanny: PropTypes.string,
  inputPasswordNanny: PropTypes.string,
  handleChangeInputsNanny: PropTypes.func.isRequired,
  handleLoginNanny: PropTypes.func.isRequired,
  errorLoginNanny: PropTypes.string,
};
LoginNanny.defaultProps = {
  inputEmailNanny: '',
  inputPasswordNanny: '',
  errorLoginNanny: '',
}
/**
 * Export
 */
export default LoginNanny;
