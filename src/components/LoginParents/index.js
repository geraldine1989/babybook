/**
 * Npm import
 */
import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/**
 * Local import
 */
//import Example from 'src/containers/Example';
import './style.scss';
import 'semantic-ui-css/semantic.min.css';
/**
 * Code
 */

class LoginParents extends React.Component {
  
  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt.currentTarget);
    const datas = {
      email: "test@test.com",
      password: "motDePasse",
    }
  };
  
  
  render() {
    return (
      <div id="pageLoginParents">
        
        <h2>Connexion parents</h2>
        <div id="formLoginParents">
          <Form>
            <Form.Field>
              <input type="text" placeholder="Adresse email" value="" />
            </Form.Field>
            <Form.Field>
              <input type="text" placeholder="Mot de passe" value="" />
            </Form.Field>
            <NavLink exact to="/espace-parents/journee-type">
              <Button type="submit" onClick={this.handleSubmit}>Se connecter</Button>
            </NavLink>
          </Form>
        </div>
      </div>
    );
  }
}
/**
 * Export
 */
export default LoginParents;

