import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'

import { useFetch } from '../../hooks/useFetch'
import { ModalCharacter } from '../modalCharacter/ModalCharacter'

import './CardCharacter.css'

export const CardCharacter = () => {

    const { data } = useFetch('characters')
    const { data: names } = useFetch('names')

    const [show, setShow] = useState(false)
    const [modalInfo, setModalInfo] = useState({})
    const [modalName, setModalName] = useState('')


    const handleClose = () => setShow(false)
    const handleShow = (obj, name) => {
        setModalInfo(obj)
        setModalName(name)
        setShow(true)
    }

    const fourStars = {
        size: 20, value: 4, edit: false, count: 4
    }
    const fiveStars = {
        size: 20, value: 5, edit: false
    }

    return (
        <>
            <div className='container-fluid d-flex flex-wrap bg-tab'>
                {!data ? 'No data available' : data.map((obj, i) => {
                    return <Card style={{ width: '12rem' }} key={obj.name + obj.vision} className='card-character'>
                        {<Card.Img
                            variant="top"
                            src={!names ? 'no images' : `https://api.genshin.dev/characters/${names[i].name}/icon`} />}
                        <Card.Body>
                            <Card.Title className='c-text d-flex justify-content-center'>{obj.name}</Card.Title>
                            <div className='card-text c-text'>
                                <div className='d-flex justify-content-center'>{
                                    obj.vision === 'Anemo' ? <img src={'https://api.genshin.dev/elements/anemo/icon.png'} /> :
                                        obj.vision === 'Cryo' ? <img src={'https://api.genshin.dev/elements/cryo/icon.png'} /> :
                                            obj.vision === 'Pyro' ? <img src={'https://api.genshin.dev/elements/pyro/icon.png'} /> :
                                                obj.vision === 'Geo' ? <img src={'https://api.genshin.dev/elements/geo/icon.png'} /> :
                                                    obj.vision === 'Hydro' ? <img src={'https://api.genshin.dev/elements/hydro/icon.png'} /> :
                                                        obj.vision === 'Electro' ? <img src={'https://api.genshin.dev/elements/electro/icon.png'} /> : 'Dendro'}</div>
                                <div className='d-flex justify-content-center'>{obj.rarity === 4 ? <ReactStars {...fourStars} /> : <ReactStars {...fiveStars} />}</div>
                            </div>
                            <Button variant="outline-primary" onClick={() => { handleShow(obj, names[i].name) }} className='w-100'>
                View
                            </Button>
                        </Card.Body>
                    </Card>
                })}
                <ModalCharacter character={modalInfo} name={modalName} show={show} onHide={handleClose} />
            </div>
        </>
    )
}
