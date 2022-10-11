import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

import { getStars } from '../../helpers/getStars'
import { useFetch } from '../../hooks/useFetch'
import './TableArtifacts.css'

export const TableArtifacts = () => {

    const { data: artifacts } = useFetch('artifacts')
    const { data: names } = useFetch('artifactsNames')

    const [results, setResults] = useState()

    useEffect(() => {
        if (names?.length !== 0) {
            artifacts?.forEach((e, i) => {
                e.imgname = 'https://api.genshin.dev/artifacts/' + names[i].name + '/circlet-of-logos.png'
            })
        }

    }, [names])

    useEffect(() => {
        artifacts && setResults([...artifacts])
    }, [artifacts])

    const setStars = (stars) => stars = getStars(parseInt(stars), parseInt(stars))

    return (
        <div>
            <div className='text-light stats__container'>
                <div className='stats__stats'>
                    <h2>Main stats</h2>
                    <p>Flower: HP</p>
                    <p>Plume: ATK</p>
                    <p>Sands: ATK%/DEF%/HP%/Elemental Mastery/ Energy Recharge</p>
                    <p>Goblet: ATK%/DEF%/HP%/Elemental Mastery/Elemental Damage</p>
                    <p>Circlet: ATK%/DEF%/HP%/Elemental Mastery/Crit Rate/Crit DMG</p>
                </div>
                <div className='stats__stats'>
                    <h2>Sub stats</h2>
                    <p>ATK/ATK%</p>
                    <p>DEF/DEF%</p>
                    <p>HP/HP%</p>
                    <p>Energy Recharge</p>
                    <p>Crit DMG/Crit Rate</p>
                    <p>Elemental Mastery</p>
                </div>
            </div>
            <div className='dropdown__container'>
                {
                    !results ? 'no artifacts to mostrarte bro xd' : results.map(obj => {
                        return (
                            <div key={obj.name}>
                                {obj.name === 'Glacier and Snowfield' ? '' : obj.name === 'Sacrifieur to the Firmament' ? '' :
                                    <Dropdown className="d-inline dropdown__card mx-2" autoClose={true} >
                                        <Dropdown.Toggle id="dropdown-autoclose-false">
                                            <img
                                                src={obj.imgname}
                                                height={'150px'}
                                                width={'150px'}
                                                className='dropdown__image'
                                            />
                                            <p>{obj.name}</p>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className='dropdown__menu'>
                                            <div >
                                                <p>Max rarity:<span className='w-100 d-flex justify-content-center'>{setStars(obj.max_rarity)}</span></p>
                                                <p>2 piece bonus: {obj['2-piece_bonus']}</p>
                                                <p>4 piece bonus: {obj['4-piece_bonus']}</p>
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
