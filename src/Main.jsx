import React, { Component } from 'react';
import Open from './components/open/open';
import Form from './components/form/form';
import Preview from './components/preview/preview';
import * as StarWarsPessoa from './services/starWarsPessoa.js';
import * as StarWarsFilme from './services/starWarsFilme.js';
import * as StarWarsNaves from './services/starWarsNaves.js';

import './utils/fonts/fontawesome/css/all.min.css';

export default class Main extends Component {

  state = {
    numeracao: 1,
    pessoas: [],
    filmes: [],
    naves: [],
    personagem: '',
    personagemFilmes: [],
  };

  async getStarWarsData() {
    let resultadoPessoa = await StarWarsPessoa.StarWarsApiPessoa();
    let resultadoFilme = await StarWarsFilme.StarWarsApiFilme();
    let resultadoNaves = await StarWarsNaves.StarWarsApiNaves();
    this.setState({
      pessoas: resultadoPessoa.results,
      filmes: resultadoFilme.results,
      naves: resultadoNaves.results,
    })
  }

  setPerson = (pessoa) => {
    this.setState({
      personagem: pessoa[0],
      personagemFilmes: pessoa.slice(1, pessoa.length)
    })
    this.getStarWarsData();
    console.log(this.state.pessoas)
  }

  componentDidMount() {
    this.getStarWarsData();
  }

  render() {
    return (
      <section className="main-content">
        {
          this.state.pessoas.length <= 0 ?
            <div className="loader-box">
              <div className="loader"></div>
            </div> :
            <>
              <Open />
              <Form state={this.state} setPerson={this.setPerson} />
              <div className="preview-box">
                <Preview state={this.state} />
              </div>
            </>
        }
      </section>
    );
  }
}

