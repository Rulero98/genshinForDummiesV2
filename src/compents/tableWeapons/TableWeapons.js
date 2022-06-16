<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { Form, Table } from 'react-bootstrap'
import { useFetch } from '../../hooks/useFetch'

import './TableWeapons.css'
export const TableWeapons = () => {

    const { data: weapons } = useFetch('weapons')
    const { data: names } = useFetch('weaponNames')

    const [sortType, setSortType] = useState('name')
    const [ascDesc, setAscDesc] = useState(true)
    const [result, setResult] = useState([])

    useEffect(() => {
        weapons && setResult([...weapons])
    }, [weapons])

    useEffect(() => {
        if (names?.length !== 0) {
            weapons?.forEach((e, i) => {
                e.imgname = names[i]
            })
        }
    }, [names])


    useEffect(() => {
        if (weapons && names) {
            const sortArray = type => {
                const types = {
                    name: 'name',
                    rarity: 'rarity',
                    type: 'type',
                    location: 'location',
                }
                const sortProperty = types[type]

                if ((sortProperty === 'name' || sortProperty === 'type' || sortProperty === 'rarity' || sortProperty === 'location') && ascDesc === true) {
                    const sorted = [...result].sort((a, b) => { return a[sortProperty] > b[sortProperty] ? 1 : -1 })
                    setResult(sorted)

                } else if ((sortProperty === 'name' || sortProperty === 'type' || sortProperty === 'rarity' || sortProperty === 'location') && ascDesc === false) {
                    const sorted = [...result].sort((a, b) => { return a[sortProperty] > b[sortProperty] ? -1 : 1 })
                    setResult(sorted)
                } else {
                    if (weapons) {
                        setResult(weapons)
                    }
                }
            }
            sortArray(sortType)
        }
    }, [sortType, ascDesc])


    const handleSearch = (e) => {
        if (weapons?.length) {
            const searchTextMinus = e.target.value.toLowerCase()
            const filteredData = weapons.filter((value) => {
                return (
                    value.name.toLowerCase().includes(searchTextMinus) ||
                    value.type.toLowerCase().includes(searchTextMinus) ||
                    value.location.toLowerCase().includes(searchTextMinus)
                )
            })
            if (result === '') {
                setResult(weapons)
            } else {

                setResult(filteredData)
            }
        }
    }

    const sortTable = (ascDesc) => setAscDesc(!ascDesc)

    return (
        <>
            <Form className='w-100 form-search'>
                <input
                    onChange={handleSearch}
                    placeholder={'search weapon'}
                    type={'text'}
                    className= 'search-weapon'
                />
            </Form>
            <Table className='table-weapon text-light container'>
                <thead>
                    <tr className="table-row">
                        <th
                            className={`table-header ${(ascDesc && sortType === 'name') ? 'border-bottom' : (!ascDesc && sortType === 'name') ? 'border-top' : ''}`}
                            onClick={() => { sortTable(ascDesc); setSortType('name') }}
                        >
                            Weapon
                        </th>
                        <th
                            className={`table-header ${(ascDesc && sortType === 'type') ? 'border-bottom' : (!ascDesc && sortType === 'type') ? 'border-top' : ''}`}
                            onClick={() => { sortTable(ascDesc); setSortType('type') }}
                        >
                            Type
                        </th>
                        <th
                            className={`table-header ${(ascDesc && sortType === 'rarity') ? 'border-bottom' : (!ascDesc && sortType === 'rarity') ? 'border-top' : ''}`}
                            onClick={() => { sortTable(ascDesc); setSortType('rarity') }}
                        >
                            Rarity
                        </th>
                        <th className="table-header">Description</th>
                        <th
                            className={`table-header ${(ascDesc && sortType === 'location') ? 'border-bottom' : (!ascDesc && sortType === 'location') ? 'border-top' : ''}`}
                            onClick={() => { sortTable(ascDesc); setSortType('location') }}
                        >
                            Location
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {!result ? 'no weapons yet' : result?.map((obj,i) => {
                        return <tr className='text-light table-row-b text-center' key={obj.name+i}>
                            <td>
                                {/*<div className="altura">
                                    <div className="w-50 img-weapon"><img src={`https://api.genshin.dev/weapons/${obj.imgname.name}/icon.png`} height='100px' width='100px' /></div>
                                    <div className=" w-50 text-start">{obj.name}</div>
                                </div>*/}
                            </td>
                            <td>{obj.type}</td>
                            <td>{obj.rarity}</td>
                            <td >
                                <p>Base attack: {obj.baseAttack}</p>
                                <p>SubStat: {obj.subStat}</p>
                                <p>Passive: {obj.passiveName}</p>
                                <p>{obj.passiveDesc}</p>
                            </td>
                            <td>{obj.location}</td>
                        </tr>
                    })}

                </tbody>
            </Table>
        </>
    )
}
=======
import React, { useEffect, useState } from 'react'
import { Form, Table } from 'react-bootstrap'
import { useFetch } from '../../hooks/useFetch'

import './TableWeapons.css'
export const TableWeapons = () => {

    const { data: weapons } = useFetch('weapons')
    const { data: names } = useFetch('weaponNames')

    const [sortType, setSortType] = useState('name')
    const [ascDesc, setAscDesc] = useState(true)
    const [result, setResult] = useState([])

    useEffect(() => {
        weapons && setResult([...weapons])
    }, [weapons])

    useEffect(() => {
        if (names?.length !== 0) {
            weapons?.forEach((e, i) => {
                e.imgname = names[i]
            })
        }
    }, [names])


    useEffect(() => {
        if (weapons && names) {
            const sortArray = type => {
                const types = {
                    name: 'name',
                    rarity: 'rarity',
                    type: 'type',
                    location: 'location',
                }
                const sortProperty = types[type]

                if ((sortProperty === 'name' || sortProperty === 'type' || sortProperty === 'rarity' || sortProperty === 'location') && ascDesc === true) {
                    const sorted = [...result].sort((a, b) => { return a[sortProperty] > b[sortProperty] ? 1 : -1 })
                    setResult(sorted)

                } else if ((sortProperty === 'name' || sortProperty === 'type' || sortProperty === 'rarity' || sortProperty === 'location') && ascDesc === false) {
                    const sorted = [...result].sort((a, b) => { return a[sortProperty] > b[sortProperty] ? -1 : 1 })
                    setResult(sorted)
                } else {
                    if (weapons) {
                        setResult(weapons)
                    }
                }
            }
            sortArray(sortType)
        }
    }, [sortType, ascDesc])


    const handleSearch = (e) => {
        if (weapons?.length) {
            const searchTextMinus = e.target.value.toLowerCase()
            const filteredData = weapons.filter((value) => {
                return (
                    value.name.toLowerCase().includes(searchTextMinus) ||
                    value.type.toLowerCase().includes(searchTextMinus) ||
                    value.location.toLowerCase().includes(searchTextMinus)
                )
            })
            if (result === '') {
                setResult(weapons)
            } else {

                setResult(filteredData)
            }
        }
    }

    const sortTable = (ascDesc) => setAscDesc(!ascDesc)

    return (
        <>
            <Form className='w-100 form-search'>
                <input
                    onChange={handleSearch}
                    placeholder={'search weapon'}
                    type={'text'}
                    className= 'search-weapon'
                />
            </Form>
            <Table className='table-weapon text-light container'>
                <thead>
                    <tr className="table-row">
                        <th
                            className={`table-header ${(ascDesc && sortType === 'name') ? 'border-bottom' : (!ascDesc && sortType === 'name') ? 'border-top' : ''}`}
                            onClick={() => { sortTable(ascDesc); setSortType('name') }}
                        >
                            Weapon
                        </th>
                        <th
                            className={`table-header ${(ascDesc && sortType === 'type') ? 'border-bottom' : (!ascDesc && sortType === 'type') ? 'border-top' : ''}`}
                            onClick={() => { sortTable(ascDesc); setSortType('type') }}
                        >
                            Type
                        </th>
                        <th
                            className={`table-header ${(ascDesc && sortType === 'rarity') ? 'border-bottom' : (!ascDesc && sortType === 'rarity') ? 'border-top' : ''}`}
                            onClick={() => { sortTable(ascDesc); setSortType('rarity') }}
                        >
                            Rarity
                        </th>
                        <th className="table-header">Description</th>
                        <th
                            className={`table-header ${(ascDesc && sortType === 'location') ? 'border-bottom' : (!ascDesc && sortType === 'location') ? 'border-top' : ''}`}
                            onClick={() => { sortTable(ascDesc); setSortType('location') }}
                        >
                            Location
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {!result ? 'no weapons yet' : result?.map((obj,i) => {
                        return <tr className='text-light table-row-b text-center' key={obj.name+i}>
                            <td>
                                {/*<div className="altura">
                                    <div className="w-50 img-weapon"><img src={`https://api.genshin.dev/weapons/${obj.imgname.name}/icon.png`} height='100px' width='100px' /></div>
                                    <div className=" w-50 text-start">{obj.name}</div>
                                </div>*/}
                            </td>
                            <td>{obj.type}</td>
                            <td>{obj.rarity}</td>
                            <td >
                                <p>Base attack: {obj.baseAttack}</p>
                                <p>SubStat: {obj.subStat}</p>
                                <p>Passive: {obj.passiveName}</p>
                                <p>{obj.passiveDesc}</p>
                            </td>
                            <td>{obj.location}</td>
                        </tr>
                    })}

                </tbody>
            </Table>
        </>
    )
}
>>>>>>> 6c6f7e9508abc60f73cca721e22d0b5a67590ab9
