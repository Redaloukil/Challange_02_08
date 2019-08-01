import axios from 'axios'

const URL = "https://swapi.co/api/people/?format=json"

const responseBody = ( res ) => {
    return res.body
}


export const posts = {
    getByPage : () => axios.get("").then(responseBody),
    getAll: () => axios.get("https://swapi.co/api/people/?format=json").then(responseBody),
}
