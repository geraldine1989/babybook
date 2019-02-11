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

const LoginParents = ({
  inputEmail,
  inputPassword,
  handleChangeInputs,
  handleLogin,
  errorLogin,
}) => {

  const handleChange = (event) => {
    const { name, value } = event.target;
    const changes = {
      [name]: value,
    };
    handleChangeInputs(changes);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div id="pageLoginParents">
      
      <h2>Connexion parents</h2>
      <div id="formLoginParents">
        <Form>
          <Form.Field>
            <input 
              type="text" 
              name="inputEmail"
              placeholder="Adresse email" 
              value={inputEmail}
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <input 
              type="password" 
              name="inputPassword"
              placeholder="Mot de passe" 
              value={inputPassword}
              onChange={handleChange}
            />
          </Form.Field>
          <NavLink exact to="/espace-parents/journee-type">
            <Button name="btn" type="submit" onClick={handleSubmit}>Se connecter</Button>
          </NavLink>
          <label
            htmlFor="btn" className={!errorLogin ? 'hidden' : 'block'}
          >
            {errorLogin}
          </label>
        </Form>
      </div>
    </div>
  );
}

LoginParents.proptypes = {
  inputEmail: PropTypes.string,
  inputPassword: PropTypes.string,
  handleChangeInputs: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  errorLogin: PropTypes.string,
};
LoginParents.defaultProps = {
  inputEmail: '',
  inputPassword: '',
  errorLogin: '',
}
/**
 * Export
 */
export default LoginParents;
