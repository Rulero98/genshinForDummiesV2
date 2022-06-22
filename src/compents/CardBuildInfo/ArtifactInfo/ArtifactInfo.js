import React from 'react'
import PropTypes from 'prop-types'

export const ArtifactInfo = ({ AR, id }) => {

    

    const getSelectMainStat = (id) => {
        if (!id) {
            return 0
        }
        if (id === 'Sands') {
            const idSelect = id + 'Main'
            return <select className='w-50' id={idSelect} >
                <option value={'Atk %'}>Atk %</option>
                <option value={'Def %'}>Def %</option>
                <option value={'Hp %'}>Hp %</option>
                <option value={'Energy Recharge'}>Energy Recharge</option>
                <option value={'Elemental Mastery'}>Elemental Mastery</option>
            </select>
        }
        if (id === 'Goblet') {
            const idSelect = id + 'Main'
            return <select className='w-50' id={idSelect} >
                <option value={'Atk %'}>Atk %</option>
                <option value={'Def %'}>Def %</option>
                <option value={'Hp %'}>Hp %</option>
                <option value={'Elemental Mastery'}>Elemental Mastery</option>
                <option value={'Geo Damage'}>Geo Damage</option>
                <option value={'Pyro Damage'}>PyroDamage</option>
                <option value={'Hydro Damage'}>Hydro Damage</option>
                <option value={'Cryo Damage'}>Cryo Damage</option>
                <option value={'Electro Damage'}>Electro Damage</option>
                <option value={'Anemo Damage'}>Anemo Damage</option>
            </select>
        }
        if (id === 'Circlet') {
            const idSelect = id + 'Main'
            return <select className='w-50' id={idSelect} >
                <option value={'Atk %'}>Atk %</option>
                <option value={'Def %'}>Def %</option>
                <option value={'Hp %'}>Hp %</option>
                <option value={'Crit Rate'}>Crit Rate</option>
                <option value={'DMG Crit'}>DMG Crit</option>
                <option value={'Healing Bonus'}>Healing Bonus</option>
                <option value={'Elemental Mastery'}>Elemental Mastery</option>
            </select>
        }


    }
    const getSelectSubStat = (id) => {


        return <select className='w-50' id={id+'SubSelect'} >
            <option value={'Atk'}>Atk</option>
            <option value={'Atk %'}>Atk %</option>
            <option value={'Def'}>Def</option>
            <option value={'Def %'}>Def %</option>
            <option value={'Hp'}>Hp</option>
            <option value={'Hp %'}>Hp %</option>
            <option value={'Elemental Mastery'}>Elemental Mastery</option>
            <option value={'Crit Rate'}>Crit. Rate</option>
            <option value={'DMG Crit'}>DMG Crit.</option>
        </select>

    }

    return (
        <div className='text-light'>
            {AR === 'Plume' ?

                <input type={'text'} placeholder={'Plume ATK'} className='w-100 text-center' id={id} /> :
                AR === 'Flower' ?
                    <input type={'text'} placeholder={'Flower HP'} className='w-100 text-center' id={id} /> :

                    <div>
                        {getSelectMainStat(id)}
                        <input type={'text'} placeholder={AR} className='w-50 text-center' id={id} />
                    </div>

            }
            {getSelectSubStat(id)}
            <input type={'text'} placeholder={'SubStat1'} className='w-50 text-center' id={id+'Sub1'} />



        </div>
    )
}

ArtifactInfo.propTypes = {
    AR: PropTypes.string,
    id: PropTypes.string
}