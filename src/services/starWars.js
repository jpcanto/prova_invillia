const url = 'https://swapi.co/api/';

const StarWarsApi = (endpoint, seletor) => {

    return fetch(`${url}${endpoint}/${seletor}`, {
        method: 'GET'
    })
        .then(res => res.json())
}

export { StarWarsApi };