<<<<<<< HEAD
import { Tab } from 'bootstrap'
import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import { CardCharacter } from '../cardCharacter/CardCharacter.js'
import { TableWeapons } from '../tableWeapons/TableWeapons.js'

import './NavBarOptions.css'

const NavBarOptions = () => {

    const backToTop = () =>{
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }


    return (
        <div className='container-fluid c-nav' >
            <Tabs defaultActiveKey="Characters" id="Tab-c-w-a" onClick={backToTop}>
                <Tab eventKey="Characters" title="Characters">
                    <CardCharacter />
                </Tab>
                <Tab eventKey="Weapons" title="Weapons">
                    <TableWeapons />
                </Tab>
            </Tabs>
        </div>
    )
}

=======
import { Tab } from 'bootstrap'
import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import { CardCharacter } from '../cardCharacter/CardCharacter.js'
import { TableWeapons } from '../tableWeapons/TableWeapons.js'

import './NavBarOptions.css'

const NavBarOptions = () => {

    const backToTop = () =>{
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }


    return (
        <div className='container-fluid c-nav' >
            <Tabs defaultActiveKey="Characters" id="Tab-c-w-a" onClick={backToTop}>
                <Tab eventKey="Characters" title="Characters">
                    <CardCharacter />
                </Tab>
                <Tab eventKey="Weapons" title="Weapons">
                    <TableWeapons />
                </Tab>
            </Tabs>
        </div>
    )
}

>>>>>>> 6c6f7e9508abc60f73cca721e22d0b5a67590ab9
export default NavBarOptions