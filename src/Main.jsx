import React, { Component } from 'react';
import Open from './components/open/open';
import Form from './components/form/form';
import Preview from './components/preview/preview';
import * as StarWarsPessoa from './services/starWarsPessoa.js';
import * as StarWarsFilme from './services/starWarsFilme.js';

export default class Main extends Component {

  state = {
    numeracao: 1,
    pessoas: [],
    personagem: '',
  };

  async getStarWarsData() {
    let resultadoPessoa = await StarWarsPessoa.StarWarsApiPessoa();
    let resultadoFilme = await StarWarsFilme.StarWarsApiFilme();
    this.setState({
      pessoas: resultadoPessoa.results,
      filmes: resultadoFilme.results
    })
    console.log(this.state.pessoas)
    console.log(this.state.filmes)
  }

  setPerson = (pessoa) => {
    this.setState({
      personagem: pessoa
    })
    this.getStarWarsData();
    console.log(this.state.personagem)
  }

  componentDidMount() {
    this.getStarWarsData();
  }

  render() {
    return (
      <section className="main-content">
        <Open />
        <Form state={this.state} selecionarPessoa={this.setPerson} />
        <Preview state={this.state} />
      </section>
    );
  }
}

