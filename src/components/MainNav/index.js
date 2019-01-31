import React from 'react'
import { Accordion, Menu, Icon, Dropdown } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

//Local import
import './style.scss';

const MainNav = ({ logged }) => {
  // state = { activeIndex: -1 }

  // handleClick = (e, titleProps) => {
  //   const { index } = titleProps
  //   const { activeIndex } = this.state
  //   const newIndex = activeIndex === index ? -1 : index

  //   this.setState({ activeIndex: newIndex })
  // }


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
      </div>
    </div>
  )
}

export default MainNav;
