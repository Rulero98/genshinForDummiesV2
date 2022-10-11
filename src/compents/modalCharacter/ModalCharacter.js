import { PropTypes } from 'prop-types'
import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Button, Tab, Tabs } from 'react-bootstrap'

import './ModalCharacter.css'

export const ModalCharacter = ({ character, name, show, onHide }) => {

    const setImageModal = (nameCharacter) => {
        return `https://api.genshin.dev/characters/${nameCharacter}/card`
    }

    return (
        <>
            <Modal show={show} onHide={onHide} className={`${character.vision}`}>
                <Modal.Header closeButton>
                    <Modal.Title className='w-100 text-center'>{character.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='container-info-character'>
                        <img
                            src={setImageModal(name)}
                            width='500px'
                            height='500px'
                            className='img-modal'
                        />

                        <div className='options-modal text-light text-left'>
                            <Tabs defaultActiveKey="Character information" id="Tab-c-w-a" variant='pills' >

                                <Tab eventKey="Character information" title="Character information">
                                    <div >
                                        <p>Vision: {character.vision}</p>
                                        <p>Weapon: {character.weapon}</p>
                                        <p>Nation: {character.nation}</p>
                                        <p>Rarity: {character.rarity} stars</p>
                                        <p>Birthday: {character.birthday}</p>
                                        <p>Constellation: {character.constellation}</p>
                                        <p>Description: {character.description}</p>
                                    </div>
                                </Tab>

                                <Tab eventKey="SkillTalents" title="SkillTalents">
                                    <div className='Talents-Info'>
                                        {!character.skillTalents ? 'No skillTalents available' : character.skillTalents.map(obj => {
                                            return (
                                                <div key={obj.name}>
                                                    <p><b><i>{obj.name} - {obj.unlock}</i></b></p>
                                                    <p>{obj.description}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </Tab>

                                <Tab eventKey="PassiveTalents" title="PassiveTalents">
                                    <div className='Talents-Info'>
                                        {!character.passiveTalents ? 'No passiveTalents available' : character.passiveTalents.map(obj => {
                                            return (
                                                <div key={obj.name}>
                                                    <p><b><i>{obj.name} - {obj.unlock}</i></b></p>
                                                    <p>{obj.description}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </Tab>

                                <Tab eventKey="Constellations" title="Constellations">
                                    <div className='Talents-Info'>
                                        {!character.constellations ? 'No constellations available' : character.constellations.map(obj => {
                                            return (
                                                <div key={obj.name}>
                                                    <p><b><i>{obj.name} - {obj.unlock}</i></b></p>
                                                    <p>{obj.description}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </Tab>

                            </Tabs>

                        </div>

                    </div>

                </Modal.Body>

                <Modal.Footer>
                    <Button className='btn-accept' onClick={onHide}>
                        Accept
                    </Button>

                </Modal.Footer>

            </Modal>
        </>
    )
}

ModalCharacter.propTypes = {
    character: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired
}
