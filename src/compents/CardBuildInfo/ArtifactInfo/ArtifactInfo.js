import React, { useState } from 'react'
import { useFetch } from '../../../hooks/useFetch'
import { CardBuildImg } from '../CardBuildImg/CardBuildImg'

import './style.css'

export const ArtifactInfo = () => {

    const { data: name } = useFetch('artifactsNames')

    const [artifact, setArtifact] = useState([])
    const [nameC, setNameC] = useState('')
    const [plume, setPlume] = useState(0)
    const [flower, setFlower] = useState(0)
    const [sands, setSands] = useState(0)
    const [goblet, setGoblet] = useState(0)
    const [circlet, setCirclet] = useState(0)

    const setArtifactInfo = (e) => {
        e.preventDefault()
        let artifactPiece = document.getElementById('Artifact').value

        if (artifactPiece === 'flower-of-life' && flower === 0) {
            addArtifact(artifactPiece)
            setFlower(1)
        }

        if (artifactPiece === 'plume-of-death' && plume === 0) {
            addArtifact(artifactPiece)
            setPlume(1)
        }

        if (artifactPiece === 'sands-of-eon' && sands === 0) {
            addArtifact(artifactPiece)
            setSands(1)
        }

        if (artifactPiece === 'goblet-of-eonothem' && goblet === 0) {
            addArtifact(artifactPiece)
            setGoblet(1)
        }

        if (artifactPiece === 'circlet-of-logos' && circlet === 0) {
            addArtifact(artifactPiece)
            setCirclet(1)
        }

        if (artifactPiece === 'flower-of-life' && flower === 1) {
            console.log('You cant add two same type pieces     ' + artifactPiece + flower)
            return
        }

        if (artifactPiece === 'plume-of-death' && plume === 1) {
            console.log('You cant add two same type pieces     ' + artifactPiece + plume)
            return
        }

        if (artifactPiece === 'sands-of-eon' && sands === 1) {
            console.log('You cant add two same type pieces     ' + artifactPiece + sands)
            return
        }

        if (artifactPiece === 'goblet-of-eonothem' && goblet === 1) {
            console.log('You cant add two same type pieces     ' + artifactPiece + goblet)
            return
        }

        if (artifactPiece === 'circlet-of-logos' && circlet === 1) {
            console.log('You cant add two same type pieces     ' + artifactPiece + circlet)
            return
        }

    }
    const addArtifact = (artifactPiece) => {
        setArtifact(newItem => [...newItem, {

            artifactSet: artifactPiece,
            artifactName: document.getElementById('ArtifactSet').value,
            ATK: 100,
            SB1: {
                stat: document.getElementById('SubStat1Select').value,
                value: document.getElementById('SubStat1').value
            },
            SB2: {
                stat: document.getElementById('SubStat2Select').value,
                value: document.getElementById('SubStat2').value
            },
            SB3: {
                stat: document.getElementById('SubStat3Select').value,
                value: document.getElementById('SubStat3').value
            },
            SB4: {
                stat: document.getElementById('SubStat4Select').value,
                value: document.getElementById('SubStat4').value
            },

        }])

    }
    const setName = (e) => {
        e.preventDefault()
        setNameC(document.getElementById('Name').value)
    }

    const selectSubStat = (idSelect) => {

        return <select className='w-50' form='Prueba' id={idSelect + 'Select'}>
            <option value='HP'>HP</option>
            <option value='HP%'>HP%</option>
            <option value='ATK'>ATK</option>
            <option value='ATK%'>ATK%</option>
            <option value='DEF'>DEF</option>
            <option value='DEF %'>DEF%</option>
            <option value='Energy Recharge'>Energy Recharge</option>
            <option value='Elemental Mastery'>Elemental Mastery</option>
            <option value='Crit Rate'>Crit Rate</option>
            <option value='DMG Crit'>DMG CRIT</option>


        </select>
    }

    return (

        <div className='text-light IC__container'>
            <div className='w-100 mb-2' >

                <input type={'text'} placeholder={'Character name'} id='Name' />
                <form id='PruebaN'>
                    <input type={'submit'} onClick={setName} value='Add' />
                </form>
            </div>

            <label>Add Artifact</label>
            <div>
                <select className='w-50' form='Artifact' id={'Artifact'}>
                    <option value='flower-of-life'>Flower</option>
                    <option value='plume-of-death'>Plume</option>
                    <option value='sands-of-eon'>Sands</option>
                    <option value='goblet-of-eonothem'>Goblet</option>
                    <option value='circlet-of-logos'>Circlet</option>
                </select>
                <select className='w-50' id={'ArtifactSet'} form='ArtifactSet'>
                    {!name ? 'no item available' : name.map(obj => {
                        return <option key={obj.name} value={obj.name}>{obj.name}</option>
                    })}
                </select>
            </div>

            {selectSubStat('SubStat1')} <input type={'text'} placeholder='SubStat 1' id='SubStat1' />
            {selectSubStat('SubStat2')} <input type={'text'} placeholder='SubStat 2' id='SubStat2' />
            {selectSubStat('SubStat3')} <input type={'text'} placeholder='SubStat 3' id='SubStat3' />
            {selectSubStat('SubStat4')} <input type={'text'} placeholder='SubStat 4' id='SubStat4' />

            <form id='PruebaF'>
                <input type={'submit'} onClick={setArtifactInfo} value='Add' />
            </form>
            <CardBuildImg plume={artifact} name={nameC} />

        </div>
    )
}
