const url = 'https://swapi.co/api/starships/';

const StarWarsApiNaves = () => {

    return fetch(`${url}`, {
        method: 'GET'
    })
        .then(res => res.json())
}

export { StarWarsApiNaves };