import { Tab } from 'bootstrap';
import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import { CardCharacter } from '../cardCharacter/CardCharacter.js';

import './NavBarOptions.css';

const NavBarOptions = () => {
    return (
        <div className='container-fluid c-nav' >
            <Tabs defaultActiveKey="Characters" id="Tab-c-w-a">
                <Tab eventKey="Characters" title="Characters">
                    <CardCharacter />
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    {/* aqui va otro componente */}
                </Tab>
            </Tabs>
        </div>
    )
}

export default NavBarOptions;