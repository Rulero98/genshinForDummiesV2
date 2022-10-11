import ReactStars from 'react-rating-stars-component'
import React from 'react'

export const getStars = (count, value) =>{
    return <ReactStars count={count} value={value} size={24} edit={false} />
}