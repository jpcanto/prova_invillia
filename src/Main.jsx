import React, { Component } from 'react';
import Form from './components/form/form';
import * as StarWars from './services/starWars.js';

export default class Main extends Component {

  state = {
    module: '',
    numeracao: 1
  };

  async getStarWarsData() {
    let data = await StarWars.StarWarsApi(this.state.module, this.state.numeracao);
    this.setState({
      starWars: data.results
    })
  }

  componentWillMount() {
    this.getStarWarsData();
  }

  render() {
    return (
      <section className="main-content">
        <Form state={this.state} />
      </section>
    );
  }
}

