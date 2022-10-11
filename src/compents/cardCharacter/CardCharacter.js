import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'

import { getStars } from '../../helpers/getStars'
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

    const setStars = (stars) => stars = getStars(parseInt(stars), parseInt(stars))

    const setVision = (vision) => {
        if (vision === 'Anemo') return <img src={'https://api.genshin.dev/elements/anemo/icon.png'} />
        if (vision === 'Cryo') return <img src={'https://api.genshin.dev/elements/cryo/icon.png'} />
        if (vision === 'Pyro') return <img src={'https://api.genshin.dev/elements/pyro/icon.png'} />
        if (vision === 'Geo') return <img src={'https://api.genshin.dev/elements/geo/icon.png'} />
        if (vision === 'Hydro') return <img src={'https://api.genshin.dev/elements/hydro/icon.png'} />
        if (vision === 'Electro') return <img src={'https://api.genshin.dev/elements/electro/icon.png'} />
        if (vision === 'Dendro') return <img src={'https://api.genshin.dev/elements/dendro/icon.png'} />
    }

    const setImageCard = (name) => {
        if (name === 'traveler-electro' ||
            name === 'traveler-geo' ||
            name === 'traveler-anemo' ||
            name === 'traveler-dendro') return `https://api.genshin.dev/characters/${name}/icon`
        return `https://api.genshin.dev/characters/${name}/icon-big`
    }

    return (
        <>
            <div className='container-fluid d-flex flex-wrap bg-tab'>
                {!data ? 'No data available' : data.map((obj, i) => {
                    return <Card style={{ width: '12rem' }} key={obj.name + obj.vision} className='card-character'>

                        <Card.Img
                            variant="top"
                            src={!names ? 'no images' : setImageCard(names[i].name)}
                            height={'200px'}
                            width={'150px'} />

                        <Card.Body>

                            <Card.Title className='c-text d-flex justify-content-center'>
                                {obj.name}
                            </Card.Title>

                            <div className='card-text c-text'>
                                <div className='d-flex justify-content-center'>
                                    {setVision(obj.vision)}
                                </div>
                                <div className='d-flex justify-content-center'>{setStars(obj.rarity)}</div>
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
