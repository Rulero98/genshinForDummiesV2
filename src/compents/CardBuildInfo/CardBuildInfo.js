import React from 'react'
import { ArtifactInfo } from './ArtifactInfo/ArtifactInfo'


import './CardBuildInfo.css'

export const CardBuildInfo = () => {
    return (
        <>
            <div className='IC__container'>
                <div className='IC__box'>
                    
                    <div className='w-50 d-flex flex-wrap justify-content-evenly'>
                        <ArtifactInfo />


                    </div>

                </div>

            </div>
        </>
    )
}

