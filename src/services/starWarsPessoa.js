const url = 'https://swapi.co/api/people/?page=';

const StarWarsApiPessoa = (paginacao) => {

    return fetch(`${url}${paginacao}`, {
        method: 'GET'
    })
        .then(res => res.json())
}

export { StarWarsApiPessoa };