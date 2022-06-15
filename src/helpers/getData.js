import axios from 'axios'
export const getData = async (type) => {

    if (type === 'characters') {
        const url = 'https://api.genshin.dev/characters/all'
        const response = await axios.get(url)
        const data = response.data

        const info = data.map(obj => {

            return {
                name: obj.name,
                vision: obj.vision,
                weapon: obj.weapon,
                nation: obj.nation,
                affiliation: obj.affilitaion,
                rarity: obj.rarity,
                constellation: obj.constellation,
                birthday: obj.birthday,
                description: obj.description,
                skillTalents: obj.skillTalents,
                passiveTalents: obj.passiveTalents,
                constellations: obj.constellations
            }
        })
        return info

    } else if (type === 'weapons') {
        const url = 'https://api.genshin.dev/weapons/all'
        const response = await axios.get(url)
        const data = response.data
        const info = data.map(obj => {
            return {
                name: obj.name,
                type: obj.type,
                rarity: obj.rarity,
                baseAttack: obj.baseAttack,
                subStat: obj.subStat,
                passiveName: obj.passiveName,
                passiveDesc: obj.passiveDesc,
                location: obj.location
            }
        })
        return info
    } else if (type === 'names') {
        const url = 'https://api.genshin.dev/characters'
        const response = await axios.get(url)
        const data = response.data
        const info = data.map((obj,i) => {
            return {
                name: data[i],                
            }
        })
        return info
    }else if (type === 'weaponNames') {
        const url = 'https://api.genshin.dev/weapons'
        const response = await axios.get(url)
        const data = response.data
        const info = data.map((obj,i) => {
            return {
                name: data[i],                
            }
        })
        return info
    }
}