import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Accordion from 'react-bootstrap/Accordion'

export const SetInfoCard = (character, weapons) => {

    const [weaponState, setWeaponState] = useState([])

    useEffect(() => {
        console.log(weapons)
        console.log(character)
        setWeaponState(weapons)
        console.log(weaponState)
    }, [weapons,weaponState])

    return (
        <>
            <Accordion defaultActiveKey='1'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Talents and constellations</Accordion.Header>
                    <Accordion.Body>
                        <div>
                            <div>Normal attack level</div>

                            <input />
                        </div>
                        <div>
                            <div>Elemental skill level</div>

                            <input />
                        </div>
                        <div>
                            <div>Elemental burst level</div>

                            <input />
                        </div>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Weapon</Accordion.Header>
                    <Accordion.Body>
                        <select form='SelectWeapon' id='SelectWeapon'>

                            {!weapons.lenght >= 1 ? 'Loading...' : weapons.map(obj => {
                                return (<option key={obj.name} value={obj.name}>{obj.name}</option>)
                            })}
                        </select>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Flower</Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Plume</Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Sands</Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Goblet</Accordion.Header>
                    <Accordion.Body>

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>Circlet</Accordion.Header>
                    <Accordion.Body>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

SetInfoCard.propTyes = {
    character: PropTypes.string,
    weapons: PropTypes.object
}