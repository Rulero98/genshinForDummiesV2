import React, { useEffect, useState } from 'react'
import { useFetch } from '../../../hooks/useFetch'

//import { CardBuildImg } from '../CardBuildImg/CardBuildImg'

import './style.css'
import { SetInfoCard } from '../SetInfoCard/SetInfoCard.js'

export const ArtifactInfo = () => {

    const [weaponFiltered, setWeaponFiltered] = useState([])

    const { data: characters } = useFetch('characters')
    const { data: weapon } = useFetch('weapons')

    useEffect(()=>{
        setWeaponFiltered(weapon)
    },[weapon])

    const weaponList = (e) => {

        const auxChar = characters.filter(newChar => newChar.name === e.target.value)
        const auxWeapon = weapon.filter(newWeapon => newWeapon.type === auxChar[0].weapon)

        setWeaponFiltered(auxWeapon)
        console.log(weaponFiltered)
        //console.log(weapon)

    }

    return (

        <div className='AI__Container '>
            <select form='SelectCharacter' id='SelectCharacter' onChange={weaponList}>
                {!characters ? 'Loading' : characters.map(obj => {
                    return <option key={obj.name + obj.vision} value={obj.name} >{obj.name}</option>
                })}
            </select>


            <SetInfoCard character={characters} weapons={!weaponFiltered ? 'sadoka' : weaponFiltered} />

        </div>
    )
}
