import { Tab } from 'bootstrap'
import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import { CardBuildInfo } from '../CardBuildInfo/CardBuildInfo.js'
import { CardCharacter } from '../cardCharacter/CardCharacter.js'
import { TableArtifacts } from '../tableArtifacts/TableArtifacts.js'
import { TableWeapons } from '../tableWeapons/TableWeapons.js'

import './NavBarOptions.css'

const NavBarOptions = () => {

    const backToTop = () => {
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }



    return (
        <div className='container-fluid c-nav' >
            <Tabs defaultActiveKey="Card-build" id="Tab-c-w-a" onClick={backToTop}>
                <Tab eventKey="Characters" title="Characters">
                    <CardCharacter />
                </Tab>
                <Tab eventKey="Weapons" title="Weapons">
                    <TableWeapons />
                </Tab>
                <Tab eventKey="Artifacts" title="Artifacts">
                    <TableArtifacts />
                </Tab>
                <Tab eventKey="Card-build" title="Card-build" className='w-100'>
                    <CardBuildInfo />
                </Tab>
            </Tabs>
        </div >
    )
}

export default NavBarOptions