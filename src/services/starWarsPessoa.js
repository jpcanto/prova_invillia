const url = 'https://swapi.co/api/people/';

const StarWarsApiPessoa = () => {

    return fetch(`${url}`, {
        method: 'GET'
    })
        .then(res => res.json())
}

export { StarWarsApiPessoa };