import axios from 'axios'

const URL = "https://swapi.co/api/people/?format=json"

const responseBody = ( res ) => {
    return res.data
}


export const posts = {
    getByPage : (page) => axios.get(`https://swapi.co/api/people/?format=json&page=${page}`).then(responseBody),
    getAll: () => axios.get("https://swapi.co/api/people/?format=json").then(responseBody),
    getByUrl : (url) => axios.get(url).then(responseBody),
}




