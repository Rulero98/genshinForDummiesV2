<<<<<<< HEAD
import { useEffect, useState } from 'react'
import { PropTypes } from 'prop-types'
import { getData } from '../helpers/getData'

export const useFetch = (type) => {

    const [state, setState] = useState([])

    useEffect(() => {
        getData(type).then(obj => setState({
            data: obj
        }))
    }, [type])
    return state
}

useFetch.propTypes = {
    type: PropTypes.string.isRequired
}
=======
import { useEffect, useState } from 'react'
import { PropTypes } from 'prop-types'
import { getData } from '../helpers/getData'

export const useFetch = (type) => {

    const [state, setState] = useState([])

    useEffect(() => {
        getData(type).then(obj => setState({
            data: obj
        }))
    }, [type])
    return state
}

useFetch.propTypes = {
    type: PropTypes.string.isRequired
}
>>>>>>> 6c6f7e9508abc60f73cca721e22d0b5a67590ab9
