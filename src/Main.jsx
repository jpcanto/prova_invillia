import React, { Component } from 'react';
import Open from './components/open/open';
import Form from './components/form/form';
import Preview from './components/preview/preview';
import PreviewFilms from './components/previewFilms/previewFilms';
import * as StarWarsPessoa from './services/starWarsPessoa.js';
import * as StarWarsFilme from './services/starWarsFilme.js';

export default class Main extends Component {

  state = {
    numeracao: 1,
    pessoas: [],
    filmes: [],
    personagem: '',
    personagemFilmes: [],
  };

  async getStarWarsData() {
    let resultadoPessoa = await StarWarsPessoa.StarWarsApiPessoa();
    let resultadoFilme = await StarWarsFilme.StarWarsApiFilme();
    this.setState({
      pessoas: resultadoPessoa.results,
      filmes: resultadoFilme.results,
    })
  }

  setPerson = (pessoa) => {
    this.setState({
      personagem: pessoa[0],
      personagemFilmes: pessoa.slice(1, pessoa.length)
    })
    this.getStarWarsData();
    console.log(this.state.personagemFilmes)
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
              <Form state={this.state} selecionarPessoa={this.setPerson} />
              <Preview state={this.state} />
              <PreviewFilms state={this.state} />
            </>
        }
      </section>
    );
  }
}

