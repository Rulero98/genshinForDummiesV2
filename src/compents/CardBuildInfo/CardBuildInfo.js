import React from 'react'
import { ArtifactInfo } from './ArtifactInfo/ArtifactInfo'
import { CardBuildImg } from './CardBuildImg/CardBuildImg'

import './CardBuildInfo.css'

export const CardBuildInfo = () => {
    return (
        <>
            <div className='IC__container'>
                <div className='IC__box'>

                    <input type={'text'} placeholder={'Character name'} className='w-100' />
                    <div className='w-50 d-flex flex-wrap justify-content-evenly'>

                        <ArtifactInfo AR='Plume' id='Plume' />
                        <ArtifactInfo AR='Flower' id='Flower' />
                        <ArtifactInfo AR='Sands' id='Sands'/>
                        <ArtifactInfo AR='Goblet' id='Goblet'/>
                        <ArtifactInfo AR='Circlet' id='Circlet'/>

                    </div>

                </div>
                <CardBuildImg />
            </div>
        </>
    )
}

