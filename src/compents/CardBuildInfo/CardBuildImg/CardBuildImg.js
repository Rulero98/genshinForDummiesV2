import React, { useEffect, useState } from 'react'

import './CardBuildImg.css'

export const CardBuildImg = () => {

    const [profileImg, setProfileImg] = useState('')

    useEffect(() => {
        setProfileImg('')
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
                    style={{ backgroundImage: `url(${profileImg})` }}>
                    <div>SET YOUR INFORMATION HERE</div>
                </div>

            </div>
            <input type={'file'} name='img-upload' id='idInput' accept='image/*' onChange={ImageHandler} />

            <label htmlFor='input' className='img-upload' >

            </label>

        </div>

    )
}