import React, { Component } from 'react';
import { Accordion, Menu, Icon, Dropdown } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

// Local import
import './style.scss';

export default class MainNav extends Component {
  // state = { activeIndex: -1 }
  // handleClick = (e, titleProps) => {
  //   const { index } = titleProps
  //   const { activeIndex } = this.state
  //   const newIndex = activeIndex === index ? -1 : index
  //   this.setState({ activeIndex: newIndex })
  // }
  render() {
    // const { activeIndex } = this.state

    return (

      <div id="mainMenu">
        <div id="mainNav">
        <Dropdown item text="menu" simple className="accordionTitle">
        <Dropdown.Menu className="accordionContent">
          <Dropdown.Item >
            <NavLink exact to="/espace-parents/journee-type" >
              Espace Parents
            </NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink exact to="/my-day/journal" >
              Journal
            </NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink exact to="/my-day/infos" >
              Infos
            </NavLink>
          </Dropdown.Item>
          <Dropdown.Item>
            <NavLink exact to="/" >
              Se déconnecter
            </NavLink>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>



          {/* <Accordion className="accordion">
            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick} >
                <h3 className="accordionTitle">Menu</h3> 
            </Accordion.Title>

            <Accordion.Content active={activeIndex === 0}>
              <div className="accordionContent">
                <NavLink exact to="/espace-parents" >
                  <div> <li>Espace parents</li> </div>
                </NavLink>
                <NavLink exact to="/my-day/journal" >
                  <div> <li>Journal</li> </div>
                </NavLink>
                <NavLink exact to="/my-day/infos" >
                  <div> <li>Infos</li> </div>
                </NavLink>
                <NavLink exact to="/" >
                  <div> <li>Se déconnecter de cet espace</li> </div>
                </NavLink>
              </div>

            </Accordion.Content>
          </Accordion> */}
        </div>
      </div>
    )
  }
}
