import React, { Component } from 'react'
import { Accordion } from 'semantic-ui-react'

//Local import
import './style.scss';

export default class AccordionExampleStandard extends Component {
  state = { activeIndex: -1 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (

        <div id="mainMenu">
            <div id="mainNav"> 
                <Accordion className="accodion">
                    <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick} >
                        <h3 className="accodionTitle">Menu</h3> 
                    </Accordion.Title>

                    <Accordion.Content active={activeIndex === 0}>
                        <div className="accordionContent">
                            <a href="#"> <li>Espace parents</li> </a>
                            <a href="#"> <li>Journal</li> </a>
                            <a href="#"> <li>Infos</li> </a>
                            <a href="#"> <li>Se déconnecter de cet espace</li> </a>
                        </div>
 
                    </Accordion.Content>
                </Accordion>
            </div>
        </div>    
    )
  }
}
