import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'

/**
 * Local import
 */
import './style.scss';


export default class ParentsNav extends Component {
  state = { activeItem: 'Modifier les infos' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div id="parentsNav">
      <h2>Espace parents</h2>
      <Menu secondary className="second-menu">
        <Menu.Item className="second-menu-item" name='Modifier journée type' active={activeItem === 'Modifier journée type'} onClick={this.handleItemClick} />
        <Menu.Item
          className="second-menu-item"
          name='Modifier les infos'
          active={activeItem === 'Modifier les infos'}
          onClick={this.handleItemClick}
        
        />
        <Menu.Item
          className="second-menu-item"
          name='Gestion contacts'
          active={activeItem === 'Gestion contacts'}
          onClick={this.handleItemClick}
        />
      </Menu>
      </div>

    )
  }
}
