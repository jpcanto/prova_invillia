const url = 'https://swapi.co/api/films/';

const StarWarsApiFilme = () => {

    return fetch(`${url}`, {
        method: 'GET'
    })
        .then(res => res.json())
}

export { StarWarsApiFilme };