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
    let resultadoPessoa = await StarWarsPessoa.StarWarsApiPessoa(this.state.numeracao);
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

  setAheadPagination = () => {
    if (this.state.numeracao > 5) {
      alert('Número máximo de paginação atendido');
    } else {
       this.setState({
         numeracao: this.state.numeracao +1
       })
    }
    this.getStarWarsData();
  }
  setBehindPagination = () => {
    if (this.state.numeracao > 0) {
       this.setState({
         numeracao: this.state.numeracao -1
       })
    } else {
      alert('Não existe paginação abaixo de 0');
    }
    this.getStarWarsData()
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
              <Form state={this.state} setPerson={this.setPerson} 
              setAheadPagination={this.setAheadPagination}
              setBehindPagination={this.setBehindPagination}/>
              <div className="preview-box">
                <Preview state={this.state} />
              </div>
            </>
        }
      </section>
    );
  }
}

