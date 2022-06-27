import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import './CardBuildImg.css'

export const CardBuildImg = ({ plume: artifact, nameC }) => {

    const [profileImg, setProfileImg] = useState('')

    useEffect(() => {
        setProfileImg('https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GenshinImpact_miHoYoLimited_S1_2560x1440-91c6cd7312cc2647c3ebccca10f30399')
    }, [])

    const ImageHandler = (e) => {
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setProfileImg(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }

    return (

        <div className='text-light CB__container container-fluid'>
            <div className='CB__imgHolder'>
                <div className='CB__box'
                    style={{ backgroundImage: `url(${profileImg})` }}> {nameC}
                    {!artifact ? 'no data' : artifact.map(obj => {
                        return (

                            <div key={obj.artifactname + obj.artifactSet} className='CB__ArtifactContainer d-flex flex-nowrap'>
                                <img src={`https://api.genshin.dev/artifacts/${obj.artifactName}/${obj.artifactSet}.png`} className='w-50 CB__imgArtifact' height={'100px'} width={'100px'} />
                                {!obj ? 'no data' :
                                    <div className='d-flex flex-column w-50'>
                                        <p className='w-75'>{obj.ATK}</p>
                                        {!obj.SB1 ? 'loading' : <p className='w-75 CB__pInfo '>{obj.SB1.stat}: {obj.SB1.value}</p>}
                                        {!obj.SB2 ? 'loading' : <p className='w-75 CB__pInfo '>{obj.SB2.stat}: {obj.SB2.value}</p>}
                                        {!obj.SB3 ? 'loading' : <p className='w-75 CB__pInfo '>{obj.SB3.stat}: {obj.SB3.value}</p>}
                                        {!obj.SB4 ? 'loading' : <p className='w-75 CB__pInfo '>{obj.SB4.stat}: {obj.SB4.value}</p>}


                                    </div>
                                }
                            </div>
                        )
                    })
                    }
                </div>

            </div>
            <input type={'file'} name='img-upload' id='idInput' accept='image/*' onChange={ImageHandler} />

            <label htmlFor='input' className='img-upload' >

            </label>

        </div>

    )
}

CardBuildImg.propTypes = {
    plume: PropTypes.object,
    nameC: PropTypes.string
}