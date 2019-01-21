
import React from 'react';
import PropsTypes from 'prop-types';
import { Input, Menu, Segment } from 'semantic-ui-react'

// Local imports
import './style.scss';
import Informations from 'src/components/Informations'


const HeaderLogo = () => (
    <div id="headerLogo">
        <h2> <span className="headerLogoB">B</span>aby <span className="headerLogoB">B</span>ook</h2>
 
    </div>
);

HeaderLogo.propTypes = {
};

export default HeaderLogo;
